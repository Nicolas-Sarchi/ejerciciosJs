import { getProductos, agregarProducto, eliminarProducto, editarProducto, URL} from "./peticiones.js";

getProductos()

document.getElementById("formularioProducto").addEventListener("submit", agregarProducto);


document.addEventListener("click", async function (event) {
    if (event.target.classList.contains("btn-eliminar")) {
      const productoId = event.target.getAttribute("data-id");
  
      await eliminarProducto(productoId);
      getProductos();
    }
  });

 
  document.addEventListener("click", async function (event) {
    if (event.target.classList.contains("btn-editar")) {
      const productoId = event.target.getAttribute("data-id");
  
      try {
        const response = await fetch(`${URL}/productos/${productoId}`);
        const producto = await response.json();
  
        const formularioModificar = document.getElementById("formularioModificar");
        formularioModificar.setAttribute("data-id", productoId);
        document.getElementById("nombreModificar").value = producto.name;
        document.getElementById("precioModificar").value = producto.price;
        document.getElementById("descripcionModificar").value = producto.description;
        document.getElementById("categoriaModificar").value = producto.categoriaId;
  
        const modalModificar = new bootstrap.Modal(document.getElementById("modalModificar"));
        modalModificar.show();
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    }
  });
  
  document.getElementById("formularioModificar").addEventListener("submit", async function (event) {
    event.preventDefault();
  
    const productoId = event.target.getAttribute("data-id");
    const nombre = document.getElementById("nombreModificar").value;
    const precio = document.getElementById("precioModificar").value;
    const descripcion = document.getElementById("descripcionModificar").value;
    const categoriaId = document.getElementById("categoriaModificar").value;
  
    const datosProducto = {
      name: nombre,
      price: parseFloat(precio),
      description: descripcion,
      categoriaId: parseInt(categoriaId),
    };
  
    await editarProducto(productoId, datosProducto);
    getProductos();
  
    const modalModificar = new bootstrap.Modal(document.getElementById("modalModificar"));
    modalModificar.hide();
  });


