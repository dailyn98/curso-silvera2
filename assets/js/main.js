  //testimonial
 $('.testimonial-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
 $('.owl-carousel').owlCarousel({
 	
 	autoplayhoverpause: true,
 	autoplaytimeout:100,
 	items: 2,
 	nav: false,
 	loop: true,
  animateOut: 'fadeOut',

 });

 const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");

btn.onclick = ()=>{
    widget.style.display="none";
    post.style.display="block";
    editBtn.onclick = ()=>{
        widget.style.display="block";
        post.style.display="none";
    }
    return false;
}
window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

