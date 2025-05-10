import './style.css'
import.meta.glob('./section/**/*.css', { eager: true });

const jsModules = import.meta.glob('./section/**/*.js');

for (const path in jsModules) {
    jsModules[path]();
}

const button = document.querySelector('.notice .img');
button.addEventListener('click', () => {

    setTimeout(() => {
        const currentHeight = document.body.scrollHeight; // 현재 전체 높이
        const newHeight = currentHeight - 693;

        document.body.style.height = `${newHeight}px`;
    }, 600);

});
