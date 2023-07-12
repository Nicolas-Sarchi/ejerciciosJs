export default function listarProductos (data){
    const tablaProductos = document.querySelector('tbody');
    tablaProductos.innerHTML = '';

    data.forEach(producto =>{
        let tr = `<tr>
        <td>${producto.id}</td>
        <td>${producto.name}</td>
        <td>${producto.price}</td>
        <td>${producto.description}</td>
        <td>
            <input type="submit" data-accion="Eliminar" value="Eliminar" class="btn-guardar bg-danger border-0 rounded bg-secondary px-2">
            <input type="button" data-bs-toggle="modal" data-bs-target="#modalModificar"  data-accion="Actualizar" value="Actualizar" class="btn-guardar bg-warning border-0 rounded bg-secondary px-2">
        </td>
        </tr>
        `;

        tablaProductos.innerHTML += tr
    })
}