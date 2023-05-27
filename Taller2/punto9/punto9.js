// N atletas han pasado a finales en salto triple en los juegos
// olímpicos femenino de 2022. Diseñe un programa que pida por
// teclado los nombres de cada atleta finalista y a su vez, sus
// marcas del salto en metros. Informar el nombre de la atleta
// campeona que se quede con la medalla de oro y si rompió
// récord, reportar el pago que será de 500 millones. El récord
// esta en 15,50 metros.

var mayorSalto = 0;
var record = 15.5;
var campeona = "";
var nAtletas = parseInt(prompt("Cuàntas atletas pasaron a las final ?"));


for (let i = 0; i < nAtletas; i++ ){
    var nombre =  prompt("Nombre de la atleta") ;
    var marcaDeSalto =  parseFloat(prompt("Marca del salto de la atleta"));

    if (marcaDeSalto > mayorSalto ){
        mayorSalto = marcaDeSalto;
        campeona = nombre;

    }
}

alert(`La campeona es ${campeona}`)

if (marcaDeSalto > record) {
    alert (`Felicidades ${nombre} acaba de romper el record mundial, acaba de ganar $500M`)
}