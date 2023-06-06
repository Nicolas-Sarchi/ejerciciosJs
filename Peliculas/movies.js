const peliculas = [];

function agregarPelicula (){
    const pelicula = new Map ();

    const titulo = document.getElementById('titulo').value,
    genero = document.getElementById('genero').value,
    duracion = document.getElementById('duracion').value,
    autor = document.getElementById('autor').value;

    pelicula.set("Titulo", titulo);
    pelicula.set("Gènero", genero);
    pelicula.set("Duracion", duracion);
    pelicula.set("Autor", autor);

    document.querySelector("#titulo").value = "";
    document.querySelector("#genero").value = "";
    document.querySelector("#duracion").value = "";
    document.querySelector("#autor").value = "";

    peliculas.push(pelicula)
    
    const mostrarPeliculas = document.querySelector('.mostrar-peliculas');

    const nuevaPelicula = document.createElement('div');
    nuevaPelicula.classList.add('card', 'text-center', 'col-sm-6º');

    nuevaPelicula.innerHTML = `<div class="card-header">
    ${genero}
  </div>
  <div class="card-body">
    <h5 class="card-title">${titulo}</h5>
    <p class="card-text">${autor}</p>
    <a href="#" class="btn btn-danger">eliminar</a>
  </div>
  <div class="card-footer text-muted">
    ${duracion} min
  </div>`

  mostrarPeliculas.appendChild(nuevaPelicula);

  const btnEliminar = nuevaTarea.querySelector('#btn-eliminar');
  btnEliminar.addEventListener('click', eliminarTarea);
}

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    agregarPelicula();
    
    
})