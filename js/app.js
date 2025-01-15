const movies = new Map([
    [1, { 
        title: "Toy Story", 
        imageUrl: "", 
        description: "Los juguetes de un niño cobran vida cuando él no está cerca. Woody, un vaquero, se enfrenta a su nuevo rival, Buzz Lightyear, un astronauta. Un clásico de la animación de Pixar que explora la amistad y el sentido de pertenencia.", 
        cast:"Tom Hanks, Tim Allen, Don Rickles, Jim Varney",
        duration: "81 minutos",
        Genre: "Animación, Aventura, Comedia",
        date: "22 de noviembre de 1995",}],

    [2, { 
        title: "El Rey León", 
        imageUrl: "", 
        description: "Simba, un joven león, lucha por encontrar su lugar en el ciclo de la vida después de la trágica muerte de su padre, Mufasa. Una película llena de música y enseñanzas sobre la responsabilidad, la valentía y la amistad.", 
        cast:"Matthew Broderick, James Earl Jones, Jeremy Irons, Whoopi Goldberg",
        duration: "88 minutos",
        Genre: "Animación, Aventura, Drama",
        date: "24 de junio de 1994",}],

    [3, { 
        title: "Buscando a Nemo", 
        imageUrl: "", 
        description: "Marlin, un pez payaso, recorre el océano para encontrar a su hijo Nemo, quien fue capturado por un buzo. Una emotiva aventura submarina que habla sobre el valor de la familia y la perseverancia.", 
        cast:"Albert Brooks, Ellen DeGeneres, Alexander Gould, Willem Dafoe",
        duration: "100 minutos",
        Genre: "Animación, Aventura, Comedia",
        date: "30 de mayo de 2003",}],

    [4, { 
        title: "Mi Villano Favorito", 
        imageUrl: "", 
        description: "Gru, un supervillano, planea robar la Luna, pero sus planes cambian cuando conoce a tres huérfanas. Una película divertida y tierna sobre la redención, el amor paternal y la amistad.", 
        cast:"Steve Carell, Jason Segel, Russell Brand, Miranda Cosgrove",
        duration: "95 minutos",
        Genre: "Animación, Comedia, Familia",
        date: "9 de julio de 2010",}],

    [5, { 
        title: "Shrek", 
        imageUrl: "", 
        description: "Shrek, un ogro solitario, se embarca en una misión para rescatar a la princesa Fiona y ganar la tierra que le pertenece.  Una película que mezcla humor, aventuras y críticas a los cuentos de hadas tradicionales.", 
        cast:"Mike Myers, Eddie Murphy, Cameron Diaz, John Lithgow",
        duration: "90 minutos",
        Genre: "Animación, Aventura, Comedia",
        date: "22 de abril de 2001",}],

    [6, { 
        title: "Los Increíbles", 
        imageUrl: "", 
        description: "La familia Parr, compuesta por superhéroes, lucha por encontrar un equilibrio entre la vida familiar y salvar al mundo. Una película que mezcla acción, comedia y drama familiar de manera sobresaliente.", 
        cast:"Craig T. Nelson, Holly Hunter, Samuel L. Jackson, Jason Lee",
        duration: "115 minutos",
        Genre: "Animación, Acción, Aventura",
        date: "5 de noviembre de 2004",}],

    [7, { 
        title: "Matilda", 
        imageUrl: "", 
        description: "Matilda, una niña extremadamente inteligente con poderes telequinéticos, lucha por sobrevivir en un hogar disfuncional y una escuela opresiva. Basada en el libro de Roald Dahl, esta es una historia de valentía y justicia, llena de momentos encantadores.", 
        cast:"Mara Wilson, Danny DeVito, Rhea Perlman, Embeth Davidtz",
        duration: "98 minutos",
        Genre: "Comedia, Familia, Fantasía",
        date: "2 de agosto de 1996",}],

    [8, { 
        title: "La Familia Addams", 
        imageUrl: "", 
        description: "La familia Addams se enfrenta a un pariente lejano que intenta apropiarse de su fortuna, mientras que ellos siguen siendo su excéntrica y peculiar familia.",
        cast:"Anjelica Huston, Raul Julia, Christopher Lloyd, Christina Ricci",
        duration: "99 minutos",
        Genre: "Comedia, Familia, Fantasía",
        date: "22 de noviembre de 1991",}],

    [9, { 
        title: "Jumanji", 
        imageUrl: "", 
        description: "Dos niños encuentran un misterioso juego de mesa llamado Jumanji, el cual desata una serie de eventos salvajes y peligrosos en el mundo real.",
        cast:"Robin Williams, Kirsten Dunst, Bonnie Hunt, Bradley Pierce",
        duration: "104 minutos",
        Genre: "Aventura, Familia, Fantasía",
        date: "15 de diciembre de 1995",}],

    [10, { 
        title: "El Juego de Gemelas", 
        imageUrl: "", 
        description: "Annie y Hallie, dos gemelas separadas al nacer, se conocen en un campamento de verano y traman un plan para reunir a sus padres. Una película entrañable y divertida sobre el valor de la familia, con momentos de humor y emoción.",
        cast:"Lindsay Lohan, Dennis Quaid, Natasha Richardson, Elaine Hendrix",
        duration: "129 minutos",
        Genre: "Comedia, Familia",
        date: "20 de julio de 1998",}],

    [11, { 
        title: "El Niño con el Pijama de Rayas", 
        imageUrl: "", 
        description: "Bruno, un niño de ocho años, se muda con su familia cerca de un campo de concentración nazi, donde entabla una amistad con un niño prisionero.",
        duration: "94 minutos",
        Genre: "Drama, Historia, Familia",
        date: "12 de septiembre de 2008",}],

    [12, { 
        title: "La Cabaña en el Bosque ", 
        imageUrl: "", 
        description: "La cabaña no es más que una trampa mortal que servirá para ponerlos a prueba a través de toda clase de peligrosas tareas de supervivencia que tendrán que superar. Alguien los está manipulando para llevarlos al límite de sus fuerzas y mientras, los observan para analizar cada una de sus reacciones.", 
        cast:"Kristen Connolly, Chris Hemsworth, Anna Hutchison, Fran Kranz",
        duration: "95 minutos",
        Genre: "Horror, Comedia, Familia",
        date: "13 de abril de 2012",}],

    [13, { 
        title: "En Busca de la Felicidad", 
        imageUrl: "", 
        description: "Basada en la vida real de Chris Gardner, un hombre sin hogar que lucha por cuidar a su hijo mientras persigue un sueño para mejorar su vida a través de un difícil programa de pasantías en una firma de corretaje.", 
        cast:"Will Smith, Jaden Smith, Thandie Newton, Brian Howe",
        duration: "117 minutos",
        Genre: "Drama, Biografía, Familia",
        date: "15 de diciembre de 2006",}],
    [14, { 
        title: "Milagros Inesperados", 
        imageUrl: "", 
        description: "En una prisión de Louisiana, Paul Edgecomb, un guardia de cárcel, conoce a un prisionero llamado John Coffey que posee poderes milagrosos. Basada en la novela de Stephen King, una historia conmovedora que explora el valor de la compasión en medio de la adversidad.", 
        cast:"Tom Hanks, Michael Clarke Duncan, David Morse, Bonnie Hunt",
        duration: "189 minutos",
        Genre: "Drama, Fantasía, Crimen",
        date: "10 de diciembre de 1999",}],

    [15, { 
        title: "Héroes", 
        imageUrl: "", 
        description: "La historia de un grupo de bomberos de Nueva York que enfrentan desafíos personales mientras luchan por salvar vidas en un mundo lleno de tragedias. Una película basada en hechos reales que rinde homenaje a los héroes anónimos que arriesgan su vida por los demás.", 
        cast:"Nicolas Cage, Michael Peña, Jay Hernandez, Tom Berenger",
        duration: "124 minutos",
        Genre: "Acción, Drama, Bélico",
        date: "6 de octubre de 2006",}],

    [16, { 
        title: "El Origen", 
        imageUrl: "", 
        description: "Un ladrón especializado en robar secretos a través del uso de sueños infiltrados en la mente de las personas, recibe una tarea casi imposible: implantar una idea en la mente de un objetivo.", 
        cast:"Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        duration: "148 minutos",
        Genre: "Acción, Ciencia Ficción, Suspenso",
        date: "16 de julio de 2010",}],

    [17, { 
        title: "La Isla", 
        imageUrl: "", 
        description: "En un futuro distópico, Lincoln Six Echo y Jordan Two Delta viven en una sociedad cerrada, creyendo que son los últimos sobrevivientes de una contaminación global. Pronto descubren la verdad y deben huir para salvar sus vidas.", 
        cast:"Ewan McGregor, Scarlett Johansson, Djimon Hounsou, Sean Bean",
        duration: "136 minutos",
        Genre: "Acción, Suspenso, Ciencia Ficción",
        date: "22 de julio de 2005",}],

    [18, { 
        title: "Los Juegos del Hambre", 
        imageUrl: "", 
        description: "En un futuro distópico, Katniss Everdeen se convierte en el tributo del Distrito 12 para participar en los Juegos del Hambre, un evento televisado en el que los participantes deben luchar hasta la muerte.", 
        cast:"Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth, Woody Harrelson",
        duration: "142 minutos",
        Genre: "Acción, Ciencia Ficción, Suspenso",
        date: "23 de marzo de 2012",}],

    [19, { 
        title: "It", 
        imageUrl: "", 
        description: "Un grupo de niños en la pequeña ciudad de Derry, Maine, debe enfrentarse a una entidad maligna que toma la forma de un payaso llamado Pennywise, que se alimenta de sus miedos más profundos.", 
        cast:"Bill Skarsgård, Jaeden Lieberher, Finn Wolfhard, Sophia Lillis",
        duration: "135 minutos",
        Genre: "Terror, Suspenso, Misterio",
        date: "8 de septiembre de 2017",}],

    [20, { 
        title: "The Secret Window", 
        imageUrl: "", 
        description: "Mort Rainey, un escritor de novelas que atraviesa un proceso de divorcio, se ve acosado por un extraño llamado John Shooter, quien lo acusa de plagiar su historia. A medida que la situación se intensifica, Mort se enfrenta a una serie de aterradoras consecuencias.", 
        cast:"Johnny Depp, John Turturro, Maria Bello, Timothy Hutton",
        duration: "96 minutos",
        Genre: "Suspenso, Terror Psicológico",
        date: "12 de marzo de 2004",}],

  ]);
  
  const getmovieByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const movie = movies.get(id);
        if (movie) {
          resolve(movie);
        } else {
          reject("No se pudo encontrar la película");
        }
      }, 2000);
    });
  };
  
  getmovieByIdAsync(2)
    .then((movie) => {
      console.log("Película encontrada", movie);
    })
    .catch((error) => {
      console.warn(error);
    });



