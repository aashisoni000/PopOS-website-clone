const hamburger = document.querySelector('.hamburger');
const overlay = document.getElementById('overlay');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
  overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
});
