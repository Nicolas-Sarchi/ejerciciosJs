// Gestión de contactos en una libreta:
// Requerimientos:

// Desarrolla una interfaz de usuario para gestionar una libreta de contactos.
// Cada contacto debe tener los siguientes campos: nombre, apellido, teléfono, dirección de correo electrónico y categoría (amigo, familiar, trabajo, etc.).
// Permite agregar, editar, listar y eliminar contactos.
// Implementa la opción de buscar contactos por nombre o categoría.
// Agrega la funcionalidad de ordenar los contactos alfabéticamente por nombre o apellido.

const contactos = [];
contadorId = 1;

const formAgragarContacto = document.getElementById('agregarForm'),
    tablaContactos = document.getElementById('tabla-contactos');
let contactoEditando = null;


function agregarContacto() {
 
    
    const nombre = document.getElementById('nombre').value,
    apellido = document.getElementById('apellido').value,
    telefono = document.getElementById('telefono').value,
    email = document.getElementById('email').value,
    categoria = document.getElementById('categoria').value;

    const id = contadorId;
    const contacto = {
        id,
        nombre,
        apellido,
        telefono,
        email,
        categoria
    };
    if (contactoEditando) {
        editarContacto(contacto);
        contactoEditando = null;
    } else {
        contactos.push(contacto);
    }

    formAgragarContacto.reset()
    contadorId++
    
}

function mostrarContactos(contactosAMostrar = contactos){
    tablaContactos.innerHTML = '';

    contactos.forEach(contacto => {
        const nuevaFila = document.createElement('tr');
        nuevaFila.innerHTML = `
        <td>${contacto.nombre}</td>
        <td>${contacto.apellido}</td>
        <td>${contacto.telefono}</td>
        <td>${contacto.email}</td>
        <td>${contacto.categoria}</td>
        <td><button class="btn btn-danger" onclick="borrarContacto(${contacto.id})"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
        <td><button class="btn btn-warning" onclick="editarContacto(${contacto.id})">Editar</button></td>
    `
    tablaContactos.appendChild(nuevaFila);
    })
    
}

formAgragarContacto.addEventListener("submit", function (event) {
    event.preventDefault();
    agregarContacto()
    mostrarContactos()
})

function borrarContacto(contactoId){
    const index = contactos.findIndex(contacto => contacto.id === contactoId);

    if (index !== -1) {
        contactos.splice(index, 1);
        mostrarContactos()
        actualizarSelectContactos();
    }
}

function filtrarcontactos() {
    const textoBusqueda = buscarContacto.value.toLowerCase();
  
    const contactosFiltrados = contactos.filter((producto) => {
        const nombreProducto = producto.nombreProducto.toLowerCase();
        const categoria = producto.categoria.toLowerCase();
  
        return (
            nombreProducto.includes(textoBusqueda) ||
            categoria.includes(textoBusqueda)
        );
    });
}


const buscarContacto = document.getElementById("buscarProducto");
buscarProducto.addEventListener("input", filtrarContactos);







