const anchorLinks = document.querySelectorAll('.anchor-link');

function scrollTo(item) {
    return window.scroll({
        left: 0,
        top: document.querySelector(`.${item}`).offsetTop,
        behavior: 'smooth'
    })
}

anchorLinks.forEach((item) => {
    item.addEventListener('click', () => {
        scrollTo(item.getAttribute('data-link'));
    })
})