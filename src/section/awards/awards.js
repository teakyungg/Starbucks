import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';


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

    
    navigation: {
        nextEl: '.awards .swiper-button-next',
        prevEl: '.awards .swiper-button-prev',
    },


});




