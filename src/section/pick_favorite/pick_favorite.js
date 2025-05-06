import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const parents = document.querySelector('.favorite');

const favorite = parents.querySelector('.title');
const menu = parents.querySelector('.menu');
const button = parents.querySelector('.add_button');

/* Pick Your Favorite */
gsap.set(favorite, {
    opacity: 0
});

gsap.to(favorite, {

    scrollTrigger: {
        trigger: parents,
        start: 'top 70%',
        toggleActions: 'play reverse play reverse'
    },

    x: '10vw',
    opacity: 1,
    marker: true


});


/* 메뉴 */
gsap.set(menu, {
    opacity: 0
});

ScrollTrigger.create({
    trigger: parents, // 만약 parents에 닿고  있고
    start: 'top 70%', // [parents의 가장 상단 부분이] [현재 화면의 스크롤 70% 밑쪽에 해당하는 부분에] 닿았을때 실행한다.
    toggleActions: 'play reverse play reverse',

    onEnter: () => {
        gsap.to(menu, {
            x: '10vw',
            opacity: 1,
            delay: 0.3,
        })
    },

    onLeaveBack: () => {
        gsap.to(menu, {
            x: 0,
            opacity: 0
        })
    }

})



/* 버튼 */
gsap.set(button, {
    opacity: 0
});

ScrollTrigger.create({
    trigger: parents,
    start: 'top 70%',
    toggleActions: 'play reverse play reverse',

    onEnter: () => {
        gsap.to(button, {
            x: '10vw',
            opacity: 1,
            delay: 0.5,
        })
    },

    onLeaveBack: () => {
        gsap.to(button, {
            x: 0,
            opacity: 0
        })
    }

})


