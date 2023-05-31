// hacer una matriz con nùmeros aleatorios, luego ordenarla de forma sinusoidal en js


let matriz = [];
let list1 = Array.from({length: 3}, () => Math.floor(Math.random()*200));
let list2 = Array.from({length: 3}, () => Math.floor(Math.random()*200));
let list3 = Array.from({length: 3}, () => Math.floor(Math.random()*200));


matriz[0] = list1
matriz[1] = list2
matriz[2] = list3   

let matrizPlana = matriz.flat();


let sort = matrizPlana.sort((a, b) => a - b);

let fila1 = sort.splice(0,3);
let fila2 = sort.splice(0,3);
let reverseSort = fila2.sort((a, b) => b - a);
let fila3 = sort.splice(0,3);


let resultado =  [fila1,reverseSort,fila3];

console.log(resultado)







