
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.header-menu-list');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-active');
})


const windowHeight = document.querySelector('.header-index').clientHeight;

function onScrollBtn() {
    window.scrollBy({
        top: windowHeight,
        behavior: 'smooth',
    });   
}

