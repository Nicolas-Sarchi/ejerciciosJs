import  listarProductos  from "./listar.js";

const URL = "http://localhost:3000";

export async function getProductos (){
    let response = await fetch (`${URL}/productos`)
    let data = await response.json()
    listarProductos(data)
}