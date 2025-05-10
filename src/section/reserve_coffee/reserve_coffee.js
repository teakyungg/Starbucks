import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const parents = document.querySelector('.reserve_coffee');
let elements = Array.from(parents.querySelectorAll('.inner > *[class*=ani]'));

const notic_button = document.querySelector('.notice .img');
let triggers = [];

notic_button.addEventListener('click', () => {

    setTimeout(() => {

        triggers.forEach((item) => {
            item.vars.start = 'top 70%';
            item.refresh();
        });

    }, 600);

});

// 투명도 초기화
elements.forEach((item) => {
    gsap.set(item, {
        opacity: 0,
    });
});

// 요소 움직임
elements.forEach((item, index) => {

    const trigger = ScrollTrigger.create({
        trigger: parents,
        start: 'top 70%',
        toggleActions: 'play reverse play reverse',

        onEnter: () => {
            gsap.to(item, {
                x: `${dir(index)}`,
                opacity: 1,
                delay: `${index / 3}`,
            })
        },

        onLeaveBack: () => {
            gsap.to(item, {
                x: 0,
                opacity: 0
            })
        }
    });

    triggers.push(trigger);

});

// 좌우 이동 계산
function dir(index) {
    if (index < 3) return 100;
    else return -100;
}



