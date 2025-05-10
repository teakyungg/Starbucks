import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const parents = document.querySelector('.favorite');
let elements = parents.querySelectorAll('.ani');
elements = Array.from(elements);



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



elements.forEach((item, index) => {
    gsap.set(item, {
        opacity: 0
    })

    const trigger = ScrollTrigger.create({
        trigger: parents,
        start: 'top 70%',
        toggleActions: 'play reverse play reverse',

        onEnter: () => {
            gsap.to(item, {
                x: '10vw',
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
