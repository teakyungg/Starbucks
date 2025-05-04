import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const event_swiper = new Swiper('.event > .swiper', {

    modules: [Autoplay, Navigation, Pagination],
    direction: 'horizontal',
    loop: true,
    speed: 500,
    centeredSlides: true,
    /*  slidesPerView: 2.3, */
    slidesPerView: 'auto',
    spaceBetween: 20,

    on: {
        init: function () {
            reset();
            opacity();
        },

        slideChangeTransitionEnd: function () {
            opacity();
        }
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

});

function reset() {
    const pagination = document.querySelector('.event .swiper-pagination');
    pagination.style.bottom = '-5px';
}

function opacity() {

    let targets = document.querySelectorAll('.event .swiper-slide-prev img, .event .swiper-slide-next img');
    let activeSlide = document.querySelector('.event .swiper-slide-active img');

    console

    targets.forEach(element => {
        element.style.opacity = '0.5';
    });

    activeSlide.style.opacity = '1';
}
