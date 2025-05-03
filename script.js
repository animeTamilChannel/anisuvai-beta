// Search toggle
const sb = document.querySelector('.search-bar');
const input = sb.querySelector('input');
sb.addEventListener('click', ()=>{
  sb.style.width = '200px';
  input.style.width = '100px'; input.style.opacity = '1';
  input.focus();
});
document.addEventListener('click', e=>{
  if(!sb.contains(e.target)){
    sb.style.width = '2.5rem';
    input.style.width = '0'; input.style.opacity = '0';
  }
});

// Carousel drag
document.querySelectorAll('.carousel').forEach(car=>{
  let down=false, startX, scrollLeft;
  car.addEventListener('mousedown', e=>{ down=true; startX=e.pageX - car.offsetLeft; scrollLeft=car.scrollLeft; });
  car.addEventListener('mouseleave', ()=> down=false);
  car.addEventListener('mouseup', ()=> down=false);
  car.addEventListener('mousemove', e=>{
    if(!down) return;
    e.preventDefault();
    const x = e.pageX - car.offsetLeft;
    car.scrollLeft = scrollLeft - (x - startX) * 2;
  });
});

// Tab activation
document.querySelectorAll('.tab').forEach(tab=>{
  tab.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
  });
})