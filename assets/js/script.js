const scene = document.querySelector('.scene');
const parallaxInstance = new Parallax(scene, {
  relativeInput: true,
  hoverOnly: true
})

var swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  speed: 2000,
  duration: 2000,
  transition: 2000,
  autoplay: {
    delay: 3000,

  },
  breakpoints: {
    0: {
      spaceBetween: 30,
    },
    660: {
      spaceBetween: 20,
    },
  },


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