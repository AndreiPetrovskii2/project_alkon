const steps_container = document.getElementById('steps_container');
let pressed = false;
let startX = 0;

steps_container.addEventListener('mousedown', function (e){
    pressed = true;
    startX = e.clientX;
    steps_container.style = "cursor:grabbing;";
})

steps_container.addEventListener('mouseleave', function (e){
    pressed = false;
})

window.addEventListener('mouseup', function (e){
    pressed = false;
    steps_container.style = "cursor:grab;"
})

steps_container.addEventListener('mousemove', function (e){
   if(!pressed) {
    return
   }
   steps_container.scrollLeft += startX - e.clientX
})

