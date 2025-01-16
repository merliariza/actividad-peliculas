//Map para la información de la primera ventana emergente
const movies = new Map([
  [1, { 
      title: "Toy Story", 
      imageUrl: "./images/toystory-module.avif", 
      resumen: "Los juguetes de un niño cobran vida cuando él no está, y en medio de esta realidad, un vaquero llamado Woody siente celos al conocer a Buzz Lightyear, un astronauta moderno que parece desplazarlo en el corazón de su dueño.", 
      }],
  [2, { 
      title: "El Rey León", 
      imageUrl: "./images/elreyleon-module.webp", 
      resumen: "Tras la trágica muerte de su padre, Simba debe embarcarse en un viaje de autodescubrimiento mientras enfrenta su destino como el futuro rey de la sabana africana, rodeado de lealtades y traiciones.", 
      }],
  [3, { 
      title: "Buscando a Nemo", 
      imageUrl: "./images/buscandoanemo-module.webp", 
      resumen: "Un pez payaso llamado Marlin emprende una arriesgada travesía a través del océano para rescatar a su hijo, Nemo, quien ha sido secuestrado. La historia resalta la fuerza de la paternidad y la importancia de la valentía.", 
      }],
  [4, { 
      title: "Mi Villano Favorito", 
      imageUrl: "./images/mivillanofavorito-module.jpg", 
      resumen: "Gru, un villano de gran ego, ve cómo su vida cambia cuando tres huérfanas entran en su vida, desmoronando sus planes de conquistar la Luna y enseñándole sobre el amor y la familia.", 
      }],
  [5, { 
      title: "Shrek", 
      imageUrl: "./images/shrek-module.jpeg", 
      resumen: "Un ogro llamado Shrek se ve obligado a hacer una gran misión para recuperar la tranquilidad de su pantano. En su camino, conoce a la princesa Fiona, quien no es la dama en apuros que parece ser.", 
     }],
  [6, { 
      title: "Los Increíbles", 
      imageUrl: "./images/losincreibles-module.jpg", 
      resumen: "En un mundo donde los superhéroes están prohibidos, la familia Parr lucha por equilibrar su vida como ciudadanos normales con sus poderes extraordinarios, enfrentando a un villano que amenaza al mundo.", 
      }],
  [7, { 
      title: "Matilda", 
      imageUrl: "./images/matilda-module.jpg", 
      resumen: "Matilda, una niña con extraordinarias habilidades intelectuales y telequinéticas, se enfrenta a su cruel familia y a una directora tiránica, buscando justicia y una vida mejor para sí misma.", 
    }],
  [8, { 
      title: "La Familia Addams", 
      imageUrl: "./images/lafamiliaadams-module.jpeg", 
      resumen: "La excéntrica familia Addams enfrenta un desafío cuando un pariente cercano planea robarles su fortuna, mientras ellos siguen con sus propias tradiciones macabras y su particular visión de la vida.",
      }],
  [9, { 
      title: "Jumanji", 
      imageUrl: "./images/jumanji-module.jpeg", 
      resumen: "Un antiguo y peligroso juego de mesa llamado Jumanji cobra vida cuando dos niños lo juegan, desatando una serie de eventos caóticos que los llevará a enfrentar desafíos surrealistas y peligrosos.",
      }],
  [10, { 
      title: "El Juego de Gemelas", 
      imageUrl: "./images/eljuegodegemelas-module.webp", 
      resumen: "Annie y Hallie, gemelas separadas al nacer, se reencuentran en un campamento de verano y desarrollan un plan para reunir a sus padres, mientras aprenden sobre el poder de la familia y el destino.",
      }],
  [11, { 
      title: "El Niño con el Pijama de Rayas", 
      imageUrl: "./images/elniñoconelpijamaderayas-module.jpg", 
      resumen: "La historia de Bruno, un niño que se muda a una casa cerca de un campo de concentración nazi, donde se hace amigo de un niño prisionero, sin comprender la tragedia que se desarrolla a su alrededor.",
      }],
  [12, { 
      title: "La Cabaña en el Bosque", 
      imageUrl: "./images/lacabañaenelbosque-module.jpg", 
      resumen: "Un grupo de amigos decide pasar un fin de semana en una cabaña en el bosque, sin saber que están siendo manipulados por fuerzas misteriosas que controlan su destino en un juego macabro.", 
      }],
  [13, { 
      title: "En Busca de la Felicidad", 
      imageUrl: "./images/enbuscadelafelicidad-module.jpg", 
      resumen: "Basada en hechos reales, sigue la lucha de Chris Gardner por superar la pobreza, equilibrando su vida como padre soltero y aspirante a ejecutivo mientras enfrenta obstáculos personales y profesionales.", 
      }],
  [14, { 
      title: "Milagros Inesperados", 
      imageUrl: "./images/milagrosinesperados-module.jpeg", 
      resumen: "En una prisión, un guardia de cárcel se cruza con un prisionero que posee habilidades sobrenaturales, lo que lo lleva a cuestionar su percepción del bien y del mal en una conmovedora historia de redención.", 
      }],
  [15, { 
      title: "Héroes", 
      imageUrl: "./images/heroes-module.jpg", 
      resumen: "Un grupo de bomberos enfrenta tanto desastres personales como situaciones extremas en su trabajo, mientras arriesgan sus vidas para salvar las de los demás, demostrando lo que realmente significa ser un héroe.", 
      }],
  [16, { 
      title: "El Origen", 
      imageUrl: "./images/el origen-module.jpg", 
      resumen: "Un ladrón experto en robar secretos a través de los sueños se enfrenta a su desafío más grande: implantar una idea en la mente de su objetivo, lo que pone a prueba los límites entre la realidad y la fantasía.", 
      }],
  [17, { 
      title: "La Isla", 
      imageUrl: "./images/laisla-module.jpg", 
      resumen: "En un futuro distópico, dos personas descubren que su vida en una sociedad cerrada es una mentira, y deben escapar antes de ser eliminados como parte de un cruel experimento social.", 
      }],
  [18, { 
      title: "Los Juegos del Hambre", 
      imageUrl: "./images/losjuegosdelhambre-module.jpg", 
      resumen: "En un futuro post-apocalíptico, Katniss Everdeen debe luchar por su vida en un evento televisado donde jóvenes de diferentes distritos deben pelear hasta la muerte, en una lucha por la supervivencia.", 
      }],
  [19, { 
      title: "It", 
      imageUrl: "./images/it-module.avif", 
      resumen: "Un grupo de niños se enfrenta a una entidad maligna que toma la forma de un payaso, Pennywise, quien se alimenta de los miedos más profundos de sus víctimas en la ciudad de Derry.", 
      }],
  [20, { 
      title: "The Secret Window", 
      imageUrl: "./images/thesecretwindow-module.jpg", 
      resumen: "Mort Rainey, un escritor acosado por un extraño que lo acusa de plagiar su historia, se ve atrapado en un juego mortal de persecución, mientras se enfrenta a una creciente paranoia que lo lleva a un desenlace inesperado.", 
      }],
]);



//Map para la información de la segunda ventana emergente
const description = new Map([
    [1, { 
        title: "Toy Story", 
        imageUrl: "./image/toystory.jpg", 
        description: "Los juguetes de un niño cobran vida cuando él no está cerca. Woody, un vaquero, se enfrenta a su nuevo rival, Buzz Lightyear, un astronauta. Un clásico de la animación de Pixar que explora la amistad y el sentido de pertenencia.", 
        cast:"Tom Hanks, Tim Allen, Don Rickles, Jim Varney",
        duration: "81 minutos",
        Genre: "Animación, Aventura, Comedia",
        date: "22 de noviembre de 1995",}],
    [2, { 
        title: "El Rey León", 
        imageUrl: "./image/elreyleon.jpg", 
        description: "Simba, un joven león, lucha por encontrar su lugar en el ciclo de la vida después de la trágica muerte de su padre, Mufasa. Una película llena de música y enseñanzas sobre la responsabilidad, la valentía y la amistad.", 
        cast:"Matthew Broderick, James Earl Jones, Jeremy Irons, Whoopi Goldberg",
        duration: "88 minutos",
        Genre: "Animación, Aventura, Drama",
        date: "24 de junio de 1994",}],
    [3, { 
        title: "Buscando a Nemo", 
        imageUrl: "./image/buscandoanemo.webp", 
        description: "Marlin, un pez payaso, recorre el océano para encontrar a su hijo Nemo, quien fue capturado por un buzo. Una emotiva aventura submarina que habla sobre el valor de la familia y la perseverancia.", 
        cast:"Albert Brooks, Ellen DeGeneres, Alexander Gould, Willem Dafoe",
        duration: "100 minutos",
        Genre: "Animación, Aventura, Comedia",
        date: "30 de mayo de 2003",}],
    [4, { 
        title: "Mi Villano Favorito", 
        imageUrl: "./image/mivillanofavorito.jpg", 
        description: "Gru, un supervillano, planea robar la Luna, pero sus planes cambian cuando conoce a tres huérfanas. Una película divertida y tierna sobre la redención, el amor paternal y la amistad.", 
        cast:"Steve Carell, Jason Segel, Russell Brand, Miranda Cosgrove",
        duration: "95 minutos",
        Genre: "Animación, Comedia, Familia",
        date: "9 de julio de 2010",}],
    [5, { 
        title: "Shrek", 
        imageUrl: "./image/shrek.webp", 
        description: "Shrek, un ogro solitario, se embarca en una misión para rescatar a la princesa Fiona y ganar la tierra que le pertenece.  Una película que mezcla humor, aventuras y críticas a los cuentos de hadas tradicionales.", 
        cast:"Mike Myers, Eddie Murphy, Cameron Diaz, John Lithgow",
        duration: "90 minutos",
        Genre: "Animación, Aventura, Comedia",
        date: "22 de abril de 2001",}],
    [6, { 
        title: "Los Increíbles", 
        imageUrl: "./image/losincreibles.jpg", 
        description: "La familia Parr, compuesta por superhéroes, lucha por encontrar un equilibrio entre la vida familiar y salvar al mundo. Una película que mezcla acción, comedia y drama familiar de manera sobresaliente.", 
        cast:"Craig T. Nelson, Holly Hunter, Samuel L. Jackson, Jason Lee",
        duration: "115 minutos",
        Genre: "Animación, Acción, Aventura",
        date: "5 de noviembre de 2004",}],
    [7, { 
        title: "Matilda", 
        imageUrl: "./image/matilda.webp", 
        description: "Matilda, una niña extremadamente inteligente con poderes telequinéticos, lucha por sobrevivir en un hogar disfuncional y una escuela opresiva. Basada en el libro de Roald Dahl, esta es una historia de valentía y justicia, llena de momentos encantadores.", 
        cast:"Mara Wilson, Danny DeVito, Rhea Perlman, Embeth Davidtz",
        duration: "98 minutos",
        Genre: "Comedia, Familia, Fantasía",
        date: "2 de agosto de 1996",}],
    [8, { 
        title: "La Familia Addams", 
        imageUrl: "./image/lafamiliaaddams.jpg", 
        description: "La familia Addams se enfrenta a un pariente lejano que intenta apropiarse de su fortuna, mientras que ellos siguen siendo su excéntrica y peculiar familia.",
        cast:"Anjelica Huston, Raul Julia, Christopher Lloyd, Christina Ricci",
        duration: "99 minutos",
        Genre: "Comedia, Familia, Fantasía",
        date: "22 de noviembre de 1991",}],
    [9, { 
        title: "Jumanji", 
        imageUrl: "./image/Jumanji.jpg", 
        description: "Dos niños encuentran un misterioso juego de mesa llamado Jumanji, el cual desata una serie de eventos salvajes y peligrosos en el mundo real.",
        cast:"Robin Williams, Kirsten Dunst, Bonnie Hunt, Bradley Pierce",
        duration: "104 minutos",
        Genre: "Aventura, Familia, Fantasía",
        date: "15 de diciembre de 1995",}],
    [10, { 
        title: "El Juego de Gemelas", 
        imageUrl: "./image/eljuegodegemelas.jpg", 
        description: "Annie y Hallie, dos gemelas separadas al nacer, se conocen en un campamento de verano y traman un plan para reunir a sus padres. Una película entrañable y divertida sobre el valor de la familia, con momentos de humor y emoción.",
        cast:"Lindsay Lohan, Dennis Quaid, Natasha Richardson, Elaine Hendrix",
        duration: "129 minutos",
        Genre: "Comedia, Familia",
        date: "20 de julio de 1998",}],
    [11, { 
        title: "El Niño con el Pijama de Rayas", 
        imageUrl: "./image/elniñoconelpijamaderayas.jpg", 
        description: "Bruno, un niño de ocho años, se muda con su familia cerca de un campo de concentración nazi, donde entabla una amistad con un niño prisionero.",
        duration: "94 minutos",
        Genre: "Drama, Historia, Familia",
        date: "12 de septiembre de 2008",}],
    [12, { 
        title: "La Cabaña en el Bosque ", 
        imageUrl: "./image/lacabañaenelbosque.jpg", 
        description: "La cabaña no es más que una trampa mortal que servirá para ponerlos a prueba a través de toda clase de peligrosas tareas de supervivencia que tendrán que superar. Alguien los está manipulando para llevarlos al límite de sus fuerzas y mientras, los observan para analizar cada una de sus reacciones.", 
        cast:"Kristen Connolly, Chris Hemsworth, Anna Hutchison, Fran Kranz",
        duration: "95 minutos",
        Genre: "Horror, Comedia, Familia",
        date: "13 de abril de 2012",}],
    [13, { 
        title: "En Busca de la Felicidad", 
        imageUrl: "./image/enbuscadelafelicidad.jpg", 
        description: "Basada en la vida real de Chris Gardner, un hombre sin hogar que lucha por cuidar a su hijo mientras persigue un sueño para mejorar su vida a través de un difícil programa de pasantías en una firma de corretaje.", 
        cast:"Will Smith, Jaden Smith, Thandie Newton, Brian Howe",
        duration: "117 minutos",
        Genre: "Drama, Biografía, Familia",
        date: "15 de diciembre de 2006",}],
    [14, { 
        title: "Milagros Inesperados", 
        imageUrl: "./image/milagrosinesperados.webp", 
        description: "En una prisión de Louisiana, Paul Edgecomb, un guardia de cárcel, conoce a un prisionero llamado John Coffey que posee poderes milagrosos. Basada en la novela de Stephen King, una historia conmovedora que explora el valor de la compasión en medio de la adversidad.", 
        cast:"Tom Hanks, Michael Clarke Duncan, David Morse, Bonnie Hunt",
        duration: "189 minutos",
        Genre: "Drama, Fantasía, Crimen",
        date: "10 de diciembre de 1999",}],
    [15, { 
        title: "Héroes", 
        imageUrl: "./image/heroes.jpg", 
        description: "La historia de un grupo de bomberos de Nueva York que enfrentan desafíos personales mientras luchan por salvar vidas en un mundo lleno de tragedias. Una película basada en hechos reales que rinde homenaje a los héroes anónimos que arriesgan su vida por los demás.", 
        cast:"Nicolas Cage, Michael Peña, Jay Hernandez, Tom Berenger",
        duration: "124 minutos",
        Genre: "Acción, Drama, Bélico",
        date: "6 de octubre de 2006",}],
    [16, { 
        title: "El Origen", 
        imageUrl: "./image/el origen.jpg", 
        description: "Un ladrón especializado en robar secretos a través del uso de sueños infiltrados en la mente de las personas, recibe una tarea casi imposible: implantar una idea en la mente de un objetivo.", 
        cast:"Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        duration: "148 minutos",
        Genre: "Acción, Ciencia Ficción, Suspenso",
        date: "16 de julio de 2010",}],
    [17, { 
        title: "La Isla", 
        imageUrl: "./image/laisla.jpg", 
        description: "En un futuro distópico, Lincoln Six Echo y Jordan Two Delta viven en una sociedad cerrada, creyendo que son los últimos sobrevivientes de una contaminación global. Pronto descubren la verdad y deben huir para salvar sus vidas.", 
        cast:"Ewan McGregor, Scarlett Johansson, Djimon Hounsou, Sean Bean",
        duration: "136 minutos",
        Genre: "Acción, Suspenso, Ciencia Ficción",
        date: "22 de julio de 2005",}],
    [18, { 
        title: "Los Juegos del Hambre", 
        imageUrl: "./image/losjuegosdelhambre.webp", 
        description: "En un futuro distópico, Katniss Everdeen se convierte en el tributo del Distrito 12 para participar en los Juegos del Hambre, un evento televisado en el que los participantes deben luchar hasta la muerte.", 
        cast:"Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth, Woody Harrelson",
        duration: "142 minutos",
        Genre: "Acción, Ciencia Ficción, Suspenso",
        date: "23 de marzo de 2012",}],
    [19, { 
        title: "It", 
        imageUrl: "./image/it.webp", 
        description: "Un grupo de niños en la pequeña ciudad de Derry, Maine, debe enfrentarse a una entidad maligna que toma la forma de un payaso llamado Pennywise, que se alimenta de sus miedos más profundos.", 
        cast:"Bill Skarsgård, Jaeden Lieberher, Finn Wolfhard, Sophia Lillis",
        duration: "135 minutos",
        Genre: "Terror, Suspenso, Misterio",
        date: "8 de septiembre de 2017",}],
    [20, { 
        title: "The Secret Window", 
        imageUrl: "./image/thesecretwindow.jpg", 
        description: "Mort Rainey, un escritor de novelas que atraviesa un proceso de divorcio, se ve acosado por un extraño llamado John Shooter, quien lo acusa de plagiar su historia. A medida que la situación se intensifica, Mort se enfrenta a una serie de aterradoras consecuencias.", 
        cast:"Johnny Depp, John Turturro, Maria Bello, Timothy Hutton",
        duration: "96 minutos",
        Genre: "Suspenso, Terror Psicológico",
        date: "12 de marzo de 2004",}],
  ]);


// Función para normalizar los títulos eliminando tildes y convirtiendo a minúsculas
function normalizeString(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Función para manejar el evento de búsqueda
function handleSearch() {
  const query = document.getElementById("movie-search").value;
  const normalizedQuery = normalizeString(query);

  // Obtiene todas las tarjetas de películas
  const movieCards = document.querySelectorAll(".movie-card");

  movieCards.forEach(card => {
    const movieTitle = card.getAttribute("data-title");

    // Normalizamos el título de la película
    const normalizedTitle = normalizeString(movieTitle);

    // Si el título contiene la búsqueda, muestra la tarjeta, de lo contrario se oculta
    if (normalizedTitle.includes(normalizedQuery)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Agrega el evento de búsqueda al input
document.getElementById("movie-search").addEventListener("input", handleSearch);
  

/*
  // Obtiene todos los elementos de la tarjeta de la película
const movieCards = document.querySelectorAll('.movie-card');

// Añade un evento de clic a cada tarjeta de película
movieCards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.getAttribute('data-title');

// Busca la película en el mapa
const movie = [...movies.values()].find(m => m.title.toLowerCase() === title.toLowerCase());
if (movie) {
  Swal.fire({
    title: movie.title,
    html: `
      <img src="${movie.imageUrl}" width="100%" height="auto" alt="Image">
      <p><strong>Resumen:</strong> ${movie.resumen}</p>
    `,
    imageWidth: 500,
    imageHeight: 250,
    imageAlt: "Image",
    background: '#1A1A1D',
    color: '#fff',
    confirmButtonText: 'Ver Más',
    confirmButtonColor: '#363c41',
    showCancelButton: true,
    cancelButtonText: 'Cerrar',
    cancelButtonColor: '#d33',
    showCloseButton: true,
    closeButtonAriaLabel: 'Cerrar',
    didOpen: () => {
      const verMasBtn = document.querySelector('.swal2-confirm');
      verMasBtn.addEventListener('click', () => {
        Swal.fire({
            title: movie.title,
            html: `
                <p><strong>Descripción:</strong> ${movie.description}</p>
                <p><strong>Reparto:</strong> ${movie.cast}</p>
                <p><strong>Duración:</strong> ${movie.duration}</p>
                <p><strong>Género:</strong> ${movie.genre}</p>
                <p><strong>Fecha de estreno:</strong> ${movie.date}</p>
            `,
            icon: 'info',
            confirmButtonText: 'Cerrar',
            customClass: 'swal-wide',
        });
      });
    }
  });
    }
  });
});*/

const movieCards = document.querySelectorAll('.movie-card');

// Añade un evento de clic a cada tarjeta de película
movieCards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.getAttribute('data-title'); // Obtiene el título de la tarjeta

    // Busca la película en el mapa
    const movie = [...movies.values()].find(m => m.title.toLowerCase() === title.toLowerCase());

    if (movie) {
      Swal.fire({
        title: movie.title,
        html: `
          <img src="${movie.imageUrl}" width="100%" height="auto" alt="Image">
          <p><strong>Resumen:</strong> ${movie.resumen}</p>
        `,
        imageWidth: 500,
        imageHeight: 250,
        imageAlt: "Image",
        background: '#1A1A1D',
        color: '#fff',
        confirmButtonText: 'Ver Más',
        confirmButtonColor: '#363c41',
        showCancelButton: true,
        cancelButtonText: 'Cerrar',
        cancelButtonColor: '#d33',
        showCloseButton: true,
        closeButtonAriaLabel: 'Cerrar',
        didOpen: () => {
          const verMasBtn = document.querySelector('.swal2-confirm'); // El botón "Ver Más"
          
          // Añade el evento para el botón "Ver Más"
          verMasBtn.addEventListener('click', () => {
            Swal.fire({
              background: '#1A1A1D',
              imageWidth: 500,
              imageHeight: 250,
              imageAlt: "Image",
              title: movie.title,
              html: `
                <p><strong>Descripción:</strong> ${movie.description}</p>
                <p><strong>Reparto:</strong> ${movie.cast}</p>
                <p><strong>Duración:</strong> ${movie.duration}</p>
                <p><strong>Género:</strong> ${movie.genre}</p>
                <p><strong>Fecha de estreno:</strong> ${movie.date}</p>
              `,
              icon: 'info',
              confirmButtonText: 'Cerrar',
              customClass: 'swal-wide',
            });
          });
        }
      });
    }
  });
});