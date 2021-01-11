const upArrow = document.querySelector('#up-arrow');

function hideArrow() {
  upArrow.className = 'hide';
}

function showArrow() {
  upArrow.className = 'show';
}

window.addEventListener('scroll', function (e) {
  if (window.pageYOffset <= 50) { // La pantalla está en el principio
    hideArrow();
  } else {
    showArrow();
  }
});