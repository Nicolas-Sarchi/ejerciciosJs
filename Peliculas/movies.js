const peliculas = new Map ();

function agregarPelicula (event){
    event.preventDefault();

    const titulo = document.getElementById('titulo').value,
    genero = document.getElementById('genero').value,
    duracion = document.getElementById('duracion').value,
    autor = document.getElementById('autor').value;

    
    peliculas.set(titulo, {genero, duracion, autor});
    

    document.querySelector("#titulo").value = "";
    document.querySelector("#genero").value = "";
    document.querySelector("#duracion").value = "";
    document.querySelector("#autor").value = "";

}

function eliminarPelicula (e){
  e.preventDefault();

  const titulo = document.getElementById('tituloEliminar').value,
  mensaje = document.createElement('span'),
  divEliminar = document.getElementById('eliminarPelicula');

  if (peliculas.has(titulo)){
    peliculas.delete(titulo);
    mensaje.innerText = `la película ${titulo} ha sido eliminada correctamente`
  }
  else{
    mensaje.innerText = `no Existe una pelicula con el titulo ${titulo}`
  }
  divEliminar.appendChild(mensaje);
}