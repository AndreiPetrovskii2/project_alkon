var step_1 = document.getElementById('step1');
var step_2 = document.getElementById('step2');
var step_3 = document.getElementById('step3');
var step_4 = document.getElementById('step4');
var step_5 = document.getElementById('step5');
var step_6 = document.getElementById('step6');
var step1_img = document.getElementById('step1_img');
var img1_opacity = document.getElementById('step1_img-opacity');
var step2_img  = document.getElementById('step2_img');
var img2_opacity = document.getElementById('step2_img-opacity');
var step3_img  = document.getElementById('step3_img');
var img3_opacity = document.getElementById('step3_img-opacity');
var step4_img  = document.getElementById('step4_img');
var img4_opacity = document.getElementById('step4_img-opacity');
var step5_img  = document.getElementById('step5_img');
var img5_opacity = document.getElementById('step5_img-opacity');
var step6_img  = document.getElementById('step6_img');
var img6_opacity = document.getElementById('step6_img-opacity');

step_1.addEventListener("mouseover" ,function (){
    step1_img.style = "display:none;"
    img1_opacity.style = "display:initial;"
})
step_2.addEventListener("mouseover" ,function (){
    step2_img.style = "display:none;"
    img2_opacity.style = "display:initial;"
})
step_3.addEventListener("mouseover" ,function (){
    step3_img.style = "display:none;"
    img3_opacity.style = "display:initial;"
})
step_4.addEventListener("mouseover" ,function (){
    step4_img.style = "display:none;"
    img4_opacity.style = "display:initial;"
})
step_5.addEventListener("mouseover" ,function (){
    step5_img.style = "display:none;"
    img5_opacity.style = "display:initial;"
})
step_6.addEventListener("mouseover" ,function (){
    step6_img.style = "display:none;"
    img6_opacity.style = "display:initial;"
})


step_1.addEventListener("mouseleave" ,function (){
    step1_img.style = "display:initial;"
    img1_opacity.style = "display:none;"
})
step_2.addEventListener("mouseleave" ,function (){
    step2_img.style = "display:initial;"
    img2_opacity.style = "display:none;"
})
step_3.addEventListener("mouseleave" ,function (){
    step3_img.style = "display:initial;"
    img3_opacity.style = "display:none;"
})
step_4.addEventListener("mouseleave" ,function (){
    step4_img.style = "display:initial;"
    img4_opacity.style = "display:none;"
})
step_5.addEventListener("mouseleave" ,function (){
    step5_img.style = "display:initial;"
    img5_opacity.style = "display:none;"
})
step_6.addEventListener("mouseleave" ,function (){
    step6_img.style = "display:initial;"
    img6_opacity.style = "display:none;"
})