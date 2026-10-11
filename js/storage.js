(function(){var K='cyberstudy-lab-v1',mem={},ok=true;
function load(){try{var r=localStorage.getItem(K);return r?JSON.parse(r):mem}catch(e){ok=false;return mem}}
function save(d){try{localStorage.setItem(K,JSON.stringify(d))}catch(e){ok=false;mem=d}}
window.CSStore={available:function(){load();return ok},
get:function(k,def){var d=load();return d[k]===undefined?def:d[k]},
set:function(k,v){var d=load();d[k]=v;save(d)},
exportJSON:function(){return JSON.stringify({app:'CyberStudy Lab',version:1,data:load()},null,2)},
importJSON:function(txt){var o;try{o=JSON.parse(txt)}catch(e){return 'That file is not valid JSON.'}
if(!o||o.app!=='CyberStudy Lab'||!o.data||typeof o.data!=='object'||Array.isArray(o.data))return 'This is not a CyberStudy Lab backup file.';
var d={};['done','scores','bookmarks','notes','activity','theme','access'].forEach(function(k){if(o.data[k]!==undefined)d[k]=o.data[k]});save(d);return ''},
clear:function(){try{localStorage.removeItem(K)}catch(e){}mem={}}}})();
