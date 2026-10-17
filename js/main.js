
// 栏目切换
document.getElementById('tabs').addEventListener('click',function(e){
  const b=e.target.closest('button'); if(!b)return;
  [...this.querySelectorAll('button')].forEach(x=>x.classList.toggle('on',x===b));
  document.querySelectorAll('.copy-pane').forEach(p=>
    p.classList.toggle('on',p.dataset.p===b.dataset.i));
});

// 图片放大
const lb=document.getElementById('lb');
document.getElementById('gal').addEventListener('click',function(e){
  const f=e.target.closest('.shot'); if(!f)return;
  document.getElementById('lbImg').src=f.dataset.full;
  document.getElementById('lbCap').textContent=f.dataset.cap;
  lb.classList.add('on');
});
lb.addEventListener('click',()=>lb.classList.remove('on'));
document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('on')});

// 场次跳转
const pv=document.getElementById('pv');
document.getElementById('bm').addEventListener('click',function(e){
  const it=e.target.closest('.bm-item'); if(!it)return;
  [...this.querySelectorAll('.bm-item')].forEach(x=>x.classList.toggle('on',x===it));
  pv.currentTime=parseFloat(it.dataset.t);
  pv.play().catch(()=>{});
});

// 滚动淡入
const io=new IntersectionObserver(es=>{
  es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})
},{threshold:.06,rootMargin:'0px 0px -40px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
