const header = document.querySelector('#site-menu');

window.addEventListener('scroll', function() {
  const scrollPos = window.pageYOffset;
  
  if (scrollPos > header.offsetHeight) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});