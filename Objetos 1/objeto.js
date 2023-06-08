
var persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    saludar: function (texto) {
        var saludo = "Hola, soy " + this.nombre + "! " + texto;
        document.getElementById("saludo").textContent = saludo;
    }
  };

console.log(persona.nombre);  // Resultado: "Juan"
console.log(persona.edad);    // Resultado: 30
console.log(persona.ciudad);  // Resultado: "Madrid"

persona.saludar("Cómo estás?");            // Resultado: "Hola, soy Juan!"

persona.profesion = "Ingeniero";
persona.cambiarCiudad = function(nuevaCiudad) {
  this.ciudad = nuevaCiudad;
};

console.log(persona.profesion);  // Resultado: "Ingeniero"

persona.cambiarCiudad("Barcelona");
console.log(persona.ciudad); 











/*  */





 