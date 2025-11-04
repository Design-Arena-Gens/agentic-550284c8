document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href');
    if(id&&id.startsWith('#')){
      const el=document.querySelector(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth',block:'start'});
      }
    }
  });
});

const yearEl=document.getElementById('year');
if(yearEl){yearEl.textContent=new Date().getFullYear();}

const modal=document.getElementById('apply-modal');
const openers=document.querySelectorAll('[data-open-modal]');
openers.forEach(btn=>btn.addEventListener('click',()=>{
  if(typeof modal.showModal==='function') modal.showModal();
  else modal.setAttribute('open','');
}));

const form=document.getElementById('apply-form');
form?.addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(form);
  const name=data.get('name');
  const company=data.get('company');
  const email=data.get('email');
  const message=data.get('message');
  const subject=`Candidature ? LE CERCLE SCALE`;
  const body=`Nom: ${name}%0D%0AEntreprise: ${company}%0D%0AEmail: ${email}%0D%0A%0D%0AObjectif:%0D%0A${message}`;
  const mailto=`mailto:contact@lecerclescale.fr?subject=${encodeURIComponent(subject)}&body=${body}`;
  window.location.href=mailto;
  if(typeof modal.close==='function') modal.close();
});
