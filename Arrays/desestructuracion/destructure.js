let matriz =[];

// matriz 3 * 3 
let lista1 =Array.from({length: 3}, () => Math.floor(Math.random() * 100));
let lista2 =Array.from({length: 3}, () => Math.floor(Math.random() * 100));
let lista3 =Array.from({length: 3}, () => Math.floor(Math.random() * 100));

matriz[0] = lista1
matriz[1] = lista2
matriz[2] = lista3

let matrizPlana = matriz.flat().sort(function(a,b){return a-b});

let array1 = matrizPlana.splice(0,3);
let array2 = matrizPlana.splice(0,3);
let reverse = array2.reverse();
let array3 = matrizPlana.splice(0,3);

let  resultado = [array1,reverse,array3];
console.log(resultado)