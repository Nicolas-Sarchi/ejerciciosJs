// Desarrolle un programa cíclico que capture un dato
// numérico cada vez, y los vaya acumulando. El programa se
// detiene cuando el usuario digita un cero. El programa debe
// mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
// PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
// VALOR Y MENOR VALOR.

var sumatoria = 0;
var cantidad = 0;
var mayorValor = 0;
var menorValor = 1000000000;

var numero = parseInt(prompt("Ingrese un nùmero"));

while (numero !== 0) {
    numero = parseInt(prompt("Ingrese un nùmero"));
    sumatoria += numero;
    cantidad++ ;

    if (numero > mayorValor){
        mayorValor = numero;
    }

    if (numero < menorValor){
        menorValor = numero;
    }

}

var promedio = sumatoria / cantidad ; 

alert(`La sumatoria de los valores es: ${sumatoria}

La cantidad de nùmeros ingresados fue: ${cantidad}

El valor del promedio es: ${promedio.toFixed(2)}

El mayor valor fue : ${mayorValor}

El menor valor fue : ${menorValor}`);