(function(){
  var S = window.ZENDO_SCREENS || [];
  var $ = function(id){return document.getElementById(id)};
  var src = function(s){return 'screens/' + s.file};
  // Gallery (file order)
  var g = $('gallery');
  S.forEach(function(s,i){
    var f = document.createElement('figure');
    f.innerHTML = '<img loading="lazy" src="'+src(s)+'" alt="'+s.title+'"><figcaption><b>'+s.title+'</b>'+s.caption+'</figcaption>';
    f.onclick = function(){ openLb(i) };
    g.appendChild(f);
  });
  // Lightbox
  var li = 0, lb = $('lb');
  function showLb(){ var s=S[li]; $('lbImg').src=src(s); $('lbImg').alt=s.title; $('lbCap').innerHTML='<b>'+s.title+'</b> &middot; '+s.caption; }
  function openLb(i){ li=i; showLb(); lb.classList.add('open'); }
  function closeLb(){ lb.classList.remove('open'); }
  function stepLb(d){ li=(li+d+S.length)%S.length; showLb(); }
  $('lbX').onclick=closeLb; $('lbP').onclick=function(e){e.stopPropagation();stepLb(-1)}; $('lbN').onclick=function(e){e.stopPropagation();stepLb(1)};
  lb.onclick=function(e){ if(e.target===lb) closeLb(); };
  // Prototype (story order)
  var P = S.filter(function(s){return typeof s.story==='number'}).sort(function(a,b){return a.story-b.story});
  var pi = 0, dots = $('pDots');
  P.forEach(function(s,i){ var b=document.createElement('button'); b.title=s.title; b.onclick=function(){go(i)}; dots.appendChild(b); });
  P.forEach(function(s){ var im=new Image(); im.src=src(s); }); // preload
  function go(i){
    pi = Math.max(0, Math.min(P.length-1, i)); var s=P[pi];
    $('pImg').src=src(s); $('pImg').alt=s.title;
    $('pStep').textContent='Step '+(pi+1)+' of '+P.length;
    $('pTitle').textContent=s.title; $('pCap').textContent=s.caption;
    [].forEach.call(dots.children,function(d,j){d.classList.toggle('on',j===pi)});
    $('bPrev').disabled = pi===0; $('bNext').textContent = pi===P.length-1 ? 'Start over \u21ba' : 'Next \u2192';
  }
  function next(){ go(pi===P.length-1 ? 0 : pi+1) } function prev(){ go(pi-1) }
  $('pNext').onclick=next; $('pPrev').onclick=prev; $('bNext').onclick=next; $('bPrev').onclick=prev;
  document.addEventListener('keydown',function(e){
    if(lb.classList.contains('open')){ if(e.key==='Escape')closeLb(); if(e.key==='ArrowRight')stepLb(1); if(e.key==='ArrowLeft')stepLb(-1); return; }
    var r=$('prototype').getBoundingClientRect(); if(r.top<innerHeight && r.bottom>0){ if(e.key==='ArrowRight')next(); if(e.key==='ArrowLeft')prev(); }
  });
  if(P.length) go(0);
})();
