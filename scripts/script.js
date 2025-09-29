// Hamburgermenu
const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('close-menu');
const navMenu = document.getElementById('nav-menu');
const submenuToggles = document.querySelectorAll('.submenu-toggle');

hamburger.addEventListener('click', () => {
  navMenu.classList.add('active');
  closeMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('active');
  closeMenu.classList.remove('active');
});

submenuToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const submenu = toggle.nextElementSibling;
    submenu.classList.toggle('active');
  });
});
