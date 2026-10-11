(function(){var id=document.body.dataset.lesson,box=document.getElementById('lesson-tools');if(!id||!box)return;var S=CSStore;
function list(k){return S.get(k,[])}
var done=document.createElement('button'),bm=document.createElement('button'),st=document.createElement('p'),bar=document.createElement('div');bar.className='bar';bar.innerHTML='<i></i>';
function draw(){var d=list('done').indexOf(id)>=0,m=list('bookmarks').indexOf(id)>=0;done.textContent=d?'Completed ✓ (click to undo)':'Mark as completed';bm.textContent=m?'Bookmarked ★':'Bookmark';bm.className=m?'':'alt';
var t=window.CS_PAGES.filter(function(p){return p[2]==='Learning Academy'&&p[0]!=='pages/academy.html'}).length,n=list('done').length;bar.firstChild.style.width=Math.round(n/t*100)+'%';st.textContent=n+' of '+t+' lessons completed'}
function tog(k){var a=list(k),i=a.indexOf(id);if(i>=0)a.splice(i,1);else a.push(id);S.set(k,a);if(k==='done'&&i<0){var ac=S.get('activity',{}),d=new Date().toISOString().slice(0,10);ac[d]=(ac[d]||0)+1;S.set('activity',ac)}draw()}
done.onclick=function(){tog('done')};bm.onclick=function(){tog('bookmarks')};
var ta=document.createElement('textarea'),lb=document.createElement('label');lb.textContent='My notes for this lesson (saved in this browser)';lb.htmlFor='note';ta.id='note';ta.value=S.get('notes',{})[id]||'';ta.oninput=function(){var o=S.get('notes',{});o[id]=ta.value;S.set('notes',o)};
box.append(done,' ',bm,st,bar,lb,ta);if(!S.available()){var w=document.createElement('p');w.className='bad';w.textContent='Browser storage is unavailable, so progress will be lost when you leave this page.';box.append(w)}draw()})();
