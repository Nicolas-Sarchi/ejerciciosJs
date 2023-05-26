// elaborar un programa en javaScript que calcule la suma de todos los divisores de un nùmero dado y luego verifique si dos numeros son amigos usando la funcion anterior


var numero1 = parseInt(prompt("Ingrese un nùmero"));
var numero2 = parseInt(prompt("Ingrese otro nùmero"));

function divisoresDe (numero){
    total = 0;
    for (let i = 1 ; i < numero; i ++){
        if (numero % i == 0){
            total += i
        }
        
        }
        return (total)
    } 


function numerosAmigos (numero1, numero2){
    if (divisoresDe(numero1) == numero2 && divisoresDe(numero2) == numero1){
        alert("SON NUMEROS AMIGOS MAI FREND")
    }
    else {
        alert("son enemigos :(")
    }
}

numerosAmigos(numero1,numero2);














