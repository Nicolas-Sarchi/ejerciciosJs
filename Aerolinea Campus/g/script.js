// Datos de ejemplo para los clientes
let clients = [
    { id: 1, name: "John", lastname: "Doe", phone: "123456789", email: "john@example.com", birthdate: "1990-01-01", nationality: "USA" },
    { id: 2, name: "Jane", lastname: "Smith", phone: "987654321", email: "jane@example.com", birthdate: "1995-05-05", nationality: "Canada" }
];

// Función para renderizar la tabla de clientes
function renderClients() {
    const tableBody = document.getElementById("client-list");
    tableBody.innerHTML = "";

    clients.forEach(client => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${client.id}</td>
            <td>${client.name}</td>
            <td>${client.lastname}</td>
            <td>${client.phone}</td>
            <td>${client.email}</td>
            <td>${client.birthdate}</td>
            <td>${client.nationality}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteClient(${client.id})">Eliminar</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Función para guardar o modificar un cliente
function saveClient(event) {
    event.preventDefault();

    const id = document.getElementById("id-input").value;
    const name = document.getElementById("name-input").value;
    const lastname = document.getElementById("lastname-input").value;
    const phone = document.getElementById("phone-input").value;
    const email = document.getElementById("email-input").value;
    const birthdate = document.getElementById("birthdate-input").value;
    const nationality = document.getElementById("nationality-input").value;

    const existingClient = clients.find(client => client.id === parseInt(id));
    if (existingClient) {
        existingClient.name = name;
        existingClient.lastname = lastname;
        existingClient.phone = phone;
        existingClient.email = email;
        existingClient.birthdate = birthdate;
        existingClient.nationality = nationality;
    } else {
        const newClient = { id: parseInt(id), name, lastname, phone, email, birthdate, nationality };
        clients.push(newClient);
    }

    renderClients();
    document.getElementById("client-form").reset();
}

// Función para eliminar un cliente
function deleteClient(id) {
    clients = clients.filter(client => client.id !== id);
    renderClients();
}

// Función para buscar clientes por nombre, apellido o documento de identidad
function searchClients() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const filteredClients = clients.filter(client => {
        const fullName = `${client.name} ${client.lastname}`.toLowerCase();
        return client.id.toString().includes(searchTerm) ||
            fullName.includes(searchTerm) ||
            client.name.toLowerCase().includes(searchTerm) ||
            client.lastname.toLowerCase().includes(searchTerm);
    });

    renderClients(filteredClients);
}

// Event listeners
document.getElementById("client-form").addEventListener("submit", saveClient);
document.getElementById("search-input").addEventListener("keyup", searchClients);

// Renderizar la tabla de clientes al cargar la página
renderClients();


// Datos de ejemplo para las rutas
let routes = [
    { id: 1, name: "Ruta 1", ticketValue: 100, origin: "Ciudad A", destination: "Ciudad B", loyaltyPoints: 10 },
    { id: 2, name: "Ruta 2", ticketValue: 200, origin: "Ciudad C", destination: "Ciudad D", loyaltyPoints: 20 }
];

// Función para renderizar la tabla de rutas
function renderRoutes() {
    const tableBody = document.getElementById("route-list");
    tableBody.innerHTML = "";

    routes.forEach(route => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${route.id}</td>
            <td>${route.name}</td>
            <td>${route.ticketValue}</td>
            <td>${route.origin}</td>
            <td>${route.destination}</td>
            <td>${route.loyaltyPoints}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteRoute(${route.id})">Eliminar</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Función para guardar una ruta
function saveRoute(event) {
    event.preventDefault();

    const name = document.getElementById("name-input").value;
    const ticketValue = document.getElementById("ticket-value-input").value;
    const origin = document.getElementById("origin-input").value;
    const destination = document.getElementById("destination-input").value;
    const loyaltyPoints = document.getElementById("loyalty-points-input").value;

    const id = routes.length > 0 ? routes[routes.length - 1].id + 1 : 1;
    const newRoute = { id, name, ticketValue, origin, destination, loyaltyPoints };
    routes.push(newRoute);

    renderRoutes();
    document.getElementById("route-form").reset();
}

// Función para eliminar una ruta
function deleteRoute(id) {
    routes = routes.filter(route => route.id !== id);
    renderRoutes();
}

// Renderizar la tabla de rutas al cargar la página
renderRoutes();


// Función para renderizar las opciones de clientes en el select
function renderClientOptions() {
    const clientSelect = document.getElementById("client-select");
    clientSelect.innerHTML = '<option value="">Seleccionar cliente</option>';

    clients.forEach(client => {
        const option = document.createElement("option");
        option.value = client.id;
        option.textContent = `${client.name} ${client.lastname}`;
        clientSelect.appendChild(option);
    });
}

// Función para renderizar las opciones de rutas en el select
function renderRouteOptions() {
    const routeSelect = document.getElementById("route-select");
    routeSelect.innerHTML = '<option value="">Seleccionar ruta</option>';

    routes.forEach(route => {
        const option = document.createElement("option");
        option.value = route.id;
        option.textContent = route.name;
        routeSelect.appendChild(option);
    });
}

// Función para calcular el impuesto IVA
function calculateIVA(ticketValue) {
    return ticketValue * 0.16;
}

// Función para calcular la tasa aeroportuaria
function calculateAirportFee(ticketValue) {
    return ticketValue * 0.04;
}

// Función para realizar la compra
function purchaseTickets(event) {
    event.preventDefault();

    const clientId = document.getElementById("client-select").value;
    const routeId = document.getElementById("route-select").value;

    const client = clients.find(client => client.id === parseInt(clientId));
    const route = routes.find(route => route.id === parseInt(routeId));

    const ticketValue = route.ticketValue;
    const iva = calculateIVA(ticketValue);
    const airportFee = calculateAirportFee(ticketValue);
    const loyaltyPoints = route.loyaltyPoints;

    document.getElementById("summary-client").textContent = `${client.name} ${client.lastname}`;
    document.getElementById("summary-route").textContent = route.name;
    document.getElementById("summary-ticket-value").textContent = ticketValue;
    document.getElementById("summary-iva").textContent = iva;
    document.getElementById("summary-airport-fee").textContent = airportFee;
    document.getElementById("summary-loyalty-points").textContent = loyaltyPoints;

    document.getElementById("purchase-summary").style.display = "block";

    // Abonar los puntos de fidelización al cliente
    client.loyaltyPoints += loyaltyPoints;

    // Limpiar el formulario
    document.getElementById("purchase-form").reset();
}

// Event listeners
document.getElementById("purchase-form").addEventListener("submit", purchaseTickets);

// Renderizar las opciones de clientes y rutas al cargar la página
renderClientOptions();
renderRouteOptions();

// Datos de ejemplo para los clientes


// Función para renderizar la tabla de clientes y sus puntos de fidelización
function renderLoyaltyTable() {
    const tableBody = document.getElementById("loyalty-list");
    tableBody.innerHTML = "";

    clients.forEach(client => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${client.name} ${client.lastname}</td>
            <td>${client.loyaltyPoints}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Renderizar la tabla de fidelización al cargar la página
renderLoyaltyTable();
