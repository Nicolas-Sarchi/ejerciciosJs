import listarProductos from "./listar.js";

export const URL = "http://localhost:3000";

export async function getProductos() {
  let responseProductos = await fetch(`${URL}/productos`);
  let dataProductos = await responseProductos.json();

  let responseCategorias = await fetch(`${URL}/categorias`);
  let categorias = await responseCategorias.json();

  dataProductos.forEach((producto) => {
    const categoria = categorias.find((cat) => cat.id === producto.categoriaId);
    producto.categoria = categoria ? categoria.name : "";
  });

  listarProductos(dataProductos);
}

export async function agregarProducto (event) {
  event.preventDefault(); 
  
  const nombre = document.getElementById("nombreProducto").value;
  const precio = document.getElementById("precioProducto").value;
  const descripcion = document.getElementById("descripcionProducto").value;
  const categoriaId = document.getElementById("categoriaProducto").value;

  const nuevoProducto = {
    name: nombre,
    price: parseFloat(precio),
    description: descripcion,
    categoriaId: parseInt(categoriaId),
  };

  try {
    await fetch(`${URL}/productos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoProducto),
    });

    getProductos();

    document.getElementById("nombreProducto").value = "";
    document.getElementById("precioProducto").value = "";
    document.getElementById("descripcionProducto").value = "";
    document.getElementById("categoriaProducto").selectedIndex = 0;
  } catch (error) {
    console.error("Error al agregar el producto:", error);
  }
};

export async function eliminarProducto(productoId) {
    try {
      await fetch(`${URL}/productos/${productoId}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  }

export async function editarProducto(productoId, datosProducto) {
  try {
    await fetch(`${URL}/productos/${productoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosProducto),
    });
  } catch (error) {
    console.error("Error al editar el producto:", error);
  }
}
