(() => {
 'use strict';
 const form=document.querySelector('#reservation-form');if(!form)return;
 const date=document.querySelector('#reservation-date'),time=document.querySelector('#reservation-time'),guests=document.querySelector('#reservation-guests'),summary=document.querySelector('#reservation-summary'),submit=form.querySelector('[type=submit]'),group=document.querySelector('#reservation-group-note'),status=document.querySelector('#reservation-status');
 const preview=['localhost','127.0.0.1',''].includes(location.hostname)||new URLSearchParams(location.search).get('preview')==='1';
 document.querySelector('#reservation-preview-note').hidden=!preview;
 const parts=()=>Object.fromEntries(new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Vienna',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date()).filter(p=>p.type!=='literal').map(p=>[p.type,p.value]));
 function nowLocal(){const p=parts();return {date:`${p.year}-${p.month}-${p.day}`,minutes:Number(p.hour)*60+Number(p.minute)}}
 date.min=nowLocal().date;
 const times=[];for(const [start,end] of [[660,810],[1020,1290]])for(let n=start;n<=end;n+=30)times.push(`${String(Math.floor(n/60)).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`);
 function fillTimes(){const old=time.value,now=nowLocal();time.replaceChildren(new Option('Bitte wählen',''));for(const value of times){const opt=new Option(value+' Uhr',value);const [h,m]=value.split(':').map(Number);opt.disabled=date.value===now.date&&h*60+m<=now.minutes;time.add(opt)}if([...time.options].some(o=>o.value===old&&!o.disabled))time.value=old;}
 function formattedDate(){return date.value?new Intl.DateTimeFormat('de-AT',{weekday:'short',day:'2-digit',month:'2-digit',year:'numeric'}).format(new Date(date.value+'T12:00:00')):''}
 function update(){
  const large=guests.value==='group';group.hidden=!large;submit.disabled=large;guests.setCustomValidity(large?'Für mehr als 10 Personen ruf uns bitte an.':'');date.setCustomValidity('');time.setCustomValidity('');
  if(date.value){const selected=new Date(date.value+'T12:00:00');if(selected.getDay()===1)date.setCustomValidity('Montag ist Ruhetag. Bitte wähle Dienstag bis Sonntag.');if(date.value<nowLocal().date)date.setCustomValidity('Bitte wähle heute oder ein zukünftiges Datum.');}
  const text=large?'Mehr als 10 Personen · bitte telefonisch anfragen.':[formattedDate(),time.value?time.value+' Uhr':'',guests.value?guests.value+' '+(guests.value==='1'?'Person':'Personen'):''].filter(Boolean).join(' · ');
  const guestName=form.elements.name.value.trim();
  document.querySelector('#reservation-autoresponse').value=`Hallo ${guestName||'und vielen Dank'},\n\nvielen Dank für deine Reservierungsanfrage bei SIYU Sushi & Pho!\n\nDeine Anfrage:\n${text||'Datum, Uhrzeit und Personenanzahl noch offen'}\nName: ${guestName}\nE-Mail: ${form.elements.email.value.trim()}\nTelefon: ${form.elements.Telefon.value.trim()}${form.elements.Nachricht.value.trim()?'\nDeine Hinweise: '+form.elements.Nachricht.value.trim():''}\n\nWICHTIG: Dies ist die Zusammenfassung deiner Anfrage, noch keine bestätigte Reservation. Deine Reservation gilt erst, wenn wir sie persönlich per E-Mail oder telefonisch bestätigt haben.\n\nBei Fragen oder Änderungen erreichst du uns unter +43 5578 72886 oder hello@siyu-restaurant.com.\n\nWir freuen uns auf dich!\nDein SIYU Team\nHauptstrasse 29, 6973 Höchst`;
  summary.textContent=text||'Wähle Datum, Uhrzeit und Personenanzahl.';document.querySelector('#reservation-email-summary').value=text;document.querySelector('input[name="_subject"]').value='Reservierungsanfrage – '+(text||'SIYU');status.hidden=true;
 }
 fillTimes();update();date.addEventListener('change',()=>{fillTimes();update()});form.addEventListener('input',e=>{e.target.setCustomValidity?.('');update()});form.addEventListener('change',update);
 form.addEventListener('submit',e=>{
  e.preventDefault();if(form.dataset.submitting==='true')return;
  form.elements.name.value=form.elements.name.value.trim();form.elements.email.value=form.elements.email.value.trim();form.elements.Telefon.value=form.elements.Telefon.value.trim();update();
  if(form.elements.name.value.length<2)form.elements.name.setCustomValidity('Bitte gib deinen Namen an.');
  if(form.elements.Telefon.value.replace(/\D/g,'').length<6)form.elements.Telefon.setCustomValidity('Bitte gib eine erreichbare Telefonnummer an.');
  const opt=time.selectedOptions[0],now=nowLocal(),[h,m]=(time.value||'0:0').split(':').map(Number);
  if(time.value&&(!times.includes(time.value)||opt.disabled||(date.value===now.date&&h*60+m<=now.minutes)))time.setCustomValidity('Bitte wähle eine zukünftige Uhrzeit innerhalb unserer Öffnungszeiten.');
  if(!form.reportValidity())return;
  if(preview){document.querySelector('#reservation-entry').hidden=true;const success=document.querySelector('#reservation-success');success.hidden=false;document.querySelector('#reservation-success-mode').textContent='Vorschau: So sieht die Meldung nach dem Absenden aus. Es wurde keine E-Mail versendet.';document.querySelector('#reservation-success-summary').textContent=summary.textContent;document.querySelector('#reservation-mail-text').textContent=document.querySelector('#reservation-autoresponse').value;success.focus();success.scrollIntoView({block:'center',behavior:'auto'});return;}
  form.dataset.submitting='true';submit.disabled=true;submit.textContent='Anfrage wird übermittelt …';form.setAttribute('aria-busy','true');HTMLFormElement.prototype.submit.call(form);
 });
 document.querySelector('#reservation-again').addEventListener('click',()=>{document.querySelector('#reservation-success').hidden=true;document.querySelector('#reservation-entry').hidden=false;date.focus()});
 addEventListener('pageshow',()=>{form.dataset.submitting='false';form.removeAttribute('aria-busy');submit.innerHTML='Tisch anfragen <span aria-hidden="true">↗</span>';update()});
})();
