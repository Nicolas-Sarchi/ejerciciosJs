import { getRutas, agregarRuta, eliminarRuta } from "./peticiones.js";

getRutas()

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