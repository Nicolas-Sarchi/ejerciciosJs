import { getRutas, agregarRuta, eliminarRuta, URL, modificarRuta, getPuntosPorRuta } from "./peticiones.js";
import { listarRutas } from "./listar.js";

let rutas = await getRutas();
listarRutas(rutas)

document.getElementById('formRuta').addEventListener('submit', async function (event){
    event.preventDefault()

    const NomRuta = document.getElementById('nombreRuta').value;

    let nuevaRuta ={
        NomRuta
    }

    agregarRuta(nuevaRuta);

    getRutas()

    document.getElementById('nombreRuta').value = ""

})

document.addEventListener("click", async function (event) {
    if (event.target.classList.contains("btn-eliminar")) {
      const RutaId = event.target.getAttribute("data-id");
       Swal.fire({
        title: 'Estas seguro de borrar la ruta?',
        text: "No podràs deshacerlo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Borralo!'
      }).then((result) => {
        if (result.isConfirmed) {
      
          Swal.fire(
            'Eliminado!',
            'La ruta ha sido eliminada.',
            'success'
          )
          setTimeout(()=>{
            eliminarRuta(RutaId);

          }, 1000)

        }

      })
      
    }
  });


  document.addEventListener("click", async function (event) {
    if (event.target.classList.contains("btn-editar")) {
      const rutaId = event.target.getAttribute("data-id");
  
      try {
        const response = await fetch(`${URL}/Rutas/${rutaId}`);
        const ruta = await response.json();
  
        const formularioModificar = document.getElementById("formularioModificar");
        formularioModificar.setAttribute("data-id", rutaId);
        document.getElementById("nombreModificar").value = ruta.NomRuta;
      
  const modalModificar = new bootstrap.Modal(
    document.getElementById("modalModificar")
  );
        modalModificar.show();
      } catch (error) {
        console.error("Error al obtener el ruta:", error);
      }
    }
  });

  document.getElementById("formularioModificar").addEventListener("submit", async function (event) {
    event.preventDefault();
  
    const productoId = event.target.getAttribute("data-id");
    const nombre = document.getElementById("nombreModificar").value;
 
  
    const datosProducto = {
      NomRuta: nombre
      
    };
  
    await modificarRuta(productoId, datosProducto);
    getRutas();
  
    const modalModificar = new bootstrap.Modal(document.getElementById("modalModificar"));
    modalModificar.hide();
  });  

  const selectRuta = document.getElementById("selectRuta");
  const listaPuntos = document.getElementById("listaPuntos");
  
  // Función para mostrar los puntos de una ruta
  async function mostrarPuntos(rutaId) {
    // Limpiar la lista de puntos antes de mostrar los nuevos puntos
    listaPuntos.innerHTML = "";
  
    try {
      // Obtener los puntos de la ruta seleccionada
      const puntos = await getPuntosPorRuta(rutaId);
  
      puntos.forEach(punto => {
        const li = document.createElement("li");
        li.textContent = punto.NomPuntos;
        listaPuntos.appendChild(li);
      });
    } catch (error) {
      console.error("Error al obtener los puntos:", error);
    }
  }
  
  // Cargar las rutas en el select al cargar la página
  async function cargarRutas() {
    try {
      const rutas = await getRutas();
      listarRutas(rutas);
  
      rutas.forEach(ruta => {
        const option = document.createElement("option");
        option.value = ruta.Id;
        option.textContent = ruta.NomRuta;
        selectRuta.appendChild(option);
      });
  
      // Asociar el evento onChange al select para mostrar los puntos de la ruta seleccionada
      selectRuta.addEventListener("change", async (event) => {
        const rutaId = event.target.value;
        console.log(rutaId);
        // Obtener el valor seleccionado del select
        await mostrarPuntos(rutaId);
      });
  
      // Mostrar los puntos de la ruta seleccionada inicialmente
      const rutaIdInicial = selectRuta.value;
      await mostrarPuntos(rutaIdInicial);
    } catch (error) {
      console.error("Error al obtener las rutas:", error);
    }
  }
cargarRutas()  