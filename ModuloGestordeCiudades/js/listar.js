import { getCiudadesPorDepartamento } from "./peticiones.js";

export function listarDepartamentos (departamentos){
    const depContainer = document.getElementById('tablaDepartamentos');
    depContainer.innerHTML = '';

    departamentos.forEach(departamento => {
        let tr = `
        <tr>
            <td>${departamento.id}</td>
            <td>${departamento.nomDepartamento}</td>
            <td>
        <i class='bx bx-trash btn-eliminar-depto' data-id = "${departamento.id}"></i>
            </td>
            <td>
        <i class='bx bx-edit btn-editar-depto' data-bs-toggle="modal" data-bs-target="#modalModificarDepartamento" data-id = "${departamento.id}"></i>
            </td>

        </tr>
        
        `
        depContainer.innerHTML += tr
    });

}


export async function mostrarCiudades (departamentoId){
    try{
        const listaCiudades = document.getElementById('listaCiudades');
        listaCiudades.innerHTML ='';

        const ciudades = await getCiudadesPorDepartamento(departamentoId);

        ciudades.forEach(ciudad => {
            let tr = `
            <tr>
            <td>${ciudad.id}</td>
            <td>${ciudad.nomCiudad}</td>
            <td>${ciudad.coordenadas.lat}</td>
            <td>${ciudad.coordenadas.lon}</td>


            <td>
        <i class='bx bx-trash btn-eliminar-ciudad' data-id = "${ciudad.id}"></i>
            </td>
            <td>
        <i class='bx bx-edit btn-editar-ciudad' data-bs-toggle="modal" data-bs-target="#modalModificarCiudad" data-id ="${ciudad.id}"></i>
            </td>

        </tr>
            `
            listaCiudades.innerHTML += tr
        })

    } catch(error){
        console.error(error);
    }
}

export function mostrarDatosClima(datos){
    const contenedor = document.getElementById('contenedor')
    let li =
    `
    <li>
    <div class="card border border-0 shadow-lg p-3 mb-5 text-white bg-primary rounded color-white col-6 mx-auto mt-3" style="width: 18rem;" >
  
    <div class="card-body text-center">
  
    <h5 class="card-title fs-3">${datos.name}</h5>
    <p class = "fs-5 mt-3 ">${datos.main.temp.toFixed(0)}ºC</p>
    <p class = "fs-5 ">${datos.sys.country}</p>
    <p class = "fs-5 ">${datos.weather[0].main}</p>
    <p class = "fs-5 ">
    <i class="fa-solid fa-wind "></i>
    ${datos.wind.speed} m/s
    </p>
    <p class = "fs-5 ">  💧${datos.main.humidity} %
    </p>
    
    </div>
    </div>
    </li>
    `
    contenedor.innerHTML += li
}