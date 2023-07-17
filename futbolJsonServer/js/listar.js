export function listarEquipos (equipos){
    const container = document.getElementById("equiposContainer");
    container.innerHTML = '';
    equipos.forEach(equipo => {
        let li =  `
        <li >
            <i class='bx bx-football' data-id='${equipo.id}'></i>
            
            <span class="info">
            
            <i class='bx bx-edit btn-editar-equipo btn btn-sm' data-id='${equipo.id}'></i>
            <i class='bx bx-trash btn-eliminar-equipo btn  btn-sm' data-id='${equipo.id}'></i>
                <h3>

                ${equipo.nombre}
                </h3>
                <p>${equipo.ciudad}</p>
            </span>
        </li>
        `
        container.innerHTML += li;
    });
}

export function listarJugadores (jugadores){
    const tablaJugadores = document.getElementById("tablaJugadores");
    tablaJugadores.innerHTML = '';

    jugadores.forEach(jugador => {
        let tr = `
        <tr>
        <td>${jugador.nombre}</td>
        <td>${jugador.posicion}</td>

        <td>
      <i class='bx bx-trash btn-eliminar-jugador btn btn-danger btn-sm' data-id="${jugador.id}" ></i>
      </td>
      <td>
<i data-id="${jugador.id}" data-bs-target="#modalModificarJugador" data-bs-toggle="modal" class='bx bx-edit btn btn-warning btn-sm btn-editar-jugador'></i>
      </td>
      </tr>
        `
        tablaJugadores.innerHTML += tr;
    })

}