// Define un objeto de lista de tareas
var listaTareas = {
    tareas: [],
    agregarTarea: function(descripcion) {
      this.tareas.push({
        descripcion: descripcion,
        completada: false
      });
    },
    toggleCompletada: function(indice) {
      if (indice >= 0 && indice < this.tareas.length) {
        this.tareas[indice].completada = !this.tareas[indice].completada;
      }
    },
    
    generarListaHTML: function() {
      var listaHTML = document.getElementById("lista");
      listaHTML.innerHTML = "";
  
      for (var i = 0; i < this.tareas.length; i++) {
        var tarea = this.tareas[i];
        var item = document.createElement("li");
        item.textContent = tarea.descripcion;
  
        if (tarea.completada) {
          item.classList.add("active");
        }
  
        item.addEventListener("click", function(indice) {
          return function() {
            listaTareas.toggleCompletada(indice);
            listaTareas.generarListaHTML();
          };
        }(i));
  
        listaHTML.appendChild(item);
      }
    }
  };
  
  // Agrega algunas tareas de ejemplo
  listaTareas.agregarTarea("Hacer la compra");
  listaTareas.agregarTarea("Llamar al médico");
  listaTareas.agregarTarea("Estudiar JavaScript");
  
  // Genera la lista inicial en la página
  listaTareas.generarListaHTML();
  