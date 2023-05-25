// Construir el algoritmo que lea por teclado dos números,
// si el primero es mayor al segundo informar su suma y
// diferencia, en caso contrario, informar el producto y la
// división del primero respecto al segundo.

let num1 = parseFloat(prompt("Ingrese un nùmero"));
let num2 = parseFloat(prompt("Ingrese otro nùmero"));

if (num1 > num2){
    let suma = num1 + num2;
    let resta = num1 - num2;

    alert(`El resultado de la suma entre ${num1} y ${num2} es: ${suma}

El resultado de la resta entre ${num1} y ${num2} es: ${resta}`)
}

else if (num2 > num1){
    let multiplicacion = num1 * num2;
    let division = num1 / num2 ;
    alert(`El resultado de la multiplicacion entre ${num1} y ${num2} es: ${multiplicacion}

El resultado de la division entre ${num1} y ${num2} es: ${division.toFixed(2)}`)
}
