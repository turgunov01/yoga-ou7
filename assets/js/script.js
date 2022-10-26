const scene = document.querySelector('.scene');
const parallaxInstance = new Parallax(scene, {
    relativeInput: true,
    hoverOnly: true
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    initialSlide: 2,
    centeredSlides: true,
    spaceBetween: 30,
    speed: 1000,
    // loop: true,
    slideToClickedSlide: true,
    pauseOnMouseEnter: true,
    autoplay: {
        delay: 3000,
        duration: 3000,
        trasition: 3000,
        speed: 3000,
    },
    breakpoints: {
        0: {
            spaceBetween: 15,
        },
        320: {
            spaceBetween: 30,
        }
    }
});

