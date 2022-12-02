window.addEventListener('DOMContentLoaded', function () {


    const scene = document.querySelector('.scene');
    const parallaxInstance = new Parallax(scene, {
        relativeInput: true,
        hoverOnly: true
    })

    this.addEventListener('resize', function () {
        this.window.location.reload()
        swiper.update()
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
})

window.onload = function () {
    if (!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
    if (window.location.href == 'https://yogastream.uz?lang=uz' || window.location.href == 'http://localhost:2005/?lang=uz' || window.location.href == 'https://yogastream.uz?lang=uz' || window.location.href == 'http://localhost:3000/?lang=uz' || window.location.href == 'https://yogastream.netlify.app/?lang=uz') {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}


let body = document.querySelector('body')

console.log("The full URL of this page is:<br>" + window.location.href)

if (window.location.href == 'https://yogastream.uz?lang=ru#loaded' || window.location.href == 'http://localhost:2005/?lang=ru#loaded' || window.location.href == 'https://yogastream.uz?lang=ru' || window.location.href == 'http://localhost:2005/?lang=ru' || window.location.href == 'https://yogastream.netlify.app/?lang=ru' || window.location.href == 'https://yogastream.netlify.app/' || window.location.href == 'https://yogastream.netlify.app/#loaded') {
    //   console.log('Hello Russia')
    body.innerHTML = `
    <nav class="nav">
        <div class="container">
            <div class="header__logo">
                <div class="header__icon">
                    <img src="./assets/img/favicon.svg" class="header__icon-fav" alt="">
                    <div class="text">
                        <div class="header__icon-texts">
                            <h4 class="header__icon-title">OU7 Training</h4>
                            <p class="header__icon-about">Создано при поддержке Отабека Умарова</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nav__directions">
                <div class="installation">
                    <a target="_blank" href="https://apps.apple.com/app/ou7-training-pro/id1487763621"
                        class="installation__link">
                        <img src="./assets/img/applestore.svg" alt="" class="installation__image download">
                    </a>
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.neotech.ou7"
                        class="installation__link">
                        <img src="./assets/img/googleplay.svg" alt="" class="installation__image download">
                    </a>
                </div>
                <div class="lang">
                    <a href="?lang=uz" class="uz">
                        <img src="./assets/img/uz.svg" class="lang__icon" alt="">
                    </a>
                    <a href="?lang=ru" class="ru">
                        <img src="./assets/img/ru.svg" class="lang__icon active" alt="">
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <header class="header">
        <div class="container">
            <div class="header__background">
                <img src="./assets/img/wave.png" alt="" class="header__background-image">
            </div>
            <div class="header__content scene">
                <p class="header__content-name">Йога
                    <br> Медитация </p>
                <img src="./assets/img/header__back.png" class=" header__content-image" alt="">
                <img src="./assets/img/yoga-staying.svg" data-depth="0.2"
                    class="header__content-icon header__content-icon-1" alt="">
                <img src="./assets/img/yoga-meditation.svg" data-depth="-0.2" class=" header__content-icon
                    header__content-icon-2" alt="">
            </div>
        </div>
    </header>

    <main class="main">
        <section class="intro">
            <div class="intro__container">
                <div class="intro__block">
                    <div class="intro__texts">
                        <h1 class="intro__title">
                            Йога и медитация
                        </h1>
                        <p class="intro__text">
                            Путь к физическому и духовному самосовершенствованию, к гармонии жизни и идеальная система
                            оздоровления в новом формате
                        </p>
                    </div>
                    <div class="intro__content">
                        <div class="intro__content-background scene">
                            <img src="./assets/img/wave.png" class="intro__content-image" alt="">
                            <div class="intro__content-quality" data-depth="0.1">
                                <a href="#!" class="intro__content-quality_auto">auto</a>
                                <a href="#!" class="intro__content-quality_exact">1080</a>
                            </div>
                        </div>
                        <div class="intro__pause">
                            <img src="./assets/img/pause.svg" class="intro__pause-icon" alt="">
                            <img src="./assets/img/calors.svg" class="intro__pause-cals" alt="">
                        </div>
                        <div class="intro__install">
                            <p class="intro__info">
                                Начните заниматься вместе с нами в бесплатном приложении OU7 Training и будьте здоровы
                            </p>
                            <div class="intro__install-btns">
                                <a target="_blank" href="https://apps.apple.com/app/ou7-training-pro/id1487763621"
                                    class="intro__install-btn">
                                    <img src="./assets/img/applestore.svg" class="intro__install-btn-image download"
                                        alt="">
                                </a>
                                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.neotech.ou7"
                                    class="intro__install-btn">
                                    <img src="./assets/img/googleplay.svg" class="intro__install-btn-image download"
                                        alt="">
                                </a>
                            </div>
                            <div class="intro__install-btns none">
                                <a target="_blank" href="https://apps.apple.com/app/ou7-training-pro/id1487763621"
                                    class="intro__install-btn">
                                    <img src="./assets/img/slides/applename.svg"
                                        class="intro__install-btn-image download" alt="">
                                </a>
                                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.neotech.ou7"
                                    class="intro__install-btn">
                                    <img src="./assets/img/slides/googlename.svg"
                                        class="intro__install-btn-image download" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="slider">
            <h1 class="slider__title">Бесплатные тренировоки</h1>
            <p class="slider__text">Для любого уровня подготовки</p>
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide swiper-slide-visible">
                        <div class="swiper__slide">
                            <p class="swiper-slide-level mid">Средний</p>
                            <img src="./assets/img/slides/duo-slide.png" class="swiper-slide-image" alt="">
                            <p class="swiper-slide-text">Интенсив для ног</p>
                        </div>
                    </div>
                    <div class="swiper-slide swiper-slide-visible">
                        <div class="swiper__slide">
                            <p class="swiper-slide-level hard">Сложный</p>
                            <img src="./assets/img/slides/staying-slide.png" class="swiper-slide-image" alt="">
                            <p class="swiper-slide-text hard">Баланс и гибкость</p>
                        </div>
                    </div>
                    <div class="swiper-slide swiper-slide-visible">
                        <div class="swiper__slide">
                            <p class="swiper-slide-level easy">Лёгкий</p>
                            <img src="./assets/img/slides/fly-up.png" class="swiper-slide-image" alt="">
                            <p class="swiper-slide-text">Йога при болях в спине и коленях</p>
                        </div>
                    </div>
                    <div class="swiper-slide swiper-slide-visible">
                        <div class="swiper__slide">
                            <p class="swiper-slide-level easy">Лёгкий</p>
                            <img src="./assets/img/slides/nonormal-stay.png" class="swiper-slide-image" alt="">
                            <p class="swiper-slide-text">Гимнастика для суставов</p>
                        </div>
                    </div>
                    <div class="swiper-slide swiper-slide-visible">
                        <div class="swiper__slide">
                            <p class="swiper-slide-level easy">Лёгкий</p>
                            <img src="./assets/img/slides/solo-slide.png" class="swiper-slide-image" alt="">
                            <p class="swiper-slide-text">Глубокое расслабление - Шавасан</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="intro__install-btns">
                <a href="https://apps.apple.com/app/ou7-training-pro/id1487763621" class="intro__install-btn">
                    <img src="./assets/img/applestore.svg" class="intro__install-btn-image download" alt="">
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.neotech.ou7" class="intro__install-btn">
                    <img src="./assets/img/googleplay.svg" class="intro__install-btn-image download" alt="">
                </a>
            </div>
            <div class="intro__install-btns none">
                <a target="_blank" href="https://apps.apple.com/app/ou7-training-pro/id1487763621"
                    class="intro__install-btn">
                    <img src="./assets/img/slides/applename.svg" class="intro__install-btn-image download" alt="">
                </a>
                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.neotech.ou7"
                    class="intro__install-btn">
                    <img src="./assets/img/slides/googlename.svg" class="intro__install-btn-image download" alt="">
                </a>
            </div>
        </section>
    </main>
    <footer class="footer">
        <div class="container">
            <div class="footer__logo">
                <div class="footer__icon">
                    <img src="./assets/img/favicon.svg" class="footer__icon-fav" alt="">
                    <div class="text">
                        <div class="footer__icon-texts">
                            <h4 class="footer__icon-title">OU7 Training</h4>
                            <p class="footer__icon-about">Создано при поддержке Отабека Умарова</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__copy">
                <p class="footer__copy-name">
                    Copyright © OU7, 2022
                </p>
            </div>
            <div class="footer__soc">
                <a target="_blank" href="https://t.me/ou7_training_app" class="footer__soc download">
                    <img src="./assets/img/social-media/telegram.svg" alt="">
                </a>
                <a target="_blank" href="https://www.instagram.com/ou7training/" class="footer__soc download">
                    <img src="./assets/img/social-media/instagram.svg" alt="">
                </a>
                <a target="_blank" href="https://www.facebook.com/OU7Training/" class="footer__soc download">
                    <img src="./assets/img/social-media/facebook.svg" alt="">
                </a>
            </div>
        </div>
    </footer>

    <style scoped>
        .header__content::after {
            content: 'Групповые тренировки';
            position: absolute;
            top: 12rem;
            right: calc(100% / 24);
            background: linear-gradient(268.78deg, #1DCCFD -0.12%, #9C27B0 102.45%);
            border-radius: 100px;
            color: white;
            width: 26.4rem;
            font-size: 1.6rem;
            line-height: 2.6rem;
            font-weight: 700;
            height: 5.4rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        @media(max-width: 768px) {
          .header__content::after {
              display: none !important;
          }
      }
    </style>

    <script src="./assets/js/parallax.js"></script>
    <script src="./assets/js/swiper.js"></script>
    <script src="./assets/js/script.js"></script>
    `
}
if (window.location.href == 'https://yogastream.uz?lang=uz#loaded' || window.location.href == 'https://yogastream.netlify.app/?lang=uz#loaded' || window.location.href == 'http://localhost:2005/?lang=uz#loaded' || window.location.href == 'https://yogastream.uz?lang=uz' || window.location.href == 'http://localhost:2005/?lang=uz' || window.location.href == 'https://yogastream.netlify.app/?lang=uz') {
    //   console.log('Hello Uzbekistan')
    body.innerHTML = `
    <nav class="nav">
        <div class="container">
            <div class="header__logo">
                <div class="header__icon">
                    <img src="./assets/img/favicon.svg" class="header__icon-fav" alt="">
                    <div class="text">
                        <div class="header__icon-texts">
                            <h4 class="header__icon-title">OU7 Training</h4>
                            <p class="header__icon-about">Otabek Umarov qo'llab-quvvatlashi bilan yaratilgan </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nav__directions">
                <div class="installation">
                    <a target="_blank" href="https://apps.apple.com/app/ou7-training-pro/id1487763621"
                        class="installation__link">
                        <img src="./assets/img/applestore.svg" alt="" class="installation__image download">
                    </a>
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.neotech.ou7"
                        class="installation__link">
                        <img src="./assets/img/googleplay.svg" alt="" class="installation__image download">
                    </a>
                </div>
                <div class="lang">
                    <a href="?lang=uz" class="uz">
                        <img src="./assets/img/uz.svg" class="lang__icon active" alt="">
                    </a>
                    <a href="?lang=ru" class="ru">
                        <img src="./assets/img/ru.svg" class="lang__icon" alt="">
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <header class="header">
        <div class="container">
            <div class="header__background">
                <img src="./assets/img/wave.png" alt="" class="header__background-image">
            </div>
            <div class="header__content scene">
                <p class="header__content-name">Yoga <br> meditatsiya </p>
                <img src="./assets/img/header__back.png" class=" header__content-image" alt="">
                <img src="./assets/img/yoga-staying.svg" data-depth="0.2"
                    class="header__content-icon header__content-icon-1" alt="">
                <img src="./assets/img/yoga-meditation.svg" data-depth="-0.2" class=" header__content-icon
                    header__content-icon-2" alt="">
            </div>
        </div>
    </header>

    <main class="main">
        <section class="intro">
            <div class="intro__container">
                <div class="intro__block">
                    <div class="intro__texts">
                        <h1 class="intro__title">
                        Yoga va meditatsiya
                        </h1>
                        <p class="intro__text">
                        Jismoniy va ma'naviy o'zini o'zi takomillashtirish, hayotning uyg'unligiga yo’l va sog’liqni saqlash bo’yicha yangi formatdagi mukammal tizim
                        </p>
                    </div>
                    <div class="intro__content">
                        <div class="intro__content-background scene">
                            <img src="./assets/img/wave.png" class="intro__content-image" alt="">
                            <div class="intro__content-quality" data-depth="0.1">
                                <a href="#!" class="intro__content-quality_auto">auto</a>
                                <a href="#!" class="intro__content-quality_exact">1080</a>
                            </div>
                        </div>
                        <div class="intro__pause">
                            <img src="./assets/img/pause.svg" class="intro__pause-icon" alt="">
                            <img src="./assets/img/calors.svg" class="intro__pause-cals" alt="">
                        </div>
                        <div class="intro__install">
                            <p class="intro__info">
                            Bepul OU7 Training ilovasida biz bilan shug’ullanishni boshlang va sog'lom bo'ling. 
                            </p>
                            <div class="intro__install-btns">
                                <a href="https://apps.apple.com/app/ou7-training-pro/id1487763621"
                                    class="intro__install-btn">
                                    <img src="./assets/img/applestore.svg" class="intro__install-btn-image download"
                                        alt="">
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.neotech.ou7"
                                    class="intro__install-btn">
                                    <img src="./assets/img/googleplay.svg" class="intro__install-btn-image download"
                                        alt="">
                                </a>
                            </div>
                            <div class="intro__install-btns none">
                                <a target="_blank" href="https://apps.apple.com/app/ou7-training-pro/id1487763621"
                                    class="intro__install-btn">
                                    <img src="./assets/img/slides/applename.svg"
                                        class="intro__install-btn-image download" alt="">
                                </a>
                                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.neotech.ou7"
                                    class="intro__install-btn">
                                    <img src="./assets/img/slides/googlename.svg"
                                        class="intro__install-btn-image download" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="slider">
            <h1 class="slider__title">Bepul mashg'ulotlar
            </h1>
            <p class="slider__text">Har qanday darajadagi jismoniy tayyorgarlik egalari uchun
            </p>
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide swiper-slide-visible">
                        <div class="swiper__slide">
                            <p class="swiper-slide-level mid">O’rta daraja</p>
                            <img src="./assets/img/slides/duo-slide.png" class="swiper-slide-image" alt="">
                            <p class="swiper-slide-text">Oyoqlar uchun intensiv 
                            </p>
                        </div>
                    </div>
                    <div class="swiper-slide swiper-slide-visible">
                        <div class="swiper__slide">
                            <p class="swiper-slide-level hard">Murakkab 
                            </p>
                            <img src="./assets/img/slides/staying-slide.png" class="swiper-slide-image" alt="">
                            <p class="swiper-slide-text hard">Muvozanat va egiluvchanlik 
                            </p>
                        </div>
                    </div>
                    <div class="swiper-slide swiper-slide-visible">
                        <div class="swiper__slide">
                            <p class="swiper-slide-level easy">Oson 
                            </p>
                            <img src="./assets/img/slides/fly-up.png" class="swiper-slide-image" alt="">
                            <p class="swiper-slide-text">Bel va tizza og’riqlari uchun yoga mashg’ulotlari 
                            </p>
                        </div>
                    </div>
                    <div class="swiper-slide swiper-slide-visible">
                        <div class="swiper__slide">
                            <p class="swiper-slide-level easy">Oson
                            </p>
                            <img src="./assets/img/slides/nonormal-stay.png" class="swiper-slide-image" alt="">
                            <p class="swiper-slide-text">Bog’imlar uchun gimnastika 
                            </p>
                        </div>
                    </div>
                    <div class="swiper-slide swiper-slide-visible">
                        <div class="swiper__slide">
                            <p class="swiper-slide-level easy">Oson
                            </p>
                            <img src="./assets/img/slides/solo-slide.png" class="swiper-slide-image" alt="">
                            <p class="swiper-slide-text">Chuqur dam olish — Shavasana 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="intro__install-btns">
                <a target="_blank" href="https://apps.apple.com/app/ou7-training-pro/id1487763621" class="intro__install-btn">
                    <img src="./assets/img/applestore.svg" class="intro__install-btn-image download" alt="">
                </a>
                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.neotech.ou7" class="intro__install-btn">
                    <img src="./assets/img/googleplay.svg" class="intro__install-btn-image download" alt="">
                </a>
            </div>
            <div class="intro__install-btns none">
                <a target="_blank" href="https://apps.apple.com/app/ou7-training-pro/id1487763621"
                    class="intro__install-btn">
                    <img src="./assets/img/slides/applename.svg" class="intro__install-btn-image download" alt="">
                </a>
                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.neotech.ou7"
                    class="intro__install-btn">
                    <img src="./assets/img/slides/googlename.svg" class="intro__install-btn-image download" alt="">
                </a>
            </div>
        </section>
    </main>
    <footer class="footer">
        <div class="container">
            <div class="footer__logo">
                <div class="footer__icon">
                    <img src="./assets/img/favicon.svg" class="footer__icon-fav" alt="">
                    <div class="text">
                        <div class="footer__icon-texts">
                            <h4 class="footer__icon-title">OU7 Training</h4>
                            <p class="footer__icon-about">Otabek Umarov qo'llab-quvvatlashi bilan yaratilgan </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__copy">
                <p class="footer__copy-name">
                    Copyright © OU7, 2022
                </p>
            </div>
            <div class="footer__soc">
                <a target="_blank" href="https://t.me/ou7_training_app" class="footer__soc download">
                    <img src="./assets/img/social-media/telegram.svg" alt="">
                </a>
                <a target="_blank" href="https://www.instagram.com/ou7training/" class="footer__soc download">
                    <img src="./assets/img/social-media/instagram.svg" alt="">
                </a>
                <a target="_blank" href="https://www.facebook.com/OU7Training/" class="footer__soc download">
                    <img src="./assets/img/social-media/facebook.svg" alt="">
                </a>
            </div>
        </div>
    </footer>

    <style scoped>

    @media(max-width: 768px) {
      .header__content::after {
          display: none !important;
      }
  }
        .header__content::after {
            content: 'Jamoaviy mashg’ulotlar';
            position: absolute;
            top: 12rem;
            right: calc(100% / 24);
            background: linear-gradient(268.78deg, #1DCCFD -0.12%, #9C27B0 102.45%);
            border-radius: 100px;
            color: white;
            width: 26.4rem;
            font-size: 1.6rem;
            line-height: 2.6rem;
            font-weight: 700;
            height: 5.4rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    </style>

    <script src="./assets/js/parallax.js"></script>
    <script src="./assets/js/swiper.js"></script>
    <script src="./assets/js/script.js"></script>
    `
}