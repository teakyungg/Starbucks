import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const parents = document.querySelector('.near-starbucks');
let elements = Array.from(parents.querySelectorAll('.inner > *[class*=ani]'));



const notic_button = document.querySelector('.notice .img');
let triggers = [];

notic_button.addEventListener('click', () => {

    setTimeout(() => {

        triggers.forEach((item) => {
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
        start: '-50px 70%',
        toggleActions: 'play reverse play reverse',

        onEnter: () => {
            gsap.to(item, {
                x: `${dir(index)}`,
                opacity: 1,
                delay: `${delay(index)}`,
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
    if (index < 2) return 100;
    else return -100;
}

// 딜레이 계산
function delay(index) {
    if (index === 0 || index === 2) return 0;
    else if (index === 1 || index === 3) return 0.2;
    else return 0.5;
}


