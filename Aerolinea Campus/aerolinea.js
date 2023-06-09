// Add this function to your existing JavaScript code
function showSection(sectionId) {
    const sections = ['home', 'clientes', 'rutas', 'tiquetes'];
    sections.forEach((id) => {
        const section = document.getElementById(id);
        if (id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Add event listeners to the navbar items
document.querySelector("a[href='#Home']").addEventListener("click", () => showSection("home"));
document.querySelector("a[href='#Clientes']").addEventListener("click", () => showSection("clientes"));
document.querySelector("a[href='#Rutas']").addEventListener("click", () => showSection("rutas"));
document.querySelector("a[href='#Tiquetes']").addEventListener("click", () => showSection("tiquetes"));

// Show the home section by default
showSection("home");


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

function mostrarClientes(clientesToShow = clientes) {
    cuerpoTabla.innerHTML = '';

    clientesToShow.forEach((cliente) => {
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


function filterTable() {
    // Get the user's input value
    const searchValue = document.querySelector('#search').value.toLowerCase();
  
    // Filter the `clientes` array based on the user's input
    const filteredClientes = clientes.filter((cliente) => {
      return (
        cliente.id.toString().includes(searchValue) ||
        cliente.nombre.toLowerCase().includes(searchValue) ||
        cliente.apellido.toLowerCase().includes(searchValue) ||
        cliente.telefono.toLowerCase().includes(searchValue) ||
        cliente.email.toLowerCase().includes(searchValue) ||
        cliente.fechaNacimiento.toLowerCase().includes(searchValue) ||
        cliente.nacionalidad.toLowerCase().includes(searchValue)
      );
    });
  
    // Update the table with the filtered results
    mostrarClientes(filteredClientes);
  
    const noResults = document.querySelector('#noResults');
    if (filteredClientes.length === 0) {
      noResults.style.display = 'block';
    } else {
      noResults.style.display = 'none';
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
            const rutaId = btnEliminarRuta.dataset.id;
            eliminarRuta(rutaId);
        });

        cuerpoTablaRutas.appendChild(nuevaFila);
    });
}

function eliminarRuta(id) {
    var indice = -1;
    for (var i = 0; i < rutas.length; i++) {
      if (rutas[i].id === id) {
        indice = i;
        break;
      }
    }
  
    if (indice !== -1) {
      rutas.splice(indice, 1);
      mostrarRutas();
    }
  }
  


formRuta.addEventListener('submit', agregarRuta);   





