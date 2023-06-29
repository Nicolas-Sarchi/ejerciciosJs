class CarritoDeCompras {
  constructor() {
    this.elementosCarrito =
      JSON.parse(localStorage.getItem("elementosCarrito")) || [];
  }

  mostrarCarrito() {
    const listaElementosCarrito = document.getElementById("elementosCarrito");
    listaElementosCarrito.innerHTML = "";

    this.elementosCarrito.forEach((item, index) => {
      const elementoCarrito = document.createElement("li"),
        botonEliminar = document.createElement("button");
      botonEliminar.classList.add("btn", "btn-danger", "btn-sm", "mx-5");
      elementoCarrito.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center"
      );

      botonEliminar.textContent = "Eliminar";
      botonEliminar.onclick = () => this.eliminarElemento(index);
      elementoCarrito.textContent = item.nombre + " - $" + item.precio;
      elementoCarrito.appendChild(botonEliminar);
      listaElementosCarrito.appendChild(elementoCarrito);
    });
  }

  agregarItem(item) {
    if (item) {
      this.elementosCarrito.push(item);
      this.mostrarCarrito();
      localStorage.setItem(
        "elementosCarrito",
        JSON.stringify(this.elementosCarrito)
      );
    }
  }

  eliminarElemento(index) {
    this.elementosCarrito.splice(index, 1);
    this.mostrarCarrito();
    localStorage.setItem(
      "elementosCarrito",
      JSON.stringify(this.elementosCarrito)
    );
  }

  vaciarCarrito() {
    this.elementosCarrito = [];
    this.mostrarCarrito();
    localStorage.removeItem("elementosCarrito");
  }

  totalCompra(){
    const modalResumen = document.getElementById('modal')
    modalResumen.innerHTML = ''
    var a = 0
    this.elementosCarrito.forEach(elemento => {
      const total = elemento.precio;
      
      a += parseInt(total)
      
    })
    
    const mostrarTotal = document.createElement('p');
      mostrarTotal.textContent = `${a}`
      modalResumen.appendChild(mostrarTotal)
  }
}

const miCarrito = new CarritoDeCompras();
miCarrito.mostrarCarrito();

const btnAgregar = document.getElementById("agregar");
const descripcion = document.getElementById("inputDescripcion");
const precio = document.getElementById("inputProducto");

btnAgregar.addEventListener("submit", function (e) {
  e.preventDefault();
  item = {
    nombre: descripcion.value,
    precio: precio.value,
  };

  descripcion.value = "";
  precio.value = "";
  miCarrito.agregarItem(item);
  miCarrito.totalCompra()
});

const botonModal = document.getElementById('botonModal');
 botonModal.addEventListener("click", miCarrito.totalCompra())
