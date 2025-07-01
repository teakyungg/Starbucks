const promotion = document.querySelector('.promotion-click');   // 옮길 element
const promotion_button = document.querySelector('.notice .img'); // 버튼 위치

promotion_button.addEventListener('click', (event) => {
    event.preventDefault();
    promotion.classList.toggle('promotion-move');
});