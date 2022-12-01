document.addEventListener('scroll', (e) => {
  if (window.scrollY >= 50 || window.pageYOffset >= 50) {
    document.getElementById('top-nav').classList.add('scrolled');
  } else {
    document.getElementById('top-nav').classList.remove('scrolled');
  }
});