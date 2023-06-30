export function conversorPeso (kg){
    let resultado = kg * 2.205;
    let result = `${parseFloat(kg)} Kg  ➝ lb = ${resultado.toFixed(2)}`
    return result;
}