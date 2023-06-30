export function convertirDistancia (metros){
    let resultado = metros * 3.281;
    let result = `${parseFloat(metros)} m  ➝ ft = ${resultado}`
    return result;
}