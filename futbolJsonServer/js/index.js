import { getEquipos, agregarEquipo,eliminarEquipo, modificarEquipo, URL, getJugadoresPorEquipo, agregarJugador, eliminarJugador, modificarJugador } from "./peticiones.js";
import { listarEquipos, listarJugadores } from "./listar.js";

const equipos = await getEquipos();

listarEquipos(equipos);

document.getElementById("formEquipo").addEventListener("submit", async (e) => {
    e.preventDefault();
    const datosEquipo = {
        nombre: document.getElementById("nombreEquipo").value,
        ciudad: document.getElementById("ciudadEquipo").value,
        escudo: "https://th.bing.com/th/id/R.23b21d6dcf8544d62dad0e593ebae968?rik=mAUS9NNMIuM7Sg&riu=http%3a%2f%2fa.espncdn.com%2fi%2fteamlogos%2fsoccer%2f500%2fdefault-team-logo-500.png&ehk=4ZnNJZmwTUjmHtEMe5EhkZ7N7IYl6y%2fWwXo71drACA8%3d&risl=&pid=ImgRaw&r=0"
    }
    await agregarEquipo(datosEquipo);
})

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-eliminar-equipo")) {
        const equipoId = e.target.dataset.id;
        eliminarEquipo(equipoId);
    }
})

document.addEventListener("click", async (e) => {
  if (e.target.classList.contains("btn-editar-equipo")) {
        const equipoId = e.target.getAttribute("data-id");

        try {
        const response = await fetch(`${URL}/equipos/${equipoId}`);
        const equipo = await response.json();

        const formularioModificar = document.getElementById(
            "formModificarEquipo"
        );
        formularioModificar.setAttribute("data-id", equipoId);
        document.getElementById("nombreEquipoModificar").value = equipo.nombre;
        document.getElementById("ciudadEquipoModificar").value = equipo.ciudad;

        const modalModificar = new bootstrap.Modal(
            document.getElementById("modalModificarEquipo")
        );
        modalModificar.show();
        } catch (error) {
        console.error("Error al obtener el equipo:", error);
        }
    }
});

document.getElementById("formModificarEquipo").addEventListener("submit", async (e) => {
    e.preventDefault();
    const equipoId = e.target.getAttribute("data-id");
    const nombre = document.getElementById("nombreEquipoModificar").value;
    const ciudad = document.getElementById("ciudadEquipoModificar").value;

    const datosEquipo = {
        nombre,
        ciudad
    }

    modificarEquipo(equipoId, datosEquipo);

})


document.addEventListener("click", async (e) => {
    if (e.target.classList.contains("bx-football")) {
        const botonAdd = document.getElementById("btnAgregarJugador");
        botonAdd.setAttribute("data-id", e.target.dataset.id);        
        const equipoId = e.target.dataset.id;
        const jugadores = await getJugadoresPorEquipo(equipoId);
        listarJugadores(jugadores);
        const modalJugadores = new bootstrap.Modal(document.getElementById("modalJugadoresEquipo"));
            modalJugadores.show();
    }
})

document.getElementById("formJugador").addEventListener("submit", async (e) => {
    e.preventDefault();
    const equipoId = document.getElementById("btnAgregarJugador").getAttribute("data-id");
    console.log(equipoId);
    const nombre = document.getElementById("nombreJugador").value;
    const posicion = document.getElementById("posicionJugador").value;

    const datosJugador = {
        nombre,
        posicion,
        equipoId
    }
    agregarJugador(datosJugador);
})

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-eliminar-jugador")) {
        const jugadorId = e.target.dataset.id;
        eliminarJugador(jugadorId);
    }
})

document.addEventListener("click", async (e) => {
    if (e.target.classList.contains("bx-edit")) {
      const jugadorId = e.target.dataset.id;
  
      try {
        const response = await fetch(`${URL}/jugadores/${jugadorId}`);
        const jugador = await response.json();
  
        // Cargar los datos del jugador en el formulario de edición
        document.getElementById("nombreJugadorModificar").value = jugador.nombre;
        document.getElementById("posicionJugadorModificar").value = jugador.posicion;
        document.getElementById("formModificarJugador").setAttribute("data-id", jugadorId);

      } catch (error) {
        console.error("Error al obtener los datos del jugador:", error);
      }
    }
  });
  

document.getElementById("formModificarJugador").addEventListener("submit", async (e) => {
    e.preventDefault();
      const jugadorId = e.target.dataset.id;
  
      // Obtener los datos del jugador del formulario de edición
      const nombreJugador = document.getElementById("nombreJugadorModificar").value;
      const posicionJugador = document.getElementById("posicionJugadorModificar").value;
  
      const datosJugador = {
        nombre: nombreJugador,
        posicion: posicionJugador,
      };
  
      try {
        const jugadorModificado = await modificarJugador(jugadorId, datosJugador);
        console.log("Jugador modificado:", jugadorModificado);
  
      } catch (error) {
        console.error("Error al modificar el jugador:", error);
      }
    
  });
  