const workLinks = document.querySelectorAll('.works-link');
      imgBox = document.querySelector('.works-img');
      imgWrapper = document.querySelector('.works-img__wrapper');

workLinks.forEach((item, idx) => {
    item.addEventListener("mouseover", () => {
        item.classList.add('active');
        document.getElementById(`img-${idx+1}`).classList.add('active');
        for (let i = 0; i < workLinks.length; i++) {
            if (!workLinks[i].classList.contains('active'))
                workLinks[i].style.opacity = '.5'
        }
    })
    item.addEventListener("mouseleave", () => {
        document.getElementById(`img-${idx+1}`).classList.remove('active');
        document.getElementById(`img-${idx+1}`).classList.add('deactive');
        for (let i = 0; i < workLinks.length; i++) {
            workLinks[i].style.opacity = '1'
        }
        item.classList.remove('active');
        setTimeout(() => {
            document.getElementById(`img-${idx+1}`).classList.remove('deactive');
        }, 100)
    })
})