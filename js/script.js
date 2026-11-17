/* ========== Intersection Observer: появление секций при скролле ========== */
(function(){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  },{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
})();

/* ========== Навигация: изменение фона при скролле ========== */
(function(){
  const nav = document.querySelector('.nav');
  const onScroll = ()=>{
    nav.style.background = window.scrollY>20 ? 'rgba(10,10,20,.85)' : 'rgba(10,10,20,.6)';
  };
  window.addEventListener('scroll',onScroll,{passive:true});
  onScroll();
})();