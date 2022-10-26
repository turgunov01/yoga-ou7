const scene = document.querySelector('.scene');
const parallaxInstance = new Parallax(scene, {
  relativeInput: true,
  hoverOnly: true
})

var swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  speed: 1000,
  spaceBetween: 30,
  slideToClickedSlide: true,
  resizeObserver: true,
  autoplay: {
    delay: 3000,
    duration: 3000,
    trasition: 3000,
    speed: 3000,
  },
  breakpoints: {
    0: {
      spaceBetween: 30,
    },
    660: {
      spaceBetween: 30,
    }
  }

  // initialSlides: 2,
  // centeredSlides: true,
  // loop: true,
  // slidesPerView: 'auto',
  // spaceBetween: 30,
  // autoplay: {
  //   delay: 3000,
  //   speed: 3000,
  // },
});

window.addEventListener('resize', () => {
  swiper.init()
})