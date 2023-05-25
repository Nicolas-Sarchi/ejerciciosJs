// Construir el algoritmo para determinar el voltaje de un
// circuito a partir de la resistencia y la intensidad de corriente.

let resistencia = prompt("Ingrese la resistencia de su circuito")
let intensidad = prompt("Ingrese la intensidad de su circuito")

let voltaje = parseFloat(intensidad) * parseFloat(resistencia)

alert(`El voltaje de su circuito es : ${voltaje} voltios`)
