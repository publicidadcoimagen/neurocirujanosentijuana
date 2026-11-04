const menuButton = document.querySelector('[data-menu-toggle]');
const siteNavigation = document.getElementById('site-navigation');
const mobileMenu = window.matchMedia('(max-width: 920px)');

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? menuButton.dataset.close : menuButton.dataset.open);
}

menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') === 'false');
});
siteNavigation.addEventListener('click', event => {
  if (mobileMenu.matches && event.target.closest('a')) {
    menuButton.focus({preventScroll: true});
    setMenu(false);
  }
});
menuButton.closest('header').addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobileMenu.matches && menuButton.getAttribute('aria-expanded') === 'true') {
    menuButton.focus();
    setMenu(false);
  }
});
mobileMenu.addEventListener('change', () => setMenu(false));
menuButton.hidden = false;
