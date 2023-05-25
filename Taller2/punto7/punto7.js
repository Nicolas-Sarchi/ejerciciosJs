// Programa que pida el ingreso del nombre y precio de un artículo y la
// cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
// en su factura.

let nombreProducto = prompt("Ingrese el nombre del producto"),
precio = prompt("Ingrese elprecio por unidad del producto"),
cantidad = prompt("Ingrese la cantidad del producto que desea")

let valorTotal = precio * cantidad;

alert(`El precio total a pagar es ${valorTotal}`)