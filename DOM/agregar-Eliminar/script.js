const eliminar = document.getElementById("eliminar"),
crear = document.getElementById("crear"),
div = document.getElementById("contenedor");

crear.addEventListener("click", function(){
    var parrafo = document.createElement("p");
    var contenido = document.createTextNode("Hello world");
    parrafo.appendChild(contenido);
    div.appendChild(parrafo);   
})

eliminar.addEventListener("click", function(){
   var borrar = document.querySelector("p");
   div.removeChild(borrar);
} )