
function showSection(sectionId) {
    const sections = ['home', 'clientes', 'rutas', 'tiquetes', 'fidelizacion'];
    sections.forEach((id) => {
        const section = document.getElementById(id);
        if (id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}


document.querySelector("a[href='#Home']").addEventListener("click", () => showSection("home"));
document.querySelector("a[href='#Clientes']").addEventListener("click", () => showSection("clientes"));
document.querySelector("a[href='#Rutas']").addEventListener("click", () => showSection("rutas"));
document.querySelector("a[href='#Tiquetes']").addEventListener("click", () => showSection("tiquetes"));
document.querySelector("a[href='#Puntos']").addEventListener("click", () => showSection("fidelizacion"));


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
    updateClientSelect();
    renderLoyaltyTable();

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
            <td><button class="btn btn-danger btn-sm btn-eliminar" data-id="${cliente.id}"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
            <td><button class="btn btn-warning btn-sm btn-editar" data-id="${cliente.id}"><i class="fa fa-pencil" aria-hidden="true"></i></button></td>
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
    updateClientSelect();
    renderLoyaltyTable()

}

function eliminarCliente(identificacion) {
    const index = clientes.findIndex(function (cliente) {
        return cliente.id === identificacion;
    });

    if (index !== -1) {
        clientes.splice(index, 1);
        mostrarClientes();
        updateClientSelect();
        renderLoyaltyTable()

    }
}




  function filterTable() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const filteredClients = clientes.filter(client => {
        const fullName = `${client.nombre} ${client.apellido}`.toLowerCase();
        return client.id.toString().includes(searchTerm) ||
            fullName.includes(searchTerm) ||
            client.nombre.toLowerCase().includes(searchTerm) ||
            client.apellido.toLowerCase().includes(searchTerm);
    });
    const noResults = document.querySelector('#noResults');
   if (filteredClients.length === 0) {
     noResults.style.display = 'block';
   } else {
     noResults.style.display = 'none';
   }

    mostrarClientes(filteredClients);
}

formCliente.addEventListener('submit', agregarCliente);
mostrarClientes();

function updateClientSelect() {
    const clientSelect = document.getElementById('client-select');
    clientSelect.innerHTML = '';

    clientes.forEach(client => {
        const option = document.createElement('option');
        option.value = client.id;
        option.innerText = `${client.nombre} ${client.apellido}`;
        clientSelect.appendChild(option);
    });
}



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
    updateRouteSelect()
    mostrarRutas();
}

function generarIdRuta(ciudadOrigen, ciudadDestino) {
    const idCiudadOrigen = ciudadOrigen.substring(0, 3).toUpperCase();
    const idCiudadDestino = ciudadDestino.substring(0, 3).toUpperCase();
    return `${idCiudadOrigen}-${idCiudadDestino}`;
}

function updateRouteSelect() {
    const routeSelect = document.getElementById('route-select');
    routeSelect.innerHTML = '';

    rutas.forEach(route => {
        const option = document.createElement('option');
        option.value = route.id;
        option.innerText = `${route.id}  - "${route.nombreRuta}"`;
        routeSelect.appendChild(option);
    });
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
      updateRouteSelect()
    }
  }




formRuta.addEventListener('submit', agregarRuta);   




function calculatePurchase(event) {
    event.preventDefault();

    const clientId = document.getElementById('client-select').value;
    const routeId = document.getElementById('route-select').value;

    const client = clientes.find(client => client.id === clientId);
    const route = rutas.find(route => route.id === routeId);

    const ticketValue = parseFloat(route.valorTiquete);
    const iva = ticketValue * 0.16;
    const airportFee = ticketValue * 0.04;
    const loyaltyPoints = parseInt(route.puntosFidelizacion);
    const total = ticketValue + iva + airportFee

    const summaryClient = document.getElementById('summary-client');
    const summaryRoute = document.getElementById('summary-route');
    const summaryTicketValue = document.getElementById('summary-ticket-value');
    const summaryIva = document.getElementById('summary-iva');
    const summaryAirportFee = document.getElementById('summary-airport-fee');
    const summaryLoyaltyPoints = document.getElementById('summary-loyalty-points');
    const summaryTotal = document.getElementById('total-compra');


    summaryClient.textContent = `${client.nombre} ${client.apellido}`;
    summaryRoute.textContent = route.nombreRuta;
    summaryTicketValue.textContent = ticketValue.toFixed(2);
    summaryIva.textContent = iva.toFixed(2);
    summaryAirportFee.textContent = airportFee.toFixed(2);
    summaryLoyaltyPoints.textContent = loyaltyPoints;
    summaryTotal.textContent = total.toFixed(2)

    document.getElementById('purchase-summary').style.display = 'block';

    // Actualizar los puntos de fidelización del cliente
    client.puntosFidelizacion = client.puntosFidelizacion ? client.puntosFidelizacion + loyaltyPoints : loyaltyPoints;
    renderLoyaltyTable();
}

function renderLoyaltyTable() {
    const loyaltyList = document.getElementById('loyalty-list');
    loyaltyList.innerHTML = '';

    clientes.forEach(client => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${client.nombre} ${client.apellido}</td>
            <td>${client.puntosFidelizacion ? client.puntosFidelizacion : 0}</td>
        `;

        loyaltyList.appendChild(row);
    });
}

document.getElementById('purchase-form').addEventListener('submit', calculatePurchase);

  
