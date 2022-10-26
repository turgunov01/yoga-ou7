const scene = document.querySelector('.scene');
const parallaxInstance = new Parallax(scene, {
    relativeInput: true,
    hoverOnly: true
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    initialSlide: 1,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,

    autoplay: {
        delay: 3000,
        duration: 3000,
        trasition: 3000,
        speed: 3000,
    },
});