let links = document.querySelectorAll('.reward .link');

links.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
    });
});