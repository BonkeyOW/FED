// Code van hamburgermenu van https://copilot.microsoft.com/shares/Nvg4tjRvtfiHyJKS8S3WV
const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('close-menu');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.add('active');
  closeMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('active');
  closeMenu.classList.remove('active');
});
