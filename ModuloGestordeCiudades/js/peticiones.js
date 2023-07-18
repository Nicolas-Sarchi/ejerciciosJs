import { mostrarDatosClima } from "./listar.js";
export const URL = "http://localhost:3000";

export async function getDepartamentos (){
    try{
        const response = await fetch(`${URL}/Departamentos`);
        const departamentos = await response.json();
        return departamentos;
    } catch (error){
        console.error(error);
    }
}

export async function agregarDepartamento (datosDepto){
    try{
        await fetch(`${URL}/Departamentos`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(datosDepto),
        })
    } catch (error){
        console.error(error);
    }
}

export async function eliminarDepartamento (deptoID){
    try{
        await fetch(`${URL}/Departamentos/${deptoID}`,{
            method:'DELETE'
        });

    } catch(error){
        console.error(error);
    }
}

export async function modificarDepartamento (datosDepto, deptoID){
    try{
        await fetch(`${URL}/Departamentos/${deptoID}`, {
            method: 'PATCH',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datosDepto)
        })
    } catch (error){
        console.error(error);
    }
}

export async function getCiudadesPorDepartamento (deptoID){
    try{
        const response = await fetch(`${URL}/Ciudades?DepartamentoId=${deptoID}`)
        const ciudades = await response.json()
        return ciudades

    } catch(error){
        console.error(error);
    }
}

export async function getCiudades (){
    try{
        const response = await fetch(`${URL}/Ciudades`)
        const ciudades = await response.json()
        return ciudades

    } catch (error){
        console.error(error);
    }
}

export async function agregarCiudad (datosCiudad){
    try{
        await fetch(`${URL}/Ciudades`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(datosCiudad),
        })
    } catch (error){
        console.error(error);
    }

}

export async function eliminarCiudad(ciudadID){

    try {
        await fetch(`${URL}/Ciudades/${ciudadID}`, {
          method: "DELETE",
          });
    
} catch(error){
    console.error(error);
}
}

export async function editarCiudad (datosCiudad, ciudadId){
    try{
        await fetch (`${URL}/Ciudades/${ciudadId}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(datosCiudad)
        })
    } catch (error){
        console.error(error);
    }
}

export async function fetchDatosClima (ciudad){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=2fecb748b5b060c588450f540e21822c`
        );
        const data = await response.json()
        if (data.cod === '404') {
            var container = document.getElementById('contenedor')
            container.innerHTML += "<div class='alert alert-danger text-center' role='alert'>No se pudo encontrar la ciudad. Por favor, intenta con otra ciudad.</div>";
            return;
        }
        console.log(data);
        mostrarDatosClima(data)
    }
    catch (error){
        console.error(error)
    }
}