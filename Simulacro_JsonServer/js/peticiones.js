
export const URL = 'http://localhost:3000'


export async function getRutas(){
    try{
        const response = await fetch(`${URL}/Rutas`)
        const rutas = await response.json()

        return rutas;

    } catch(error){
        console.error(error);
    }


}

export async function agregarRuta (datos){

    try {
        await fetch(`${URL}/Rutas`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datos),
        });
    
} catch(error){
    console.error(error);
}
}

export async function eliminarRuta(rutaId) {
    try {
      await fetch(`${URL}/Rutas/${rutaId}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error al eliminar el Ruta:", error);
    }
  }


export async function modificarRuta (rutaId, datosRuta){
    try{
        await fetch(`${URL}/Rutas/${rutaId}`, {
            method: "PUT",
            headers : {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(datosRuta)
        })

        } catch (error){
             console.error(error);
        }
    }

    export async function getPuntosPorRuta(rutaId) {
      try {
        const response = await fetch(`${URL}/Puntos?RutaId=${rutaId}`);
        const puntos = await response.json();
        return puntos;
      } catch (error) {
        console.error("Error al obtener los puntos:", error);
        throw error;
      }
    }    