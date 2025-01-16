// Selecciona el navbar y el icono hamburguesa
const hamburger = document.getElementById('hamburger-icon');
const navbarMenu = document.querySelector('.navbar-menu');

// Al dar click al icono hamburguesa se active el menú
hamburger.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});
