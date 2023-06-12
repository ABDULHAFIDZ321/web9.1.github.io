let intro = document.querySelector('.splash-screen');
let logo = document.querySelector('.judul-splash-screen');
let logospan = document.querySelectorAll('.text-splash-screen');

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    logospan.forEach((span,idx)=>{
        setTimeout(()=>{
            span.classList.add('active');
        },(idx + 1)* 400)
    });
    setTimeout(()=>{
        logospan.forEach((span,idx)=>{
            setTimeout(()=>{
                span.classList.remove('active');
                span.classList.add('fade');
            },(idx+1)*200)
        })
    },2000)
    setTimeout(()=>{
        intro.style.top='-100vh';
    },2100)
  });
});
window.addEventListener('scroll', function () {
    var navbar = this.document.getElementById("navbar");
    navbar.classList.toggle("sticky",this.window.scrollY > 0 );
});
function changeimage1(element){
    element.setAttribute("src","images/ipa/ipa6.jpg")
}
function changeimageback1(element){
    element.setAttribute("src","images/ipa/ipa1.jpg")
}
function changeimage2(element){
    element.setAttribute("src","images/ipa/ipa7.jpg")
}
function changeimageback2(element){
    element.setAttribute("src","images/ipa/ipa2.jpg")
}
function changeimage3(element){
    element.setAttribute("src","images/ipa/ipa8.jpg")
}
function changeimageback3(element){
    element.setAttribute("src","images/ipa/ipa3.jpg")
}
function changeimage4(element){
    element.setAttribute("src","images/ipa/ipa9.jpg")
}
function changeimageback4(element){
    element.setAttribute("src","images/ipa/ipa4.jpg")
}
function changeimage5(element){
    element.setAttribute("src","images/ipa/ipa11.jpg")
}

function changeimageback5(element){
    element.setAttribute("src","images/ipa/ipa5.jpg")
}
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

const menunavbar = document.querySelector('.menu');
const isinav =document.querySelector('.isi-nav2');
menunavbar.addEventListener('click', function(){
    isinav.classList.toggle('slide');
});



