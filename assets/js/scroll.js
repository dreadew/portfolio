const progressNum = document.querySelector('.scroll-text');

function updateProgressBar() {
    progressNum.innerText = `${Math.ceil(getScrollPercentage())}%`;
    requestAnimationFrame(updateProgressBar);
}

function getScrollPercentage() {
    return ((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)
}

updateProgressBar()