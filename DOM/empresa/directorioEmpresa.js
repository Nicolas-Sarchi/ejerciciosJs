let contadorId = 1;

    function agregarEmpleado() {
      const nombre = document.querySelector('#nombre').value;
      const correo = document.querySelector('#correo').value;
      const telefono = document.querySelector('#telefono').value;

      const cuerpoTabla = document.querySelector('#tabla-empleados tbody');
      const nuevaFila = document.createElement('tr');
      nuevaFila.innerHTML = `
        <td>${contadorId}</td>
        <td>${nombre}</td>
        <td>${correo}</td>
        <td>${telefono}</td>
        <td><button class="btn btn-danger btn-sm btn-eliminar">Eliminar</button></td>
      `;
      cuerpoTabla.appendChild(nuevaFila);

      contadorId++;

      // Limpiar los campos del formulario
      document.querySelector('#nombre').value = '';
      document.querySelector('#correo').value = '';
      document.querySelector('#telefono').value = '';

      const btnEliminar = nuevaFila.querySelector('.btn-eliminar');
      btnEliminar.addEventListener('click', eliminarEmpleado);
    }

    

    function eliminarEmpleado(event) {
      const fila = event.target.parentNode.parentNode;
      fila.remove();
    }

    const formulario = document.querySelector('#formulario-empleado');

    formulario.addEventListener('submit', function(e) {
      e.preventDefault();
      agregarEmpleado();
    });

