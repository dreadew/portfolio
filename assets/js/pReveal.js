const itemz = [...document.querySelectorAll('.p-reveal')];
      options = {
      rootMargin: '0%',
      thershold: 0.0
    }
    observer = new IntersectionObserver(showItem, options);

function showItem(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let letters = [...entry.target.querySelectorAll('span')];
      letters.forEach((letter, idx) => {
        setTimeout(() => {
          letter.classList.add('active');
        }, idx * 50)
      });
      entry.target.children[0].classList.add('active');
    }
  })
}

itemz.forEach(item => {
  let newString = '';
  itemText = item.children[0].innerText.split('.');
  itemText.map(letter => (newString += letter == '-' ? `<span class='gap'></span>` : `<span>${letter}</span>`));
  item.innerHTML = newString;
  observer.observe(item);
})
