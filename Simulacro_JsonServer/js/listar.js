import { getPuntosPorRuta } from "./peticiones.js";

export function listarRutas (rutas){
    const tablaRutas = document.querySelector('#tablaRutas');
    tablaRutas.innerHTML = ""
    rutas.forEach(ruta => {
        let tr = `<tr>
        <td>${ruta.id}</td>
        <td>${ruta.NomRuta}</td>
        <td>
<i  data-id="${ruta.id}" class='bx bx-trash btn-eliminar-ruta btn btn-danger btn-sm'></i>
        </td>
        <td>
     <i data-id="${ruta.id}" class='bx bx-pencil btn btn-warning btn-sm btn-editar-ruta'></i>
        </td>
      </tr>`;
  
      tablaRutas.innerHTML += tr;
    })
}

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
        <i class='bx bx-trash btn-eliminar-punto btn btn-danger btn-sm' data-id="${punto.id}" ></i>
        </td>
        <td>
<i data-id="${punto.id}"  class='bx bx-pencil btn btn-warning btn-sm btn-editar-punto'></i>
        </td>
        </tr>
        `;
        listaPuntos.innerHTML += tr
    });
  } catch (error) {
    console.error("Error al obtener los puntos:", error);
  }
}


export function listarRutasHome (rutas){
  const div = document.querySelector('.insights');
  div.innerHTML = ""
  rutas.forEach(ruta => {
      let li= ` <li>
      <i class='bx bx-map-alt'></i>
      <span class="info">
          <h3>
              Ruta: ${ruta.id}
          </h3>
          <p>${ruta.NomRuta}</p>
      </span>
  </li>`;

    div.innerHTML += li;
  })
}
