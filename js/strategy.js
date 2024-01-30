let offset = 0;
let slider = document.getElementById('strategy_slider');
let left = document.getElementById('left');
let right = document.getElementById('right');
left.addEventListener('click' ,function(){
    offset += 1184;
    if(offset > 1184){
        offset = 1184;
    }
    slider.style.left = -offset + 'px';
});
right.addEventListener('click' ,function(){
    offset -= 1184;
    if(offset < 0){
        offset = 0;
    }
    slider.style.left = -offset + 'px';
});


left.addEventListener('mousedown', function(){
    left.style = 'opacity : 100%;' , 'border: solid 1px #DE8216;';
});
right.addEventListener('mousedown', function(){
    right.style = 'opacity : 100%;' , 'border: solid 1px #DE8216;';
});
right.addEventListener('mouseup', function(){
    right.style = 'opacity: 50%;';
});
left.addEventListener('mouseup', function(){
    left.style = 'opacity: 50%;';
});
