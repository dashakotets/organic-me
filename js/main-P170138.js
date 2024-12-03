const windowHeight = document.querySelector('.header-index').clientHeight;

function onScrollBtn() {
    window.scrollBy({
        top: windowHeight,
        behavior: 'smooth',
    });   
}

