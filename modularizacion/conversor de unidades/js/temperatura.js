
export function convertirTemperatura(celcius){
    let farenheit = (parseFloat(celcius) * 9/5 ) + 32
    let resultado = `${parseFloat(celcius)} °C  ➝ °F = ${farenheit.toFixed(2)}`

    return resultado
}



