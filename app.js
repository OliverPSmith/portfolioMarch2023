

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const navLinks = Array.from(document.querySelectorAll('.nav-link'));

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', () => {
            hamburger.classList.remove('active');
            menu.classList.remove('active');
        });
    }
});