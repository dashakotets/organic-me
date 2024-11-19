const windowHeight = document.querySelector('.header').clientHeight;

function onScrollBtn() {
    window.scrollBy({
        top: windowHeight,
        behavior: 'smooth',
    });   
}

