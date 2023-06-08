const peliculasMap = new Map();

    function crearPelicula(event) {
      event.preventDefault();

      const titulo = document.getElementById('titulo').value;
      const genero = document.getElementById('genero').value;
      const duracion = document.getElementById('duracion').value;
      const director = document.getElementById('director').value;

      peliculasMap.set(titulo.toLowerCase(), { genero, duracion, director });

      document.getElementById('crearForm').reset();
    }

    function eliminarPelicula(event) {
      event.preventDefault();

       const titulo = document.getElementById('tituloEliminar').value,
  mensaje = document.createElement('span'),
  divEliminar = document.getElementById('eliminarPelicula');

  if (peliculasMap.has(titulo)){
    peliculasMap.delete(titulo);
    mensaje.innerText = `la película ${titulo} ha sido eliminada correctamente`
  }
  else{
    mensaje.innerText = `no Existe una pelicula con el titulo ${titulo}`
  }
  divEliminar.appendChild(mensaje);
  document.getElementById('tituloEliminar').value = ''
    }
    

    function buscarPelicula() {
      const titulo = document.getElementById('buscarTitulo').value;

      if (peliculasMap.has(titulo.toLowerCase())) {
        const pelicula = peliculasMap.get(titulo.toLowerCase());

        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `
          <p><strong>Título:</strong> ${titulo}</p>
          <p><strong>Género:</strong> ${pelicula.genero}</p>
          <p><strong>Duración:</strong> ${pelicula.duracion}</p>
          <p><strong>Director:</strong> ${pelicula.director}</p>
        `;
      } else {
        document.getElementById('resultado').innerHTML = 'Película no encontrada';
      }
    }

    function mostrarTodasPeliculas() {
      const peliculasContainer = document.getElementById('peliculasContainer');
      peliculasContainer.innerHTML = '';

      peliculasMap.forEach((pelicula, titulo) => {
        const peliculaCard = document.createElement('div');
        peliculaCard.classList.add('col-md-4', 'mb-3');
        peliculaCard.innerHTML = `
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${titulo}</h5>
              <p class="card-text"><strong>Género:</strong> ${pelicula.genero}</p>
              <p class="card-text"><strong>Duración:</strong> ${pelicula.duracion}</p>
              <p class="card-text"><strong>Director:</strong> ${pelicula.director}</p>
            </div>
          </div>
        `;
        peliculasContainer.appendChild(peliculaCard);
      });
    }

    // Event Listeners
    document.getElementById('crearForm').addEventListener('submit', crearPelicula);
    document.getElementById('eliminarForm').addEventListener('submit', eliminarPelicula);
    document.getElementById('buscarBtn').addEventListener('click', buscarPelicula);
    document.getElementById('mostrarTodasLink').addEventListener('click', mostrarTodasPeliculas);

    // Navbar
    const eliminarLink = document.getElementById('eliminarLink');
    const consultarLink = document.getElementById('consultarLink');
    const mostrarTodasLink = document.getElementById('mostrarTodasLink');
    const crearLink = document.getElementById('crearLink');

    crearLink.addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('crearPelicula').style.display = 'block';
      document.getElementById('eliminarPelicula').style.display = 'none';
      document.getElementById('consultarPeliculas').style.display = 'none';
      document.getElementById('mostrarTodas').style.display = 'none';
    });

    eliminarLink.addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('crearPelicula').style.display = 'none';
      document.getElementById('eliminarPelicula').style.display = 'block';
      document.getElementById('consultarPeliculas').style.display = 'none';
      document.getElementById('mostrarTodas').style.display = 'none';
    });

    consultarLink.addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('crearPelicula').style.display = 'none';
      document.getElementById('eliminarPelicula').style.display = 'none';
      document.getElementById('consultarPeliculas').style.display = 'block';
      document.getElementById('mostrarTodas').style.display = 'none';
    });

    mostrarTodasLink.addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('crearPelicula').style.display = 'none';
      document.getElementById('eliminarPelicula').style.display = 'none';
      document.getElementById('consultarPeliculas').style.display = 'none';
      document.getElementById('mostrarTodas').style.display = 'block';
      mostrarTodasPeliculas();
    });