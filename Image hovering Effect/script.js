let elem1 = document.getElementById('elem1');
let elem2 = document.getElementById('elem2');
let elem3 = document.getElementById('elem3');
let elem4 = document.getElementById('elem4');

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4')

elem1.addEventListener('mousemove',function(e){
    img1.style.left = e.x + "px";
    img1.style.top = e.y + "px";
})
elem1.addEventListener('mouseenter',function(){
    img1.style.opacity = 1;
})
elem1.addEventListener('mouseleave',function(){
    img1.style.opacity = 0;
})


elem2.addEventListener('mousemove',function(e){
    img2.style.left = e.x + "px";
    img2.style.top = e.y + "px";
})
elem2.addEventListener('mouseenter',function(){
    img2.style.opacity = 1;
})
elem2.addEventListener('mouseleave',function(){
    img2.style.opacity = 0;
})


elem3.addEventListener('mousemove',function(e){
    img3.style.left = e.x + "px";
    img3.style.top = e.y + "px";
})
elem3.addEventListener('mouseenter',function(){
    img3.style.opacity = 1;
})
elem3.addEventListener('mouseleave',function(){
    img3.style.opacity = 0;
})

elem4.addEventListener('mousemove',function(e){
    img4.style.left = e.x + "px";
    img4.style.top = e.y + "px";
})
elem4.addEventListener('mouseenter',function(){
    img4.style.opacity = 1;
})
elem4.addEventListener('mouseleave',function(){
    img4.style.opacity = 0;
})