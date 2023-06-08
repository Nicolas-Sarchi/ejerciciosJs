// Define un objeto de película
var pelicula = {
    titulo: "El Señor de los Anillos",
    genero: "Fantasía",
    director: "Peter Jackson",
    duracion: 201,
    mostrarInformacion: function() {
      var informacion = "Título: " + this.titulo + "<br>" +
                        "Género: " + this.genero + "<br>" +
                        "Director: " + this.director + "<br>" +
                        "Duración: " + this.duracion + " minutos";
      document.getElementById("informacion").innerHTML = informacion;
    }
  };
  
  // Muestra la información de la película en la página
  pelicula.mostrarInformacion();
  