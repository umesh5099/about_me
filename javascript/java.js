var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");



sideNav.style.right = "-250px";
menuBtn.onclick = function() {

    if (sideNav.style.right == "-210px") {
        sideNav.style.right = "0";
    } else {
        sideNav.style.right = "-210px";
    }
}