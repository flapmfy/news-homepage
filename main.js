const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const nav = document.querySelector('.primary-nav');
const header = document.querySelector('.site-header');
const scrollWatcher = document.querySelector('.scroll-watcher');

const scrollObserver = new IntersectionObserver((entries) => {
  header.classList.toggle('scrolled', !entries[0].isIntersecting);
});

function closeNav() {
  nav.setAttribute('aria-expanded', false);
}

function openNav() {
  nav.setAttribute('aria-expanded', true);
}

menuOpen.addEventListener('click', () => {
  openNav();
});

menuClose.addEventListener('click', () => {
  closeNav();
});

scrollObserver.observe(scrollWatcher);
