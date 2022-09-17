const header = document.querySelector('.nav');
      options = {
        rootMargin: '0%',
        thershold: 0.0
      }
      observer = new IntersectionObserver(func, options);

function func(item) {
    if (item[0].isIntersecting) item[0].target.classList.add('active');
}

observer.observe(header);