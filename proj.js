function page4animation(){const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var elemc=document.querySelector(".elem-container")
var fixed=document.querySelector(".fixedimage")
elemc.addEventListener("mouseenter", function(){fixed.style.display ="block"})
elemc.addEventListener("mouseleave", function(){fixed.style.display ="none"})

var elems= document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image=e.getAttribute("data-image")
        fixed.style.backgroundImage=`url(${image})`
    })
})
}

function swiperanimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      }); 
}
swiperanimation()
page4animation()
var menu=document.querySelector(".menu")
var full=document.querySelector(".full-scr")
var navimg=document.querySelector("nav img")
var flag=0
menu.addEventListener("click",function(){
    if( flag==0){
    full.style.top = 0
    navimg.style.opacity = 0
    flag=1}
    else{ full.style.top="-100%"
        navimg.style.opacity=1
        flag=0}

})
var load=document.querySelector(".loader")
setTimeout(function(){
    load.style.top="-100%"
},5000)
