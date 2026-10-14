(()=>{'use strict';
const cards=[...document.querySelectorAll('.gallery-card')],buttons=[...document.querySelectorAll('[data-gallery-filter]')],dialog=document.querySelector('#gallery-dialog'),image=document.querySelector('#gallery-dialog-image'),title=document.querySelector('#gallery-dialog-title'),link=document.querySelector('#gallery-dialog-link'),position=document.querySelector('#gallery-position');let active=null,opener=null;
const visible=()=>cards.filter(c=>!c.hidden);
function show(card){active=card;const img=card.querySelector('img');image.src=img.src;image.alt=img.alt;title.textContent=card.querySelector('h2').textContent;link.href=card.querySelector('a').href;link.textContent=card.dataset.kind==='reel'?'Video auf Instagram ansehen ↗':'Beitrag auf Instagram ansehen ↗';const list=visible();position.textContent=(list.indexOf(card)+1)+' / '+list.length;}
cards.forEach(card=>card.querySelector('button').addEventListener('click',e=>{opener=e.currentTarget;show(card);dialog.showModal();}));
buttons.forEach(button=>button.addEventListener('click',()=>{buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));cards.forEach(c=>c.hidden=button.dataset.galleryFilter!=='all'&&c.dataset.kind!==button.dataset.galleryFilter);}));
function move(delta){const list=visible();show(list[(list.indexOf(active)+delta+list.length)%list.length]);}
document.querySelector('#gallery-prev').addEventListener('click',()=>move(-1));document.querySelector('#gallery-next').addEventListener('click',()=>move(1));
dialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();move(e.key==='ArrowLeft'?-1:1);}});
dialog.addEventListener('close',()=>{image.removeAttribute('src');opener?.focus();});
})();
