const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const nav = document.querySelector('.primary-nav');
const overlay = document.querySelector('.overlay');

menuOpen.addEventListener('click', () => {
  nav.classList.add('active');
  overlay.classList.add('active');
});

menuClose.addEventListener('click', () => {
  nav.classList.remove('active');
  overlay.classList.remove('active');
});
