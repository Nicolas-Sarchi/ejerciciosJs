// Dado un número indicar si es par o impar y si es mayor de 10.

let numero = prompt("Ingrese un nùmero");

numero = parseInt(numero);

if (numero % 2 == 0 ) {
    if (numero > 10){
    alert(`${numero} es par y es mayor que 10`);
    }
    else{
    alert(`${numero} es par y no es mayor que 10`);
    }
}

else {
    if (numero > 10 ) {
    alert(`${numero} es impar y es mayor que 10`);
    }
    else{
    alert(`${numero} es impar y no es mayor que 10`);
    }
}