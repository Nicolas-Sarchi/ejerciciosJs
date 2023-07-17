import { getCategorias, agregarCategoria, eliminarCategoria,modificarCategoria, URL} from "./peticiones.js";
import { listarCategorias } from "./listar.js";

const categorias = await getCategorias();
listarCategorias(categorias);

document.getElementById('formAgregarCategoria').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const datosCategoria = {
        nombre: document.getElementById('nombreCategoria').value
    }
    agregarCategoria(datosCategoria);
});

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-eliminar-categoria')) {
        const categoriaID = event.target.dataset.id;
        eliminarCategoria(categoriaID);
    }
})

document.addEventListener('click', async (event) => {
    if(event.target.classList.contains('btn-editar-categoria')){
        const categoriaID = event.target.dataset.id;
        try{
            const response = await fetch(`${URL}/categorias/${categoriaID}`);
            const categoria = await response.json();
            const formularioModificar = document.getElementById("formModificarCategoria");

            formularioModificar.setAttribute("data-id", categoriaID);
            document.getElementById("nombreCategoriaModificar").value = categoria.nombre;
        } catch (error){
            console.error(error);
        }
    }
})

document.getElementById('formModificarCategoria').addEventListener('submit', async (event) => {
    event.preventDefault();
    const categoriaID = event.target.dataset.id
    console.log(categoriaID);
    const datosCategoria = {
        nombre: document.getElementById('nombreCategoriaModificar').value
    }
    modificarCategoria(datosCategoria,categoriaID);
})