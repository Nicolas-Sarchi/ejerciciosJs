export default function listarProductos(data) {
    const tablaProductos = document.querySelector("tbody");
    tablaProductos.innerHTML = "";
  
    data.forEach((producto) => {
      let tr = `<tr>
        <td>${producto.id}</td>
        <td>${producto.name}</td>
        <td>${producto.price}</td>
        <td>${producto.description}</td>
        <td>${producto.categoria}</td>
        <td>
          <button type="button" data-id="${producto.id}" class="btn-eliminar btn btn-danger btn-sm">Eliminar</button>
        </td>
        <td>
        <button type="button" data-id="${producto.id}" class="btn-editar btn btn-warning btn-sm">Editar</button>
        </td>
      </tr>`;
  
      tablaProductos.innerHTML += tr;
  
      const botonEliminar = tablaProductos.querySelector(`[data-id="${producto.id}"]`);
      botonEliminar.addEventListener("click", function () {
        eliminarProducto(producto.id);
      });
    });
  }
  