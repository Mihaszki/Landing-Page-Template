document.addEventListener('scroll', (e) => {
  if (window.scrollY >= 50 || window.pageYOffset >= 50) {
    document.getElementById('top-nav').classList.add('scrolled');
  } else {
    document.getElementById('top-nav').classList.remove('scrolled');
  }
});

function toggleMenu(el) {
  el.classList.toggle('change');
}

let elementsArray = document.querySelectorAll('.fade-section');
for (let i = 0; i < elementsArray.length; i++) {
  elementsArray[i].classList.add('scrollview');
}
window.addEventListener('scroll', fadeIn);
function fadeIn() {
  for (let i = 0; i < elementsArray.length; i++) {
    let elem = elementsArray[i];
    let distInView = elem.getBoundingClientRect().top - window.innerHeight + 70;
    if (distInView < 0) {
      elem.classList.add('inView');
    }
  }
}
fadeIn();