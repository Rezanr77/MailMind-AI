// Navbar scroll
const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>{
  navbar.classList.toggle('scrolled',window.scrollY>20);
});

// Theme toggle
const themeBtn=document.getElementById('themeBtn');
const sunIcon=document.getElementById('sunIcon');
const moonIcon=document.getElementById('moonIcon');
let isDark=true;
themeBtn.addEventListener('click',()=>{
  isDark=!isDark;
  document.documentElement.setAttribute('data-theme',isDark?'dark':'light');
  document.body.style.background=isDark?'#0F0F12':'#F8F8FC';
  sunIcon.style.display=isDark?'none':'block';
  moonIcon.style.display=isDark?'block':'none';
  document.getElementById('sunIconM').style.display = isDark ? 'none' : 'block';
  document.getElementById('moonIconM').style.display = isDark ? 'block' : 'none';
});

// Mobile menu
const hamburger=document.getElementById('hamburger');
const mobileMenu=document.getElementById('mobileMenu');
hamburger.addEventListener('click',()=>{
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobileMenu.classList.remove('open')));

// Scroll animations
const observer=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}
  });
},{threshold:0.12});
document.querySelectorAll('.fade-up,.scale-in').forEach(el=>observer.observe(el));

// Staggered feature cards
document.querySelectorAll('.feature-card').forEach((card,i)=>{
  card.style.transitionDelay=`${i*0.07}s`;
});

// Billing toggle
let isYearly=false;
const prices={starter:[0,0],pro:[19,13],biz:[49,34]};
function toggleBilling(){
  isYearly=!isYearly;
  document.getElementById('billingToggle').classList.toggle('on',isYearly);
  const idx=isYearly?1:0;
  document.getElementById('starterPrice').textContent=prices.starter[idx];
  document.getElementById('proPrice').textContent=prices.pro[idx];
  document.getElementById('bizPrice').textContent=prices.biz[idx];
}

// FAQ accordion
function toggleFaq(el){
  const item=el.parentElement;
  const isOpen=item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(f=>f.classList.remove('open'));
  if(!isOpen)item.classList.add('open');
}

// Tab switcher
function switchTab(btn,tab){
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const content=document.getElementById('tabContent');
  const tabs={
    compose:`<div class="ss-email-compose"><div class="ss-field"><div class="ss-label">To</div><input class="ss-input form-input" value="sarah.chen@acme.com" readonly></div><div class="ss-field"><div class="ss-label">Subject</div><input class="ss-input form-input" value="Re: Q4 Partnership Proposal" readonly></div><div class="ss-field"><div class="ss-label">Your message</div><textarea class="ss-input ss-textarea form-input" readonly>Hi Sarah, thank you for following up on the Q4 partnership proposal. I've reviewed the initial terms and I'm genuinely excited about what we could build together. Could we schedule a 30-minute call this Thursday or Friday?</textarea></div><div class="ai-suggest"><div class="ai-suggest-label"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>AI Suggestion</div><div class="ai-suggest-text">Tone: Professional & Collaborative. Confidence: 97%. Tip: add specific agenda items to increase reply rate by ~34%.</div></div></div>`,
    chat:`<div class="ss-email-compose"><div style="margin-bottom:16px;font-size:13px;font-weight:700;color:var(--text-muted);letter-spacing:0.06em;text-transform:uppercase">AI Chat Assistant</div><div style="display:flex;flex-direction:column;gap:12px"><div style="padding:12px 16px;background:rgba(99,102,241,0.1);border-radius:12px 12px 4px 12px;font-size:13px;color:var(--text);align-self:flex-end;max-width:80%">Find all emails from Mark about the Q4 budget</div><div style="padding:12px 16px;background:var(--bg-card);border:1px solid var(--border);border-radius:4px 12px 12px 12px;font-size:13px;color:var(--text-muted);max-width:90%"><div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;font-size:11px;font-weight:700;color:var(--emerald);text-transform:uppercase;letter-spacing:0.06em"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>MailMind AI</div>Found 7 emails from Mark Johnson about Q4 budget between Oct 12 – Nov 3. Key threads: budget approval (2), revision requests (3), final sign-off (2). Want me to summarize them?</div><div style="padding:12px 16px;background:rgba(99,102,241,0.1);border-radius:12px 12px 4px 12px;font-size:13px;color:var(--text);align-self:flex-end;max-width:80%">Yes, summarize the revision requests</div><div style="padding:12px 16px;background:var(--bg-card);border:1px solid var(--border);border-radius:4px 12px 12px 12px;font-size:13px;color:var(--text-muted);max-width:90%">Mark requested 3 revisions: (1) Reduce contractor budget by 15%, (2) Add Q1 contingency line, (3) Move software licenses to CAPEX. All were addressed in the Nov 3 response.</div></div></div>`,
    templates:`<div class="ss-email-compose"><div style="margin-bottom:16px;font-size:13px;font-weight:700;color:var(--text-muted);letter-spacing:0.06em;text-transform:uppercase">Template Library</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">${['Follow-Up','Cold Outreach','Meeting Request','Proposal Response','Thank You','Decline Politely'].map((t,i)=>`<div style="padding:14px;background:rgba(99,102,241,0.06);border:1px solid var(--border);border-radius:8px;cursor:pointer;transition:all 0.2s" onmouseenter="this.style.borderColor='var(--indigo-soft)'" onmouseleave="this.style.borderColor='var(--border)'"><div style="font-size:13px;font-weight:700;margin-bottom:4px">${t}</div><div style="font-size:11px;color:var(--text-muted)">Professional · ${['45','32','28','51','19','37'][i]} uses this week</div></div>`).join('')}</div></div>`
  };
  content.style.opacity='0';
  setTimeout(()=>{content.innerHTML=tabs[tab];content.style.opacity='1';},200);
  content.style.transition='opacity 0.2s';
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const target=document.querySelector(a.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});