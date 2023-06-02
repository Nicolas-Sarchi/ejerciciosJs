let empleados = [];
let contadorId = 1;

function agregarEmpleado(nombre, correo, telefono) {
  const empleado = { id: contadorId, nombre, correo, telefono };
  empleados.push(empleado);
  contadorId++;

  const cuerpoTabla = document.querySelector('#tabla-empleados tbody');
  const nuevaFila = document.createElement('tr');
  nuevaFila.innerHTML = `
    <td>${empleado.id}</td>
    <td>${empleado.nombre}</td>
    <td>${empleado.correo}</td>
    <td>${empleado.telefono}</td>
    <td><button class="btn btn-danger btn-sm" onclick="eliminarEmpleado(${empleado.id})">Eliminar</button></td>
  `;
  cuerpoTabla.appendChild(nuevaFila);
}

function eliminarEmpleado(id){
  const indice = empleados.findIndex(empleado => empleado.id === id);
  if (indice !== -1){
      
    }

  }

  


const formulario = document.querySelector('#formulario-empleado');


formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  const nombre = document.querySelector('#nombre').value;
  const correo = document.querySelector('#correo').value;
  const telefono = document.querySelector('#telefono').value;

  agregarEmpleado(nombre, correo, telefono);

  formulario.reset();
});