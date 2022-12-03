window.addEventListener('DOMContentLoaded', function () {


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
        allowTouchMove: false,
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


    // Route manually

    // const route = (event) => {
    //     event = event || window.event
    //     event.preventDefault()
    //     window.history.pushState((data) => data.text())
    //     handleLocation()
    // }

    // const routes = {
    //     "?lang=uz": "./pages/index-uz.html",
    //     "?lang=ru": "../../index.html",
    //     "/": "../../index.html",
    //     404: "./pages/404.html",
    // }

    // const handleLocation = async () => {
    //     const path = window.location.pathname
    //     const route = routes[path] || route[404]
    //     const htmlRu = await fetch('../../index.html').then((data) => data.text())
    //     const htmlUz = await fetch('./pages/index-uz.html').then((data) => data.text())
    //     const body = document.querySelector('.body')
    //     if(this.window.pathname == "?lang=uz") {
    //         body.outerHTML = htmlUz
    //     } else if(this.window.pathname == "?lang=ru") {
    //         body.outerHTML = htmlRu
    //     }
    //     // console.log(html)
    // }

    // window.addEventListener('onpopstate', handleLocation)
    // window.route = route

    // window.addEventListener(route, route)

    // handleLocation()
})