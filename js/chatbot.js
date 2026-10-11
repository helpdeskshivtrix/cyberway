(function(){
// Free AI chat widget — powered by Puter.js (puter.com), no API key, no signup.
var css=document.createElement('style');
css.textContent=
'#cb-bubble{position:fixed;bottom:22px;right:22px;z-index:9998;width:56px;height:56px;border-radius:50%;'+
'background:linear-gradient(135deg,var(--bl),var(--cy));box-shadow:0 8px 24px #3b6bff55;border:none;cursor:pointer;'+
'display:flex;align-items:center;justify-content:center}'+
'#cb-bubble svg{width:26px;height:26px;stroke:#fff}'+
'#cb-badge{position:absolute;top:-2px;right:-2px;width:13px;height:13px;background:var(--pu);border-radius:50%;border:2px solid var(--bg)}'+
'#cb-panel{position:fixed;bottom:90px;right:22px;z-index:9999;width:340px;max-width:92vw;height:460px;max-height:72vh;'+
'background:var(--bg2);border:1px solid var(--line);border-radius:16px;box-shadow:0 20px 50px #00000066;'+
'display:none;flex-direction:column;overflow:hidden}'+
'#cb-panel.open{display:flex}'+
'#cb-head{padding:.7rem .9rem;display:flex;align-items:center;gap:.5rem;border-bottom:1px solid var(--line)}'+
'#cb-head .dot{width:8px;height:8px;border-radius:50%;background:var(--ok);box-shadow:0 0 6px var(--ok)}'+
'#cb-head strong{font-size:.85rem}#cb-head span{display:block;font-size:.7rem;color:var(--mu)}'+
'#cb-close{margin-left:auto;background:none;border:none;color:var(--mu);font-size:1.1rem;cursor:pointer}'+
'#cb-msgs{flex:1;overflow-y:auto;padding:.8rem;display:flex;flex-direction:column;gap:.5rem}'+
'.cb-msg{max-width:84%;padding:.5rem .7rem;border-radius:12px;font-size:.85rem;line-height:1.4}'+
'.cb-msg.bot{align-self:flex-start;background:var(--card);border:1px solid var(--line)}'+
'.cb-msg.user{align-self:flex-end;background:linear-gradient(135deg,var(--bl),var(--cy));color:#071018;font-weight:500}'+
'#cb-bar{display:flex;gap:.4rem;padding:.6rem;border-top:1px solid var(--line)}'+
'#cb-input{flex:1;resize:none;font-size:.85rem}'+
'#cb-send{width:36px;padding:0}';
document.head.appendChild(css);

var html=
'<button id="cb-bubble" title="Ask the Academy AI"><span id="cb-badge"></span>'+
'<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+
'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></button>'+
'<div id="cb-panel"><div id="cb-head"><span class="dot"></span><div><strong>CyberStudy AI</strong><span>Free · no sign-in needed</span></div>'+
'<button id="cb-close">&times;</button></div><div id="cb-msgs"></div>'+
'<div id="cb-bar"><textarea id="cb-input" rows="1" placeholder="Ask about networking, Linux, security..."></textarea>'+
'<button id="cb-send" class="alt">➤</button></div></div>';
var wrap=document.createElement('div');wrap.innerHTML=html;
while(wrap.firstChild)document.body.appendChild(wrap.firstChild);

var bubble=document.getElementById('cb-bubble'),panel=document.getElementById('cb-panel'),
 closeBtn=document.getElementById('cb-close'),msgs=document.getElementById('cb-msgs'),
 input=document.getElementById('cb-input'),send=document.getElementById('cb-send'),greeted=false;

function add(text,who){var d=document.createElement('div');d.className='cb-msg '+who;d.textContent=text;msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight;return d}

bubble.onclick=function(){
 panel.classList.add('open');document.getElementById('cb-badge').style.display='none';
 if(!greeted){add("Hi! I'm your free CyberStudy AI assistant. Ask me about networking, Linux, hashing, ciphers, or anything in the labs.",'bot');greeted=true}
 input.focus();
};
closeBtn.onclick=function(){panel.classList.remove('open')};
input.addEventListener('input',function(){input.style.height='auto';input.style.height=Math.min(input.scrollHeight,100)+'px'});
input.addEventListener('keydown',function(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();go()}});
send.onclick=go;

// Lazy-load Puter.js only when the chat is first used
var puterLoaded=false;
function ensurePuter(cb){
 if(puterLoaded||window.puter){puterLoaded=true;cb();return}
 var s=document.createElement('script');s.src='https://js.puter.com/v2/';
 s.onload=function(){puterLoaded=true;cb()};
 s.onerror=function(){cb()};
 document.head.appendChild(s);
}

function go(){
 var text=input.value.trim();if(!text)return;
 add(text,'user');input.value='';input.style.height='auto';send.disabled=true;
 var typing=add('Thinking…','bot');
 ensurePuter(function(){
  if(typeof puter==='undefined'||!puter.ai){typing.remove();add("The AI service didn't load — check your internet connection and try again.",'bot');send.disabled=false;return}
  puter.ai.chat(text,{model:'gpt-4o-mini'}).then(function(response){
   typing.remove();
   var reply=(response&&response.message&&response.message.content)?response.message.content:String(response);
   add(reply,'bot');
  }).catch(function(){typing.remove();add('Sorry, something went wrong reaching the AI. Please try again.','bot')})
  .finally(function(){send.disabled=false});
 });
}
})();
