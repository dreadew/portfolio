const itemk = [...document.querySelectorAll('.desc-reveal')];
      options = {
      rootMargin: '0%',
      thershold: 0.0
    }
    observer = new IntersectionObserver(showDesc, options);

function showDesc(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.children[0].classList.add('active');
        }
      })
}

itemk.forEach(item => {
    observer.observe(item);
})