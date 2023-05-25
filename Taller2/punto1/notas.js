// Construir el algoritmo para un programa que ingrese tres
// notas de un alumno, si el promedio es menor o igual a 3.9
// mostrar un mensaje "Estudie“, de lo contrario un mensaje que
// diga "becado"


let nota1 = prompt("Ingrese su primera nota");
let nota2 = prompt("Ingrese su segunda nota");
let nota3 = prompt("Ingrese su tercera nota");

let promedio = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3 ;

if (promedio <= 3.9){

    alert(`Su promedio es: ${promedio.toFixed(2)}
ESTUDIE VAGO!`)
}

else{
    alert(`Su promedio es: ${promedio.toFixed(2)}
BECADO`)

}
