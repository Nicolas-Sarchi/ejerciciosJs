const contactos = [];
let contadorId = 1;

const formAgregarContacto = document.getElementById('agregarForm');
const tablaContactos = document.getElementById('tabla-contactos');
const buscarContacto = document.getElementById('buscarContacto');

let contactoEditando = null;

function agregarContacto(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const categoria = document.getElementById('categoria').value;

    if (contactoEditando) {
        editarContacto(contactoEditando, nombre, apellido, telefono, email, categoria);
        contactoEditando = null;
    } else {
        const id = contadorId++;
        const contacto = {
            id,
            nombre,
            apellido,
            telefono,
            email,
            categoria
        };
        contactos.push(contacto);
    }

    formAgregarContacto.reset();
    mostrarContactos();
}

function borrarContacto(contactoId) {
    const index = contactos.findIndex(contacto => contacto.id === contactoId);

    if (index !== -1) {
        contactos.splice(index, 1);
        mostrarContactos();
    }
}

function editarContacto(contacto, nombre, apellido, telefono, email, categoria) {
    contacto.nombre = nombre;
    contacto.apellido = apellido;
    contacto.telefono = telefono;
    contacto.email = email;
    contacto.categoria = categoria;
    mostrarContactos();
}

function filtrarContactos() {
    const textoBusqueda = buscarContacto.value.toLowerCase();
    const contactosFiltrados = contactos.filter(contacto => {
        const nombreContacto = contacto.nombre.toLowerCase();
        const categoria = contacto.categoria.toLowerCase();
        return nombreContacto.includes(textoBusqueda) || categoria.includes(textoBusqueda);
    });

    mostrarContactos(contactosFiltrados);
}

function mostrarContactos(contactosAMostrar = contactos) {
    tablaContactos.innerHTML = '';

    if (contactosAMostrar.length === 0) {
        const noResultsRow = document.createElement('tr');
        noResultsRow.innerHTML = `<td colspan="7">No hay coincidencias</td>`;
        tablaContactos.appendChild(noResultsRow);
        return;
    }

    contactosAMostrar.forEach(contacto => {
        const nuevaFila = document.createElement('tr');
        nuevaFila.innerHTML = `
            <td>${contacto.nombre}</td>
            <td>${contacto.apellido}</td>
            <td>${contacto.telefono}</td>
            <td>${contacto.email}</td>
            <td>${contacto.categoria}</td>
            <td><button class="btn btn-danger" onclick="borrarContacto(${contacto.id})"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
            <td><button class="btn btn-warning" onclick="editarContactoForm(${contacto.id})">Editar</button></td>
        `;
        tablaContactos.appendChild(nuevaFila);
    });
}

function editarContactoForm(contactoId) {
    const contacto = contactos.find(contacto => contacto.id === contactoId);

    if (contacto) {
        document.getElementById('nombre').value = contacto.nombre;
        document.getElementById('apellido').value = contacto.apellido;
        document.getElementById('telefono').value = contacto.telefono;
        document.getElementById('email').value = contacto.email;
        document.getElementById('categoria').value = contacto.categoria;

        contactoEditando = contacto;
    }
}

formAgregarContacto.addEventListener('submit', agregarContacto);
buscarContacto.addEventListener('input', filtrarContactos);

function ordenarPorNombre() {
    contactos.sort((a, b) => {
      const nombreA = a.nombre.toUpperCase();
      const nombreB = b.nombre.toUpperCase();
      if (nombreA < nombreB) {
        return -1;
      }
      if (nombreA > nombreB) {
        return 1;
      }
      return 0;
    });
  
    mostrarContactos();
  }
  
  function ordenarPorApellido() {
    contactos.sort((a, b) => {
      const apellidoA = a.apellido.toUpperCase();
      const apellidoB = b.apellido.toUpperCase();
      if (apellidoA < apellidoB) {
        return -1;
      }
      if (apellidoA > apellidoB) {
        return 1;
      }
      return 0;
    });
  
    mostrarContactos();
  }
  window.addEventListener("DOMContentLoaded", mostrarContactos);
  
