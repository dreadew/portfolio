const itemx = [...document.querySelectorAll('.letter-reveal')];
      options = {
      rootMargin: '-10%',
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
        }, idx * 20)
      });
      entry.target.children[0].classList.add('active');
    }
  })
}

itemx.forEach(item => {
  let newString = '';
      itemText = item.children[0].innerText.split('');
  itemText.map(letter => (newString += letter == ' ' ? `<span class='gap'></span>` : `<span>${letter}</span>`));
  item.innerHTML = newString;
  observer.observe(item);
})
