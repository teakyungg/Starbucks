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
    slidesPerView: 'auto',
    spaceBetween: 20,

    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },

    on: {
        init: function () {
            opacity();
        },

        slideChangeTransitionStart: function () {
            opacity();
        },

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

});

function opacity() {

    let targets = document.querySelectorAll('.event .swiper-slide-prev img, .event .swiper-slide-next img');
    let activeSlide = document.querySelector('.event .swiper-slide-active img');

    targets.forEach(element => {
        element.style.opacity = '0.5';
    });

    activeSlide.style.opacity = '1';
}
