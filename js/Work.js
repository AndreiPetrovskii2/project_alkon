var elem1 = document.getElementById('variant1');
var img= document.getElementById('img_variant1');
var img_hidden = document.getElementById('img_hidden');
var elem2 = document.getElementById('variant2');
var img2 = document.getElementById('img_variant2');
var img_hidden2 = document.getElementById('img_hidden2');
var elem3 = document.getElementById('variant3');
var img3 = document.getElementById('img_variant3');
var img_hidden3 = document.getElementById('img_hidden3');
var elem4 = document.getElementById('variant4');
var img4 = document.getElementById('img_variant4');
var img_hidden4 = document.getElementById('img_hidden4');
function changeItem() {
    img4.style="display : none;"
    img_hidden4.style = 'visibility:hidden;'
    img3.style="display : none;"
    img_hidden3.style = 'visibility:hidden;'
    img2.style="display : none;"
    img_hidden2.style = 'visibility:hidden;'
    img.style="display: initial;"
    img_hidden.style = 'visibility:visible;'
}
function changeOnMouseOver2() {
    img4.style="display : none;"
    img_hidden4.style = 'visibility:hidden;'
    img3.style="display : none;"
    img_hidden3.style = 'visibility:hidden;'
    img.style="display : none;"
    img2.style="display: initial;"
    img_hidden2.style = 'visibility:visible;'
    img_hidden.style = 'visibility:hidden;'
}
function changeOnMouseOver3() {
    img4.style="display : none;"
    img_hidden4.style = 'visibility:hidden;'
    img2.style="display : none;"
    img_hidden2.style = 'visibility:hidden;'
    img.style="display : none;"
    img3.style="display: initial;"
    img_hidden3.style = 'visibility:visible;'
    img_hidden.style = 'visibility:hidden;'
}
function changeOnMouseOver4() {
    img3.style="display : none;"
    img_hidden3.style = 'visibility:hidden;'
    img2.style="display : none;"
    img_hidden2.style = 'visibility:hidden;'
    img.style="display : none;"
    img4.style="display: initial;"
    img_hidden4.style = 'visibility:visible;'
    img_hidden.style = 'visibility:hidden;'
}

