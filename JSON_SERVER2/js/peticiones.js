export const URL = 'http://localhost:3000';
export async function getCategorias (){
    try{
        const response = await fetch(`${URL}/categorias`);
        const categorias = await response.json();
        console.log(categorias);

        return categorias;
    } catch (error){
        console.error(error);
    }
}

export async function agregarCategoria (datosCategoria){
    try{
        await fetch(`${URL}/categorias`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosCategoria)
        })
    } catch (error){
        console.error(error);
    }
}

export async function eliminarCategoria (categoriaID){
    try{
        await fetch(`${URL}/categorias/${categoriaID}`, {
            method: 'DELETE'
        })
    } catch (error){
        console.error(error);
    }
}

export async function modificarCategoria (datosCategoria, categoriaID){
    try {
        await fetch(`${URL}/categorias/${categoriaID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosCategoria)
        })
    } catch(error){
        console.error(error);
    }
}