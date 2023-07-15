import { getPuntosPorRuta } from "./peticiones.js";

export function listarRutas (rutas){
    const tablaRutas = document.querySelector('#tablaRutas');
    tablaRutas.innerHTML = ""
    rutas.forEach(ruta => {
        let tr = `<tr>
        <td>${ruta.id}</td>
        <td>${ruta.NomRuta}</td>
        <td>
          <button type="button" data-id="${ruta.id}" class="btn-eliminar-ruta btn btn-danger btn-sm">Eliminar</button>
        </td>
        <td>
        <button type="button" data-id="${ruta.id}" class="btn-editar-ruta btn btn-warning btn-sm">Editar</button>
        </td>
      </tr>`;
  
      tablaRutas.innerHTML += tr;
    })
}
const listaPuntos = document.getElementById("listaPuntos");

export async function mostrarPuntos(rutaId) {
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
          <td>
          <button type="button" data-id="${punto.id}" class="btn-eliminar-punto btn btn-danger btn-sm">Eliminar</button>
        </td>
        <td>
        <button type="button" data-id="${punto.id}" class="btn-editar-punto btn btn-warning btn-sm">Editar</button>
        </td>
        </tr>
        `;
        listaPuntos.innerHTML += tr
    });
  } catch (error) {
    console.error("Error al obtener los puntos:", error);
  }
}