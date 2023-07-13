export function listarRutas (rutas){
    const tablaRutas = document.querySelector('#tablaRutas');
    tablaRutas.innerHTML = ""
    rutas.forEach(ruta => {
        let tr = `<tr>
        <td>${ruta.id}</td>
        <td>${ruta.NomRuta}</td>
        <td>
          <button type="button" data-id="${ruta.id}" class="btn-eliminar btn btn-danger btn-sm">Eliminar</button>
        </td>
        <td>
        <button type="button" data-id="${ruta.id}" class="btn-editar btn btn-warning btn-sm">Editar</button>
        </td>
      </tr>`;
  
      tablaRutas.innerHTML += tr;
    })
}