const cases_slider = document.getElementById('cases_slider');
let startX = 0;




steps_container.addEventListener('mousedown', function (e){
    pressed = true;
    startX = e.clientX;
})

steps_container.addEventListener('mouseleave', function (e){
    pressed = false;
})

window.addEventListener('mouseup', function (e){
    pressed = false;
})

steps_container.addEventListener('mousemove', function (e){
   if(!pressed) {
    return
   }
   steps_container.scrollLeft += startX - e.clientX
})