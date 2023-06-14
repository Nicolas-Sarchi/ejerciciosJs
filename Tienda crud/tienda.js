const productos = [];
contadorId = 1;

const formAddProducto = document.getElementById("agregarProductos-form");
const tablaProductos = document.getElementById("productTable");

function addProducto(event){
    event.preventDefault();
    const nombreProducto = document.getElementById("productName").value,
    precioProducto = document.getElementById("productPrice").value,
    descripcionProducto = document.getElementById("productDescription").value,
    stockProducto = document.getElementById("productStock").value,
    categoria  = document.getElementById("productCategory").value;
    const id = contadorId;

   const producto = {
        id,
        nombreProducto,
        precioProducto,
        descripcionProducto,
        stockProducto,
        categoria
    }

   
    productos.push(producto);

    formAddProducto.reset();
    mostrarProductos();
    actualizarSelectProductos();
    contadorId++;
}

function mostrarProductos(productosAMostrar = productos){
    tablaProductos.innerHTML = "";
    
    productosAMostrar.forEach((producto) => {
        const nuevaFila = document.createElement("tr");
    nuevaFila.innerHTML = `
    <td>${producto.nombreProducto}</td>
    <td>${producto.precioProducto}</td>
    <td>${producto.descripcionProducto}</td>
    <td>${producto.stockProducto}</td>
    <td>${producto.categoria}</td>
    <td><button class="btn btn-danger" onclick="borrarProducto(${producto.id})"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
    <td><button class="btn btn-warning btn-editar" data-id="${producto.id}""><i class="fa fa-pencil" aria-hidden="true"></i></button></td>
    `
   
    const btnEditar = nuevaFila.querySelector(".btn-editar");
    btnEditar.addEventListener("click", () => editarProducto(producto.id));

    tablaProductos.appendChild(nuevaFila);
        
    })
}

formAddProducto.addEventListener("submit", addProducto)



function editarProducto(productoId) {
  const producto = productos.find((p) => p.id === productoId);

  if (producto) {
    document.getElementById("productName").value = producto.nombreProducto;
    document.getElementById("productPrice").value = producto.precioProducto;
    document.getElementById("productDescription").value = producto.descripcionProducto;
    document.getElementById("productStock").value = producto.stockProducto;
    document.getElementById("productCategory").value = producto.categoria;

    formAddProducto.removeEventListener("submit", addProducto);
    formAddProducto.addEventListener("submit", (event) => {
      event.preventDefault();
      actualizarProducto(productoId);
      mostrarProductos()
      
    });
  }
}

function actualizarProducto(productoId) {
    const index = productos.findIndex((producto) => producto.id === productoId);
  
    if (index !== -1) {
      productos[index].nombreProducto = document.getElementById("productName").value;
      productos[index].precioProducto = document.getElementById("productPrice").value;
      productos[index].descripcionProducto = document.getElementById("productDescription").value;
      productos[index].stockProducto = document.getElementById("productStock").value;
      productos[index].categoria = document.getElementById("productCategory").value;
  
      formAddProducto.reset();
      mostrarProductos();
  
      formAddProducto.removeEventListener("submit", (event) => actualizarProducto(productoId));
      formAddProducto.addEventListener("submit", addProducto);
      actualizarSelectProductos();
    }
  }

  function filtrarProductos() {
    const textoBusqueda = searchInput.value.toLowerCase();
  
    const productosFiltrados = productos.filter((producto) => {
      const nombreProducto = producto.nombreProducto.toLowerCase();
      const categoria = producto.categoria.toLowerCase();
  
      return (
        nombreProducto.includes(textoBusqueda) ||
        categoria.includes(textoBusqueda)
      );
    });

    
  
    mostrarProductos(productosFiltrados);
  }
  

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", filtrarProductos);


function actualizarSelectProductos() {
    const selectProductos = document.getElementById("ventaProducto");
    selectProductos.innerHTML = "";
  
    productos.forEach((producto) => {
      const option = document.createElement("option");
      option.value = producto.id;
      option.textContent = `${producto.nombreProducto} - ${producto.categoria}`;
      selectProductos.appendChild(option);
    });
  }
  
  const formVentas = document.getElementById("ventas-form");
const resumenCompra = document.getElementById("resumenCompra");

formVentas.addEventListener("submit", (event) => {
  event.preventDefault();

  const productoId = parseInt(document.getElementById("ventaProducto").value);
  const cantidad = parseInt(document.getElementById("ventaCantidad").value);

  const index = productos.findIndex((producto) => producto.id === productoId);

  if (index !== -1 && cantidad > 0 && cantidad <= productos[index].stockProducto) {
    productos[index].stockProducto -= cantidad;
    mostrarProductos();

    const total = cantidad * productos[index].precioProducto;
    resumenCompra.innerHTML = `
      <p>Producto: ${productos[index].nombreProducto}</p>
      <p>Cantidad: ${cantidad}</p>
      <p>Precio unitario: ${productos[index].precioProducto}</p>
      <p>Total: ${total}</p>
    `;
  } else {
    alert("La cantidad ingresada no es válida o supera el stock disponible.");
  }
});

  