import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const event_swiper = new Swiper('.awards > .swiper', {

    modules: [Autoplay, Navigation],
    direction: 'horizontal',
    loop: true,
    speed: 500,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    slidesPerView: 5,

    autoplay: {
        delay: 1500,
        disableOnInteraction: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.awards .swiper-button-next',
        prevEl: '.awards .swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

});




