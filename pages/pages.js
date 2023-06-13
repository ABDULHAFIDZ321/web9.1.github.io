
const menunavbar2 = document.querySelector('.menu-pages');
const isinav2 = document.querySelector('.isi-nav2-pages');
menunavbar2.addEventListener('click',function(){
    isinav2.classList.toggle('slide-pages');
});

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