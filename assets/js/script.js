const scene = document.querySelector('.scene');
const parallaxInstance = new Parallax(scene, {
    relativeInput: true,
    hoverOnly: true
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
});