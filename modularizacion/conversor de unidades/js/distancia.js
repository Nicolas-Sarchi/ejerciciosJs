export function convertirDistancia (metros){
    let resultado = metros * 3.281;
    let result = `${parseFloat(metros)} m  ➝ ft = ${resultado.toFixed(3)}`
    return result;
}