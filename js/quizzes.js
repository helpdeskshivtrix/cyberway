(function(){var box=document.getElementById('quiz');if(!box||!window.QUIZ)return;var Q=window.QUIZ.questions,i=0,ans=[];
function e(t,c,x){var n=document.createElement(t);if(c)n.className=c;if(x!==undefined)n.textContent=x;return n}
function show(){box.textContent='';var q=Q[i];box.append(e('p','','Question '+(i+1)+' of '+Q.length+' '),e('span','tag',q.level),e('h3','',q.q));
var fb=e('div');fb.setAttribute('aria-live','polite');
function mark(){box.querySelectorAll('.opt').forEach(function(b,k){if(k===q.a)b.classList.add('right');else if(k===ans[i])b.classList.add('wrong')});fb.textContent='';fb.append(e('p',ans[i]===q.a?'ok':'bad',(ans[i]===q.a?'Correct. ':'Not quite. ')+q.x))}
q.o.forEach(function(t,k){var b=e('button','opt',t);b.onclick=function(){if(ans[i]!==undefined)return;ans[i]=k;mark()};box.append(b)});box.append(fb);
var nav=e('div'),pv=e('button','alt','Previous'),nx=e('button','',i===Q.length-1?'Finish':'Next');pv.disabled=i===0;pv.onclick=function(){i--;show()};nx.onclick=function(){if(ans[i]===undefined){fb.textContent='Choose an answer first.';return}if(i===Q.length-1)end();else{i++;show()}};nav.append(pv,' ',nx);box.append(nav);if(ans[i]!==undefined)mark()}
function end(){var sc=0;Q.forEach(function(q,k){if(ans[k]===q.a)sc++});var p=Math.round(sc/Q.length*100),s=CSStore.get('scores',{}),o=s[window.QUIZ.id];if(!o||p>o.best)s[window.QUIZ.id]={best:p,date:new Date().toISOString().slice(0,10)};CSStore.set('scores',s);
box.textContent='';box.append(e('h3','','Your score: '+sc+' / '+Q.length+' ('+p+'%)'),e('p','',p>=80?'Great work!':p>=50?'Good start. Review the explanations and try again.':'Review the lessons, then retry.'));var r=e('button','','Retry');r.onclick=function(){i=0;ans=[];show()};box.append(r)}
show()})();
