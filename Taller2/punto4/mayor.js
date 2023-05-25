// Construir el algoritmo que solicite el nombre y edad de 3
// personas y determine el nombre de la persona con mayor edad.


let namePerson1 = prompt("Ingrese el nombre de la primera persona")
let namePerson2 = prompt("Ingrese el nombre de la segunda persona")
let namePerson3 = prompt("Ingrese el nombre de la tercera persona")

let agePerson1 = prompt(`Ingrese la edad de ${namePerson1}`)
let agePerson2 = prompt(`Ingrese la edad de ${namePerson2}`)
let agePerson3 = prompt(`Ingrese la edad de ${namePerson3}`)


if (agePerson1 > agePerson2 && agePerson1 > agePerson3){
    alert(`${namePerson1} Es el mayor de los tres`)
}

else if (agePerson2 > agePerson1 && agePerson2 > agePerson3){
    alert(`${namePerson2} Es el mayor de los tres`)

}

else if (agePerson3 > agePerson1 && agePerson3 > agePerson2){
    alert(`${namePerson3} Es el mayor de los tres`)

}

else{
    alert("Dos o màs personas tienen la misma edad")
}

