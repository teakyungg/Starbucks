const up_button = document.querySelector('#up_button');
let side_max_height = document.body.scrollHeight * (30 / 100); /* 전체 높이의 30% */

window.addEventListener('scroll', () => {

    // 30% 보다 내려갔다면
    if (window.scrollY > side_max_height) {
        up_button.style.transition = 'all 0.5s';
        up_button.style.right = '20px';
    }

    else {
        up_button.style.right = '-60px';
    }

});

up_button.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});