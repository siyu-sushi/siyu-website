export async function validatePdfUploads(files) {
  const maxFile = 5_000_000;
  if (files.reduce((sum, f) => sum + (f?.size || 0), 0) > 2 * maxFile) return 'Die Anhänge dürfen zusammen höchstens 10 MB gross sein.';
  for (const file of files.filter(Boolean)) {
    if (!/\.pdf$/i.test(file.name)) return 'Bitte lade deine Unterlagen als PDF hoch.';
    if (!file.size || file.size > maxFile) return 'Jede PDF darf höchstens 5 MB gross sein und darf nicht leer sein.';
    const bytes = new Uint8Array(await file.slice(0, 5).arrayBuffer());
    if (String.fromCharCode(...bytes) !== '%PDF-') return 'Diese Datei ist keine gültige PDF. Bitte wähle eine PDF-Datei aus.';
  }
  return '';
}

if (typeof document !== 'undefined') {
  const nav = document.querySelector('#navigation'), toggle = document.querySelector('#nav-toggle');
  function closeNav() { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Menü öffnen'); toggle.textContent = '☰'; }
  toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Menü schliessen' : 'Menü öffnen'); toggle.textContent = open ? '×' : '☰'; });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });
  document.querySelectorAll('[data-legal]').forEach(button => button.addEventListener('click', () => document.querySelector('#' + button.dataset.legal).showModal()));
  document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
  document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('click', e => { if (e.target !== dialog) return; const r = dialog.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); }));
  addEventListener('scroll', () => document.querySelector('.header').classList.toggle('scrolled', scrollY > 50), { passive: true });
  const form = document.querySelector('#application-form');
  if (form) {
    const button = form.querySelector('[type=submit]'), status = document.querySelector('#application-status');
    let submitting = false;
    if (location.protocol === 'https:' || location.protocol === 'http:') form.elements._next.value = new URL('jobs-danke.html', location.href).href;
    const reset = () => { submitting = false; button.disabled = false; button.innerHTML = 'Bewerbung absenden <span aria-hidden="true">↗</span>'; form.removeAttribute('aria-busy'); };
    addEventListener('pageshow', reset);
    form.querySelectorAll('input,textarea,select').forEach(input => input.addEventListener('input', () => { input.setCustomValidity(''); status.hidden = true; }));
    form.addEventListener('submit', async e => {
      e.preventDefault();
      if (submitting) return;
      form.elements.name.value = form.elements.name.value.trim(); form.elements.email.value = form.elements.email.value.trim();
      form.elements.Nachricht.value = form.elements.Nachricht.value.trim();
      if (form.elements.name.value.length < 2) form.elements.name.setCustomValidity('Bitte gib deinen vollständigen Namen an.');
      if (form.elements.Nachricht.value.length < 10) form.elements.Nachricht.setCustomValidity('Schreib uns bitte ein paar Worte zu deiner Bewerbung.');
      if (!form.reportValidity()) return;
      submitting = true; button.disabled = true; form.setAttribute('aria-busy', 'true');
      try {
        const files = [form.elements.attachment.files[0], form.elements.attachment2.files[0]];
        const error = await validatePdfUploads(files);
        if (error) { status.textContent = error; status.hidden = false; status.focus(); reset(); return; }
        status.hidden = true; button.textContent = 'Bewerbung wird übermittelt…';
        HTMLFormElement.prototype.submit.call(form);
      } catch {
        status.textContent = 'Die Dateien konnten nicht vorbereitet werden. Bitte versuche es erneut oder sende deine Bewerbung per E-Mail an hello@siyu-restaurant.com.';
        status.hidden = false; status.focus(); reset();
      }
    });
  }
}
