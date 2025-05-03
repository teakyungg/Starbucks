import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const notice_swiper = new Swiper('.notice > .left .swiper', {

    modules: [Autoplay],
    direction: 'vertical',
    loop: true,
    speed: 1000,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
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


document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        notice_swiper.autoplay.stop();
    } else {
        notice_swiper.autoplay.start();
    }
});