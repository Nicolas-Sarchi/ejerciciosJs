
export const URL = "http://localhost:3001";

export async function getEquipos (){
    try{
        const response = await fetch(`${URL}/equipos`)
        const equipos = await response.json()
        return equipos;
    } catch(error){
        console.error(error);
    }
}

export async function agregarEquipo (datosEquipo){
    try{
        const response = await fetch(`${URL}/equipos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(datosEquipo)
            
        })
    } catch (error){
        console.error(error);
    }
}

export async function eliminarEquipo (equipoId){
    try{
        const response = await fetch(`${URL}/equipos/${equipoId}`, {
            method: 'DELETE'
        })
    } catch (error){
        console.error(error);
    }
}

export async function modificarEquipo (equipoId, datosEquipo){
    try{
        const response = await fetch(`${URL}/equipos/${equipoId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(datosEquipo)
            
        })
    } catch (error){
        console.error(error);
    }
}   

export async function getJugadoresPorEquipo(equipoId){
    try {
        const response = await fetch(`${URL}/jugadores?equipoId=${equipoId}`);
        const jugadores = await response.json();
        return jugadores;

    } catch (error) {
        console.error("Error al obtener los jugadores:", error);
    }
}

export async function agregarJugador (datosJugador){
    try{
        const response = await fetch(`${URL}/jugadores`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(datosJugador)
            
        })
    } catch (error){
        console.error(error);
    }
}

export async function eliminarJugador (jugadorId){
    try {
        const response = await fetch(`${URL}/jugadores/${jugadorId}`, {
            method: 'DELETE'
        })
    } catch (error){
        console.error(error);
    }
}

export async function modificarJugador(jugadorId, datosJugador) {

    try {
        const response = await fetch(`${URL}/jugadores/${jugadorId}`)
        const jugadorExistente = await response.json();

        const datosActualizados = {
          ...jugadorExistente,
          ...datosJugador,
        }

      await fetch(`${URL}/jugadores/${jugadorId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosActualizados) 
      });
      const jugador = await response.json();
      return jugador;
    } catch (error) {
      console.error("Error al modificar el jugador:", error);
    }
  }

  