import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.to('.favorite .test', {

    scrollTrigger: {
        trigger: '.favorite', // 적용대상
        start: 'top 70%',
        toggleActions: 'play reverse play reverse'
    },

    x: '30vw'

});


