// Programa que Ingrese por teclado:
// a. el valor del lado de un cuadrado para mostrar por pantalla el
// perímetro del mismo
// b. la base y la altura de un rectángulo para mostrar el área del
// mismo

let ladoCuadrado = parseFloat(prompt("Ingrese el valor del lado de su cuadrado"))
let base = parseFloat(prompt("Ingrese el valor de la base de su triangulo"))
let altura = parseFloat(prompt("Ingrese el valor de la altura de su triangulo"))

let perimetroCuadrado = ladoCuadrado *4;
let areaTriangulo = (base * altura) / 2;

alert(`El perimetro de su cuadrado es: ${perimetroCuadrado}

El area de su triangulo es  ${areaTriangulo}`)