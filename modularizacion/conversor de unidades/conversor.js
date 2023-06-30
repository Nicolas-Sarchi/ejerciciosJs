import { convertirTemperatura } from "./js/temperatura.js";
import { conversorPeso } from "./js/peso.js";
import { convertirDistancia } from "./js/distancia.js";

const unidad = document.getElementById("dato"),
  conversion = document.getElementById("conversion"),
  modalResultado = document.getElementById("resultado"),
  btnModal = document.getElementById("btnModal"),
  btnHistorial = document.getElementById("btnHistorial"),
  vaciarHistorial = document.getElementById('borrar')

let historial = JSON.parse(localStorage.getItem("historial")) || [];

function guardarOperacion(item) {
  if (item) {
    historial.push(item);
    localStorage.setItem("historial", JSON.stringify(historial));
  }
}

function mostrarHistorial() {
  const listaHistorial = document.getElementById("elementosHistorial");
  listaHistorial.innerHTML = "";
  historial.forEach((item, index) => {
    const operacion = document.createElement("li"),
      botonEliminar = document.createElement("button");
    botonEliminar.classList.add("btn", "btn-danger", "btn-sm", "mx-5");
    operacion.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = () => eliminarElemento(index);
    operacion.textContent = item;
    operacion.appendChild(botonEliminar);
    listaHistorial.appendChild(operacion);
  });
}

function eliminarElemento(index) {
  historial.splice(index, 1);
  mostrarHistorial();
  localStorage.setItem("historial", JSON.stringify(historial));
}

function calcularResultado(a) {
  if (a === "1") {
    let operacion = convertirDistancia(parseFloat(unidad.value));
    mostrarConversion(operacion);
    return operacion;
  } else if (a === "2") {
    let operacion = convertirTemperatura(parseFloat(unidad.value));
    mostrarConversion(operacion);
    return operacion;
  } else if (a === "3") {
    let operacion = conversorPeso(parseFloat(unidad.value));
    mostrarConversion(operacion);
    return operacion;
  } else {
    console.log("error");
  }
}

function borrarHistorial() {
  historial = [];
  localStorage.removeItem("historial");
}

function mostrarConversion(operacion) {
  modalResultado.innerHTML = "";
  const resultado = document.createElement("p");
  resultado.classList.add("text-center", "fw-bold", "fs-4");
  resultado.textContent = operacion;
  modalResultado.appendChild(resultado);
}

btnModal.addEventListener("click", () => {
  let a = calcularResultado(conversion.value);
  unidad.value = "";
  guardarOperacion(a);
});

btnHistorial.addEventListener("click", () => {
  mostrarHistorial();
});

vaciarHistorial.addEventListener('click',() =>{
  borrarHistorial()
  mostrarHistorial();
})
