import {
  getRutas,
  agregarRuta,
  eliminarRuta,
  URL,
  modificarRuta,
  getPuntosPorRuta,
  agregarPunto
} from "./peticiones.js";
import { listarRutas } from "./listar.js";

let rutas = await getRutas();
listarRutas(rutas);

document
  .getElementById("formRuta")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const NomRuta = document.getElementById("nombreRuta").value;

    let nuevaRuta = {
      NomRuta,
    };

    agregarRuta(nuevaRuta);

    getRutas();

    document.getElementById("nombreRuta").value = "";
  });

document.addEventListener("click", async function (event) {
  if (event.target.classList.contains("btn-eliminar")) {
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
  if (event.target.classList.contains("btn-editar")) {
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
const listaPuntos = document.getElementById("listaPuntos");


async function mostrarPuntos(rutaId) {
  listaPuntos.innerHTML = "";

  try {
    const puntos = await getPuntosPorRuta(rutaId);

    puntos.forEach((punto) => {
      let tr = `
        <tr>
          <td>
          <img src="${punto.Imagen}" style="width: 60px;"alt="">
          </td>
          <td>${punto.id}</td>
          <td>${punto.NomPuntos}</td>
        </tr>
        `;
        listaPuntos.innerHTML += tr
    });
  } catch (error) {
    console.error("Error al obtener los puntos:", error);
  }
}

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
  .addEventListener("submit", async function () {
    selectRuta.addEventListener("change", async (event) => {
      let rutaId = event.target.value;
      console.log(rutaId);
      
    const NomPuntos = document.getElementById("nombrePunto").value;

    let nuevaPunto = {
      NomPuntos,
      Imagen : 'https://cdn-icons-png.flaticon.com/512/854/854929.png',
     RutaId : rutaId
      
    };

    await agregarPunto(nuevaPunto);

    cargarRutas()

    document.getElementById("nombrePunto").value = "";
  });
  });
