import {getRutas,agregarRuta,
eliminarRuta,
  URL,
  modificarRuta,
  agregarPunto,
  eliminarPunto,
  modificarPunto
} from "./peticiones.js";
import { listarRutas, mostrarPuntos, listarRutasHome } from "./listar.js";


let rutas = await getRutas();
listarRutas(rutas);
listarRutasHome(rutas);

document
  .getElementById("formRuta")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const NomRuta = document.getElementById("nombreRuta").value;

    let nuevaRuta = {
      NomRuta,
    };
    try{
    await agregarRuta(nuevaRuta);

    }
    catch(error){
      console.error(error);
    }

    document.getElementById("nombreRuta").value = "";
  });

document.addEventListener("click", async function (event) {
  if (event.target.classList.contains("btn-eliminar-ruta")) {
    const RutaId = event.target.getAttribute("data-id");
    Swal.fire({
      title: "Estas seguro de borrar la ruta?",
      text: "No podràs deshacerlo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borralo!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado!", "La ruta ha sido eliminada.", "success");
        setTimeout(() => {
          eliminarRuta(RutaId);
        }, 900);
      }
    });
  }
});

document.addEventListener("click", async function (event) {
  if (event.target.classList.contains("btn-editar-ruta")) {
    const rutaId = event.target.getAttribute("data-id");

    try {
      const response = await fetch(`${URL}/Rutas/${rutaId}`);
      const ruta = await response.json();

      const formularioModificar = document.getElementById(
        "formularioModificar"
      );
      formularioModificar.setAttribute("data-id", rutaId);
      document.getElementById("nombreModificar").value = ruta.NomRuta;

      const modalModificar = new bootstrap.Modal(
        document.getElementById("modalModificar")
      );
      modalModificar.show();
    } catch (error) {
      console.error("Error al obtener el ruta:", error);
    }
  }
});

document
  .getElementById("formularioModificar")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const productoId = event.target.getAttribute("data-id");
    const nombre = document.getElementById("nombreModificar").value;

    const datosProducto = {
      NomRuta: nombre,
    };

    await modificarRuta(productoId, datosProducto);
    getRutas();

    const modalModificar = new bootstrap.Modal(
      document.getElementById("modalModificar")
    );
    modalModificar.hide();
  });

const selectRuta = document.getElementById("selectRuta");

async function cargarRutas() {
  try {
    const rutas = await getRutas();

    rutas.forEach((ruta) => {
       const option = `
 <option value="${ruta.id}" data-id="${ruta.id}">${ruta.NomRuta}</option>
       `
     selectRuta.innerHTML += option
    });

    selectRuta.addEventListener("change", async (event) => {
      let rutaId = event.target.value;
      console.log(rutaId);
      await mostrarPuntos(rutaId);
    });
  } catch (error) {
    console.error("Error al obtener las rutas:", error);
  }
}

cargarRutas();

document
  .getElementById("formPunto")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
  
    const NomPuntos = document.getElementById("nombrePunto").value;
    const RutaId = selectRuta.value;
  
    const nuevoPunto = {
      NomPuntos,
      RutaId,
      Imagen : 'https://cdn-icons-png.flaticon.com/512/854/854929.png'
    };
  
    try {
      await agregarPunto(nuevoPunto);
      console.log("El punto ha sido agregado exitosamente.");
    } catch (error) {
      console.error("Error al agregar el punto:", error);
    }
  });

  document.addEventListener("click", async function (event) {
    if (event.target.classList.contains("btn-eliminar-punto")) {
      const PuntoId = event.target.getAttribute("data-id");
      Swal.fire({
        title: "Estas seguro de borrar el Punto?",
        text: "No podràs deshacerlo!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Borralo!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Eliminado!", "El Punto ha sido eliminado.", "success");
          setTimeout(() => {
            eliminarPunto(PuntoId);
          }, 900);
        }
      });
    }
  });

  document.addEventListener("click", async function (event) {
    if (event.target.classList.contains("btn-editar-punto")) {
      const PuntoId = event.target.getAttribute("data-id");
  
      try {
        const response = await fetch(`${URL}/Puntos/${PuntoId}`);
        const Punto = await response.json();
  
        const formularioModificar = document.getElementById(
          "formularioModificarPunto"
        );
        formularioModificar.setAttribute("data-id", PuntoId);
        document.getElementById("nombreModificarPunto").value = Punto.NomPuntos;
  
        const modalModificar = new bootstrap.Modal(
          document.getElementById("modalModificarPunto")
        );
        modalModificar.show();
      } catch (error) {
        console.error("Error al obtener el Punto:", error);
      }
    }
  });

  document
  .getElementById("formularioModificarPunto")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const PuntoId = event.target.getAttribute("data-id");
    const nombre = document.getElementById("nombreModificarPunto").value;

    const datosPunto = {
      NomPuntos: nombre
    };

    await modificarPunto(PuntoId, datosPunto);

    const modalModificar = new bootstrap.Modal(
      document.getElementById("modalModificarPunto")
    );
    modalModificar.hide();
  });

  
  
  
  
