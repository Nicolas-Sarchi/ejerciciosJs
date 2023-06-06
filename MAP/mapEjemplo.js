// Crear un nuevo Map
const miMapa = new Map();

// Agregar elementos al Map
miMapa.set('clave1', 'valor1');
miMapa.set('clave2', 'valor2');
miMapa.set('clave3', 'valor3');

// Obtener el tamaño del Map
console.log('Tamaño del Map:', miMapa.size);

// Obtener un valor del Map
console.log('Valor de clave2:', miMapa.get('clave2'));

// Comprobar si una clave existe en el Map
console.log('¿Existe clave3?', miMapa.has('clave3'));

// Recorrer el Map utilizando un bucle for...of
for (const [miClave, miValor] of miMapa) {
  console.log(miClave, miValor);
}

// Eliminar un elemento del Map
miMapa.delete('clave2');

mapIter = miMapa.entries()

console.log(mapIter.next().value)
console.log(mapIter.next().value)



// Vaciar el Map
miMapa.clear();
