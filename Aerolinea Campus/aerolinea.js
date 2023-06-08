const clientes = new Map();
const formCliente = document.querySelector('#agregar-cliente');

function agregarCliente(event){
    event.preventDefault();
    const id = document.querySelector('#numeroIdentificacion').value;
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const telefono = document.querySelector('#telefono').value;
    const email = document.querySelector('#email').value;
    const fechaNacimiento = document.querySelector('#fechaNacimiento').value;
    const nacionalidad = document.querySelector('#nacionalidad').value;

    clientes.set(id,{nombre,apellido, telefono, email, fechaNacimiento,nacionalidad})

    const cuerpoTabla = document.querySelector('#tabla-clientes tbody');

    clientes.forEach((cliente, id) => {
        const nuevaFila = document.createElement('tr');
        nuevaFila.classList.add('table-primary')
        nuevaFila.innerHTML = `
        <td>${id}</td>
        <td>${cliente.nombre}</td>
        <td>${cliente.apellido}</td>
        <td>${cliente.telefono}</td>
        <td>${cliente.email}</td>
        <td>${cliente.fechaNacimiento}</td>
        <td>${cliente.nacionalidad}</td>

        <td><button class="btn btn-danger btn-sm btn-eliminar">Eliminar</button></td>
        <td><button class="btn btn-warning btn-sm btn-editar">Editar</button></td>

        `;
        cuerpoTabla.appendChild(nuevaFila);
      });

    
    // Limpiar los campos del formulario
    formCliente.reset()

    
}



formCliente.addEventListener('submit',agregarCliente)