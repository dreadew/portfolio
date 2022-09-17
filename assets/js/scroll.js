const progressNum = document.querySelector('.scroll-text');

function updateProgressBar() {
    progressNum.innerText = `${Math.ceil(getScrollPercentage())}%`;
    requestAnimationFrame(updateProgressBar);
}

function getScrollPercentage() {
  e = ((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100) 
  if (e >= 100) e = 100
  if (e <= 0) e = 0
  return e
}

updateProgressBar()
