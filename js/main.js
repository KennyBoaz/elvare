// Shared header + footer. Edit contact details here once and every page updates.
const C={phone:'0785304318',wa:'256785304318',email:'info@elvare.com',addr:'Kisugu, Makindye Division, Kibuli, Kampala, Uganda'};
const P=[['index.html','Home'],['about.html','About'],['services.html','Services'],['supplies.html','Supplies'],['contact.html','Contact']];
const cur=document.body.dataset.page;
document.body.insertAdjacentHTML('afterbegin',`<header><div class="wrap bar"><a class="logo" href="index.html"><b>ELVARE</b><small>Logistics &amp; Supplies</small></a><button id="tg" aria-label="Menu" aria-expanded="false">&#9776;</button><nav id="nv">${P.map(p=>`<a href="${p[0]}"${p[0]===cur?' class="on"':''}>${p[1]}</a>`).join('')}<a class="btn" href="contact.html">Get a Quote</a></nav></div></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer><div class="wrap"><div class="grid"><div><a class="logo" href="index.html"><b>ELVARE</b><small>Logistics &amp; Supplies</small></a><p style="margin-top:12px">Engineering supplies and technology solutions for businesses and builders in Kampala and beyond.</p></div><div><h3>Pages</h3>${P.map(p=>`<a href="${p[0]}">${p[1]}</a>`).join('')}</div><div><h3>Contact</h3><p>${C.addr}</p><a href="tel:${C.phone}">${C.phone}</a><a href="mailto:${C.email}">${C.email}</a></div></div><p class="copy">&copy; 2026 Elvare Logistics and Supplies. All rights reserved.</p></div></footer><a class="wa" href="https://wa.me/${C.wa}" target="_blank" rel="noopener">Chat on WhatsApp</a>`);
const tg=document.getElementById('tg'),nv=document.getElementById('nv');
tg.onclick=()=>{nv.classList.toggle('open');tg.setAttribute('aria-expanded',nv.classList.contains('open'))};
// Supplies filter
document.querySelectorAll('.filters button').forEach(b=>b.onclick=()=>{
 document.querySelectorAll('.filters button').forEach(x=>x.classList.remove('on'));b.classList.add('on');
 document.querySelectorAll('[data-c]').forEach(c=>c.style.display=(b.dataset.f==='all'||c.dataset.c===b.dataset.f)?'':'none')});
// Contact form
const f=document.getElementById('cf');
if(f){const q=new URLSearchParams(location.search).get('service');if(q)f.service.value=q;
f.onsubmit=e=>{e.preventDefault();let ok=true;
 const chk=(n,t)=>{const el=f[n],m=el.parentNode.querySelector('.err');const bad=!t(el.value.trim());m.textContent=bad?el.dataset.msg:'';if(bad)ok=false};
 chk('name',v=>v.length>1);chk('email',v=>/^\S+@\S+\.\S+$/.test(v));chk('phone',v=>/^[+\d\s]{9,15}$/.test(v));chk('message',v=>v.length>9);
 if(!ok)return;
 // TO CONNECT A BACKEND: replace this block with fetch('https://formspree.io/f/YOUR_ID',{method:'POST',body:new FormData(f)})
 const t=`Hello Elvare, I'm ${f.name.value} (${f.phone.value}). Interested in: ${f.service.value}. ${f.message.value}`;
 document.getElementById('ok').style.display='block';
 window.open(`https://wa.me/${C.wa}?text=${encodeURIComponent(t)}`,'_blank');f.reset()}}
