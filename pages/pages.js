
const menunavbar2 = document.querySelector('.menu-pages');
const navMenu2 = document.querySelector('.nav-menu-pages');
menunavbar2.addEventListener('click',function(){
    navMenu2.classList.toggle('slide-pages');
});
const navLink =document.querySelectorAll('.isi-navbar-pages')

function linkAction(){
   
    navMenu2.classList.remove('slide-pages');
}
navLink.forEach(e=>e.addEventListener('click',linkAction));

const mySwiper = new Swiper('#swiper-1',{
   effect : 'fade',
   pagination :{
    el:'.swiper-pagination',
    type:'bullets'
   },
   autoplay:{
    delay:2500,
   },
   loop:true,
   disableOnInteraction	:false,

});