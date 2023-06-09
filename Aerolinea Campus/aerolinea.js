const clientes = [];

const formCliente = document.querySelector('#agregar-cliente');
const cuerpoTabla = document.querySelector('#tabla-clientes tbody');

let clienteEditando = null;

function agregarCliente(event) {
    event.preventDefault();
    const id = document.querySelector('#numeroIdentificacion').value;
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const telefono = document.querySelector('#telefono').value;
    const email = document.querySelector('#email').value;
    const fechaNacimiento = document.querySelector('#fechaNacimiento').value;
    const nacionalidad = document.querySelector('#nacionalidad').value;

    const cliente = {
        id,
        nombre,
        apellido,
        telefono,
        email,
        fechaNacimiento,
        nacionalidad
    };

    if (clienteEditando) {
        editarCliente(cliente);
        clienteEditando = null;
    } else {
        clientes.push(cliente);
    }

    formCliente.reset();

    mostrarClientes();
}

function mostrarClientes() {
    cuerpoTabla.innerHTML = '';

    clientes.forEach((cliente) => {
        const nuevaFila = document.createElement('tr');
        nuevaFila.classList.add('table-primary');
        nuevaFila.innerHTML = `
            <td>${cliente.id}</td>
            <td>${cliente.nombre}</td>
            <td>${cliente.apellido}</td>
            <td>${cliente.telefono}</td>
            <td>${cliente.email}</td>
            <td>${cliente.fechaNacimiento}</td>
            <td>${cliente.nacionalidad}</td>
            <td><button class="btn btn-danger btn-sm btn-eliminar" data-id="${cliente.id}">Eliminar</button></td>
            <td><button class="btn btn-warning btn-sm btn-editar" data-id="${cliente.id}">Editar</button></td>
        `;

        const btnEliminar = nuevaFila.querySelector('.btn-eliminar');
        btnEliminar.addEventListener('click', function () {
            const clienteId = btnEliminar.dataset.id;
            eliminarCliente(clienteId);
        });

        const btnEditar = nuevaFila.querySelector('.btn-editar');
        btnEditar.addEventListener('click', function () {
            const clienteId = btnEditar.dataset.id;
            editarClienteFormulario(clienteId);
        });

        cuerpoTabla.appendChild(nuevaFila);
    });
}

function editarClienteFormulario(clienteId) {
    const cliente = clientes.find(function (cliente) {
        return cliente.id === clienteId;
    });

    if (cliente) {
        document.querySelector('#numeroIdentificacion').value = cliente.id;
        document.querySelector('#nombre').value = cliente.nombre;
        document.querySelector('#apellido').value = cliente.apellido;
        document.querySelector('#telefono').value = cliente.telefono;
        document.querySelector('#email').value = cliente.email;
        document.querySelector('#fechaNacimiento').value = cliente.fechaNacimiento;
        document.querySelector('#nacionalidad').value = cliente.nacionalidad;

        clienteEditando = cliente;
    }
}

function editarCliente(clienteEditado) {
    const index = clientes.findIndex(function (cliente) {
        return cliente.id === clienteEditado.id;
    });

    if (index !== -1) {
        clientes[index] = clienteEditado;
    }

    mostrarClientes();
}

function eliminarCliente(identificacion) {
    const index = clientes.findIndex(function (cliente) {
        return cliente.id === identificacion;
    });

    if (index !== -1) {
        clientes.splice(index, 1);
        mostrarClientes();
    }
}

formCliente.addEventListener('submit', agregarCliente);
mostrarClientes();




const rutas = [];

const formRuta = document.querySelector('#agregar-ruta');
const cuerpoTablaRutas = document.querySelector('#tabla-rutas tbody');

function agregarRuta(event) {
    event.preventDefault();
    const nombreRuta = document.querySelector('#nombreRuta').value;
    const valorTiquete = document.querySelector('#valorTiquete').value;
    const ciudadOrigen = document.querySelector('#ciudadOrigen').value;
    const ciudadDestino = document.querySelector('#ciudadDestino').value;
    const puntosFidelizacion = document.querySelector('#puntosFidelizacion').value;

    const id = generarIdRuta(ciudadOrigen, ciudadDestino);

    const ruta = {
        id,
        nombreRuta,
        valorTiquete,
        ciudadOrigen,
        ciudadDestino,
        puntosFidelizacion
    };

    rutas.push(ruta);

    formRuta.reset();

    mostrarRutas();
}

function generarIdRuta(ciudadOrigen, ciudadDestino) {
    const idCiudadOrigen = ciudadOrigen.substring(0, 3).toUpperCase();
    const idCiudadDestino = ciudadDestino.substring(0, 3).toUpperCase();
    return `${idCiudadOrigen}-${idCiudadDestino}`;
}

function mostrarRutas() {
    cuerpoTablaRutas.innerHTML = '';

    rutas.forEach((ruta) => {
        const nuevaFila = document.createElement('tr');
        nuevaFila.classList.add('table-primary');
        nuevaFila.innerHTML = `
            <td>${ruta.id}</td>
            <td>${ruta.nombreRuta}</td>
            <td>${ruta.valorTiquete}</td>
            <td>${ruta.ciudadOrigen}</td>
            <td>${ruta.ciudadDestino}</td>
            <td>${ruta.puntosFidelizacion}</td>
            <td><button class="btn btn-danger btn-sm btn-eliminar-ruta" data-id="${ruta.id}">Eliminar</button></td>

        `;
        const btnEliminarRuta = nuevaFila.querySelector('.btn-eliminar-ruta');
        btnEliminarRuta.addEventListener('click', function () {
            const rutaId = btnEliminar.dataset.id;
            eliminarRuta(rutaId);
        });

        cuerpoTablaRutas.appendChild(nuevaFila);
    });
}

function eliminarRuta(identificacion) {
    

   
        rutas.splice(index, 1);
        mostrarRutas();
    
}



formRuta.addEventListener('submit', agregarRuta);   



// Obtener elementos del DOM
// var formRuta = document.getElementById("formRuta");
// var tablaRutas = document.getElementById("tablaRutas");

// // Función para generar una nueva ruta
// function generarRuta() {
//   var id = formRuta.ciudadOrigen.value.substr(0, 3) + formRuta.ciudadDestino.value.substr(0, 3);
//   var nombre = formRuta.nombre.value;
//   var valorTiquete = parseFloat(formRuta.valorTiquete.value);
//   var ciudadOrigen = formRuta.ciudadOrigen.value;
//   var ciudadDestino = formRuta.ciudadDestino.value;
//   var puntosFidelizacion = parseInt(formRuta.puntosFidelizacion.value);

//   var ruta = {
//     id: id,
//     nombre: nombre,
//     valorTiquete: valorTiquete,
//     ciudadOrigen: ciudadOrigen,
//     ciudadDestino: ciudadDestino,
//     puntosFidelizacion: puntosFidelizacion
//   };

//   rutas.push(ruta);

//   mostrarRutas();
//   limpiarFormulario();
// }

// // Función para mostrar las rutas en la tabla
// function mostrarRutas() {
//   var tablaHTML = "";
//   for (var i = 0; i < rutas.length; i++) {
//     tablaHTML += `
//       <tr>
//         <td>${rutas[i].id}</td>
//         <td>${rutas[i].nombre}</td>
//         <td>$${rutas[i].valorTiquete}</td>
//         <td>${rutas[i].ciudadOrigen}</td>
//         <td>${rutas[i].ciudadDestino}</td>
//         <td>${rutas[i].puntosFidelizacion}</td>
//         <td><button onclick="eliminarRuta(${i})">Eliminar</button></td>
//       </tr>
//     `;
//   }
//   tablaRutas.innerHTML = tablaHTML;
// }



// // Función para eliminar una ruta
// function eliminarRuta(index) {
//   rutas.splice(index, 1);
//   mostrarRutas();
// }

// // Evento al enviar el formulario de ruta
// formRuta.addEventListener("submit", function(event) {
//   event.preventDefault();
//   generarRuta();
// });
