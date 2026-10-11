(function(){
var P=[['index.html','Home','Main'],['pages/academy.html','All modules','Learning Academy'],['pages/computer-basics.html','Computer basics','Learning Academy'],['pages/networking.html','Networking','Learning Academy'],['pages/linux.html','Linux','Learning Academy'],['pages/security-fundamentals.html','Security fundamentals','Learning Academy'],['pages/web-security.html','Web security','Learning Academy'],
['pages/password-lab.html','Password lab','Practice Lab'],['pages/hash-lab.html','Hash lab','Practice Lab'],['pages/encoding-lab.html','Encoding lab','Practice Lab'],['pages/subnet-calculator.html','Subnet calculator','Practice Lab'],['pages/cipher-lab.html','Cipher lab','Practice Lab'],['pages/port-scanner-lab.html','Port scanner simulator','Practice Lab'],['pages/sqli-xss-lab.html','SQLi & XSS playground','Practice Lab'],['pages/phishing-lab.html','Phishing analysis lab','Practice Lab'],
['pages/quizzes.html','General quiz','Quizzes'],['pages/glossary.html','Glossary','Knowledge Center'],['pages/ports-reference.html','Ports reference','Knowledge Center'],
['pages/progress.html','Progress','Account'],['pages/bookmarks.html','Bookmarks','Account'],['pages/notes.html','Notes','Account'],['pages/notebook.html','Notebook','Account'],['pages/settings.html','Settings','Account'],['pages/search.html','Search','Account'],['pages/about.html','About','Account']];
window.CS_PAGES=P;
var b=document.body,root=b.dataset.root||'',cur=b.dataset.page||'index.html',H=document.documentElement;
var acc=CSStore.get('access',{});if(CSStore.get('theme','dark')==='light')H.dataset.theme='light';
if(acc.contrast)H.dataset.contrast='high';if(acc.large)H.dataset.font='large';
function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x)e.textContent=x;return e}
var top=el('header','top'),mb=el('button','menu-btn','Menu');mb.setAttribute('aria-label','Toggle navigation menu');mb.setAttribute('aria-expanded','false');
var lg=el('a','logo');lg.href=root+'index.html';lg.innerHTML='Cyber<b>Study</b> Lab';
var f=el('form');f.setAttribute('role','search');var q=el('input');q.type='search';q.placeholder='Search…';q.setAttribute('aria-label','Search the site');
var go=el('button','alt','Go');f.append(q,go);f.onsubmit=function(e){e.preventDefault();location.href=root+'pages/search.html?q='+encodeURIComponent(q.value)};
var tb=el('button','alt',H.dataset.theme==='light'?'Dark':'Light');tb.onclick=function(){var l=H.dataset.theme==='light';if(l)delete H.dataset.theme;else H.dataset.theme='light';CSStore.set('theme',l?'dark':'light');tb.textContent=l?'Light':'Dark'};
var net=el('span','tag','Online');top.append(mb,lg,f,tb,net);
var side=el('nav','side');side.setAttribute('aria-label','Main navigation');var g='';
P.forEach(function(p){if(p[2]!==g){g=p[2];if(g!=='Main')side.append(el('h2','',g))}var a=el('a','',p[1]);a.href=root+p[0];if(p[0]===cur){a.className='active';a.setAttribute('aria-current','page')}side.append(a)});
mb.onclick=function(){var o=side.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
var main=document.getElementById('main'),lay=el('div','layout');main.parentNode.insertBefore(top,main);main.parentNode.insertBefore(lay,main);lay.append(side,main);
var cr=el('div','crumbs');cr.setAttribute('aria-label','Breadcrumb');var h=el('a','','Home');h.href=root+'index.html';cr.append(h);
if(cur!=='index.html'){cr.append(' / ');var t=P.filter(function(p){return p[0]===cur})[0];cr.append(t?t[1]:cur)}main.prepend(cr);
var ft=el('footer','foot');ft.innerHTML='CyberStudy Lab · Educational use only. Practise only on systems you own or are authorised to test.<br>Your progress is saved in this browser only and does not sync between devices.';lay.after(ft);
function ns(){net.textContent=navigator.onLine?'Online':'Offline'}addEventListener('online',ns);addEventListener('offline',ns);ns();
})();
