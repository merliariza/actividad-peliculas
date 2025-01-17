// Selecciona el navbar y el icono hamburguesa
const hamburger = document.getElementById('hamburger-icon');
const navbarMenu = document.querySelector('.navbar-menu');

// Al dar click al icono hamburguesa se active el menú
hamburger.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});


//Importando desde first-pop-up
import { normalizeString, handleSearch, showFirstPopup, showSecondPopup, movies, description } from './first-pop-up.js';

document.getElementById("movie-search").addEventListener("input", handleSearch);

const movieCards = document.querySelectorAll('.movie-card');

movieCards.forEach(card => {
  card.addEventListener('click', async () => {
    const title = card.getAttribute('data-title');

    const movie = [...movies.values()].find(m => m.title.toLowerCase() === title.toLowerCase());
    const secondpop = [...description.values()].find(m => m.title.toLowerCase() === title.toLowerCase());

    if (movie && secondpop) {
      try {
        await showFirstPopup(movie);
        await showSecondPopup(secondpop);
      } catch (error) {
        console.log("El popup fue cerrado o hubo un error:", error);
      }
    }
  });
});