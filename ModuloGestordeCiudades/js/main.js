import { getDepartamentos, agregarDepartamento, eliminarDepartamento, URL, modificarDepartamento, agregarCiudad, eliminarCiudad, editarCiudad,fetchDatosClima, getCiudades} from "./peticiones.js";
import { listarDepartamentos, mostrarCiudades } from "./listar.js";

const departamentos = await getDepartamentos();
listarDepartamentos(departamentos)

const ciudades = await getCiudades()

ciudades.forEach(ciudad =>{
    fetchDatosClima(ciudad.nomCiudad)
})


document.getElementById('formDepartamento').addEventListener('submit', (e)=>{
    e.preventDefault()
    const nomDepartamento = document.getElementById('nombreDepartamento').value;

    const datosDepto = {
        nomDepartamento
    }
    agregarDepartamento(datosDepto);

    document.getElementById('nombreDepartamento').value = ""
})

document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('btn-eliminar-depto')){
        const deptoId = e.target.dataset.id;
        console.log(deptoId);
        eliminarDepartamento(deptoId)
    }
})

document.addEventListener('click', async (e)=>{
    if (e.target.classList.contains('btn-editar-depto')){
        const deptoId = e.target.dataset.id;

        try{
            const response = await fetch(`${URL}/Departamentos/${deptoId}`);
            const departamento = await response.json();

            const formModificarDepto = document.getElementById('formModificarDepto');
            formModificarDepto.setAttribute("data-id", deptoId);
            document.getElementById('nombreDeptoModificar').value = departamento.nomDepartamento
        } catch (error){
            console.error(error);
        }
    }
})

document.getElementById('formModificarDepto').addEventListener("submit", (e)=>{
    e.preventDefault()
    const deptoID = e.target.dataset.id;
    console.log(deptoID);
    const nomDepartamento = document.getElementById('nombreDeptoModificar').value

    const datosDeptoActualizados = {
        nomDepartamento
    }
    modificarDepartamento(datosDeptoActualizados, deptoID)

})
const select = document.getElementById('selectDepartamento');

async function cargarDeptos (){
    try {
        const deptos = await getDepartamentos()

        deptos.forEach(depto => {
            let option = `
       <option value = "${depto.id}" data-id="${depto.id}">${depto.nomDepartamento}</option>
            `
            select.innerHTML += option
        });
        select.addEventListener("change", async (e) =>{
            const deptoId = e.target.value;
            console.log(select.value);
            mostrarCiudades(deptoId)
        })
    } catch (error){
        console.error(error);
    }
}
cargarDeptos()


document.getElementById('formCiudad').addEventListener("submit", async (e)=>{
    e.preventDefault()
    const deptoId = select.value
    const nomCiudad = document.getElementById('nombreCiudad').value,
    lat = document.getElementById('latCiudad').value,
    lon = document.getElementById('longCiudad').value;

    const datosCiudad = {
        nomCiudad,
        DepartamentoId: deptoId,
        imagen : "https://cdn-icons-png.flaticon.com/128/2942/2942149.png",
        coordenadas:{
            lat,
            lon
        }
    }
     await agregarCiudad(datosCiudad)

     document.getElementById('nombreCiudad').value = ""
     document.getElementById('latCiudad').value = ""
     document.getElementById('longCiudad').value = ""

    
})

document.addEventListener("click", (e) => {
    if (e.target.classList.contains('btn-eliminar-ciudad')){
        const ciudadId = e.target.dataset.id;
        eliminarCiudad(ciudadId)
    }
})

document.addEventListener('click', async (e) =>{
    if (e.target.classList.contains('btn-editar-ciudad')){
        const CiudadId = e.target.dataset.id;
        try{
            const response = await fetch(`${URL}/Ciudades/${CiudadId}`);
            const ciudad = await response.json();

            const formModificarCiudad = document.getElementById('formModificarCiudad');
            formModificarCiudad.setAttribute("data-id", CiudadId);
            document.getElementById('nombreModificarCiudad').value = ciudad.nomCiudad
            document.getElementById('latModificarCiudad').value = ciudad.coordenadas.lat
            document.getElementById('lonModificarCiudad').value = ciudad.coordenadas.lon
        } catch (error){
            console.error(error);
        }
    }
})

document.getElementById('formModificarCiudad').addEventListener("submit", async (e)=>{
    e.preventDefault()
    const ciudadId = e.target.dataset.id
    console.log(ciudadId);
    const nomCiudad = document.getElementById('nombreModificarCiudad').value,
    lat = document.getElementById('latModificarCiudad').value,
    lon = document.getElementById('lonModificarCiudad').value;

    const datosCiudad = {
        nomCiudad,
         coordenadas:{
            lat,
            lon
        }
    }
     await editarCiudad(datosCiudad, ciudadId)
})