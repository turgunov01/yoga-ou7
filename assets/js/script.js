const scene = document.querySelector('.scene');
const parallaxInstance = new Parallax(scene, {
    relativeInput: true,
    hoverOnly: true
})

var swiper = new Swiper(".mySwiper", {
    // slidesPerView: 'auto',
    // centeredSlides: true,
    // centerInsufficientSlides: true,
    // spaceBetween: 30,
    // speed: 1000,
    // loop: true,
    // slideToClickedSlide: true,
    // autoplay: {
    //     delay: 3000,
    //     duration: 3000,
    //     trasition: 3000,
    //     speed: 3000,
    // },
    // breakpoints: {
    //     0: {
    //         spaceBetween: 10,
    //     },
    //     320: {
    //         spaceBetween: 30,
    //     }
    // }

    initialSlides: 2,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    speed: 1000,
    duration: 2000,
    transition: 500,
    autoplay: {
        delay: 3000,
    },

    breakpoints: {
        0: {
            spaceBetween: -5,
        },

        375: {
            spaceBetween: -20,
        },

        990: {
            spaceBetween: -20,
        }
    }
});