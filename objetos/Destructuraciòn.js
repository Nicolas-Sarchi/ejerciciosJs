const superheroe = {
    nombre : "hulk",
    edad: "12",
    peso:"123",
    empresa: "Marvel"
}


const {nombre:name , edad, peso, empresa = "Alternativo" } = superheroe
console.log(`${name} tiene ${edad} años, pesa ${peso} kg, y es de ${empresa}`);

const {nombre, ...parametros} = superheroe
console.log(nombre, parametros);