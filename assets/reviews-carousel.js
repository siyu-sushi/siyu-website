(() => {
  'use strict';
  const viewport = document.querySelector('#review-scroll');
  if (!viewport) return;
  const track = viewport.querySelector('.review-track');
  const group = track.querySelector('.review-group');
  const toggle = document.querySelector('#review-autoplay');
  const status = toggle.querySelector('span');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const duplicate = group.cloneNode(true);
  duplicate.setAttribute('aria-hidden', 'true');
  duplicate.querySelectorAll('a, button').forEach(el => el.tabIndex = -1);
  track.append(duplicate);
  let distance = 0, position = 0, expected = 0;
  let userPaused = false, hovered = false, focused = false;
  let visible = !('IntersectionObserver' in window), resumeAt = 0;
  let previous = 0, running = false, drag = null;
  const clock = () => performance.now();
  function measure() {
    distance = group.getBoundingClientRect().width + (parseFloat(getComputedStyle(track).gap) || 0);
  }
  function updateControl() {
    toggle.disabled = reduced.matches;
    toggle.setAttribute('aria-pressed', String(userPaused || reduced.matches));
    toggle.setAttribute('aria-label', reduced.matches ? 'Automatische Bewegung wegen reduzierter Bewegung deaktiviert' : userPaused ? 'Automatische Bewegung fortsetzen' : 'Automatische Bewegung pausieren');
    status.textContent = reduced.matches ? 'Automatik aus' : userPaused ? 'Fortsetzen' : 'Pause';
  }
  function manual() { resumeAt = clock() + 8000; expected = viewport.scrollLeft; running = false; }
  toggle.addEventListener('click', () => { userPaused = !userPaused; running = false; updateControl(); });
  viewport.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') hovered = true; });
  viewport.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') hovered = false; });
  viewport.addEventListener('focusin', () => { focused = true; });
  viewport.addEventListener('focusout', e => { focused = viewport.contains(e.relatedTarget); });
  viewport.addEventListener('wheel', manual, { passive: true });
  viewport.addEventListener('keydown', manual);
  viewport.addEventListener('scroll', () => {
    if (Math.abs(viewport.scrollLeft - expected) > 2) manual();
  }, { passive: true });
  viewport.addEventListener('pointerdown', e => {
    manual();
    if (e.pointerType !== 'mouse' || e.button !== 0 || e.target.closest('a,button')) return;
    drag = { id: e.pointerId, x: e.clientX, scroll: viewport.scrollLeft, moved: false };
    viewport.setPointerCapture(e.pointerId);
  });
  viewport.addEventListener('pointermove', e => {
    if (!drag || e.pointerId !== drag.id) return;
    const delta = e.clientX - drag.x;
    if (Math.abs(delta) > 6) drag.moved = true;
    if (drag.moved) {
      viewport.classList.add('dragging');
      viewport.scrollLeft = drag.scroll - delta;
      e.preventDefault();
    }
  });
  function release(e) {
    if (!drag || e.pointerId !== drag.id) return;
    if (viewport.hasPointerCapture(e.pointerId)) viewport.releasePointerCapture(e.pointerId);
    drag = null;
    viewport.classList.remove('dragging');
    manual();
  }
  viewport.addEventListener('pointerup', release);
  viewport.addEventListener('pointercancel', release);
  document.querySelectorAll('[data-review-step]').forEach(button => button.addEventListener('click', () => {
    manual();
    viewport.scrollBy({ left: Number(button.dataset.reviewStep) * viewport.clientWidth * .8, behavior: reduced.matches ? 'auto' : 'smooth' });
  }));
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { visible = entries[0].isIntersecting; running = false; }, { threshold: .05 }).observe(viewport);
  }
  if ('ResizeObserver' in window) new ResizeObserver(measure).observe(group);
  addEventListener('resize', measure);
  document.addEventListener('visibilitychange', () => { running = false; });
  reduced.addEventListener('change', () => { running = false; updateControl(); measure(); });
  function frame(now) {
    requestAnimationFrame(frame);
    if (Math.abs(viewport.scrollLeft - expected) > 2) manual();
    const delta = previous ? Math.min(now - previous, 50) : 0;
    previous = now;
    const active = visible && !document.hidden && !userPaused && !reduced.matches && !hovered && !focused && !drag && now >= resumeAt && distance > viewport.clientWidth;
    if (!active) { running = false; return; }
    if (!running) { position = viewport.scrollLeft; running = true; }
    position = (position + delta * .015) % distance;
    expected = position;
    viewport.scrollLeft = position;
  }
  measure(); updateControl(); requestAnimationFrame(frame);
})();
