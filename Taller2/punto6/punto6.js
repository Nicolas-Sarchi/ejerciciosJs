// Construir el algoritmo en Javascript para un programa
// para cualquier cantidad de estudiantes que lea el nombre,
// el sexo y la nota definitiva y halle al estudiante con la mayor
// nota y al estudiante con la menor nota y cuantos eran
// hombres y cuantos mujeres.

let cantEstudiante = prompt("¿Cuàntos estudiantes quiere ingresar ?");
let cantHombres = 0;
let cantMujeres = 0;
let nombreNotaMayor = "";
let nombreNotaMenor = "";
let notaMayor = 0; 
let notaMenor = 100;

for(i = 0 ; i < cantEstudiante ; i ++){

    let nombre = prompt("Ingrese el nombre del estudiante");
    let sexo = prompt("Ingrese el sexo del estudiante M / F").toLowerCase();
    let notaDef = parseFloat(prompt("Ingrese la nota definitiva del estudiante"));



    if (sexo == "m"){
        cantHombres ++ ;
    }

    else{
        cantMujeres += 1;
    }

    

    if (notaDef > notaMayor){
        nombreNotaMayor = nombre;
        notaMayor = notaDef;
    }

    if(notaDef < notaMenor) {
        nombreNotaMenor = nombre;
        notaMenor = notaDef
    }


}

alert(`El estudiante con mayor nota es: ${nombreNotaMayor}

El estudiante con menor nota es: ${nombreNotaMenor}

Cantidad de hombres : ${cantHombres}

Cantidad de mujeres : ${cantMujeres}`)


