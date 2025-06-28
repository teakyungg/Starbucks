import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

const notice_swiper = new Swiper('.notice > .left .swiper', {

    modules: [Autoplay],
    direction: 'vertical',
    loop: true,
    speed: 1000,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

});


document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        notice_swiper.autoplay.stop();
    } else {
        notice_swiper.autoplay.start();
    }
});