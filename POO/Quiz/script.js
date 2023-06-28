class Pregunta {
  constructor(enunciado, a, b, c, d, rta) {
    this.enunciado = enunciado;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.correcta = rta;
  }
}

class QuestionManager {
  constructor() {
    this.preguntas = [];
    this.preguntaEditando = null;
  }

  agregarPregunta(pregunta) {
    if (this.preguntaEditando) {  
      const indice = this.preguntas.indexOf(this.preguntaEditando);
      this.preguntas[indice] = pregunta;
      this.preguntaEditando = null;
    } else {
      this.preguntas.push(pregunta);
    }
    console.log(this.preguntas);
  }

  getPreguntas() {
    return this.preguntas;
  }

  eliminarPregunta(indice) {
    this.preguntas.splice(indice, 1);
  }

  editarPregunta(indice) {
    this.preguntaEditando = this.preguntas[indice];

    enunciadoInput.value = this.preguntaEditando.enunciado;
    rtaAInput.value = this.preguntaEditando.a;
    rtaBInput.value = this.preguntaEditando.b;
    rtaCInput.value = this.preguntaEditando.c;
    rtaDInput.value = this.preguntaEditando.d;
    correctaInput.value = this.preguntaEditando.correcta;
  }

//add validation to my code
validarRespuestas() {
  const respuestasUsuario = [];
  let respuestasCorrectas = 0;

  // Obtener las respuestas seleccionadas por el usuario y validarlas
  this.preguntas.forEach((pregunta, indice) => {
    const opciones = document.getElementsByName(`flexRadioDefault${indice}`);
    let respuestaSeleccionada = '';
    let respuestaCorrecta = '';
    opciones.forEach((opcion) => {
      if (opcion.checked) {
        respuestaSeleccionada = opcion.nextElementSibling.innerText;
      }
      opcion.disabled = true; // Desactivar el input tipo radio
      if (pregunta.correcta === opcion.nextElementSibling.innerText) {
        respuestaCorrecta = opcion.nextElementSibling.innerText;
      }
    });
    respuestasUsuario.push(respuestaSeleccionada);

    if (respuestaSeleccionada === pregunta.correcta) {
      respuestasCorrectas++;
      opciones.forEach((opcion) => {
        if (opcion.checked) {
          opcion.parentElement.style.backgroundColor = 'rgba(0, 255, 0, 0.2)'; // Respuesta del usuario correcta (verde)
        }
      });
    } else {
      opciones.forEach((opcion) => {
        if (opcion.checked) {
          opcion.parentElement.style.backgroundColor = 'rgba(255, 0, 0, 0.2)'; // Respuesta del usuario incorrecta (rojo)
        }
        if (pregunta.correcta === opcion.nextElementSibling.innerText) {
          opcion.parentElement.style.backgroundColor = 'rgba(0, 255, 0, 0.2)'; // Respuesta correcta (verde)
        }
      });
    }
  });

  // Calcular el porcentaje de aciertos
  const porcentajeAciertos = (respuestasCorrectas / this.preguntas.length) * 100;

  // Mostrar el resumen de aciertos en el modal
  const resultadoModalBody = document.getElementById('resultadoModalBody');
  resultadoModalBody.innerHTML = `
    <h3>Resumen del Quiz</h3>
    <p>Respuestas correctas: ${respuestasCorrectas}/${this.preguntas.length}</p>
    <p>Puntaje: ${porcentajeAciertos.toFixed(2)}%</p>
  `;

  // Abrir el modal
  const resultadoModal = new bootstrap.Modal(document.getElementById('resultadoModal'));
  resultadoModal.show();
}






}

const administrarPreguntas = new QuestionManager();

const enunciadoInput = document.getElementById('enunciado');
const rtaAInput = document.getElementById('rtaA');
const rtaBInput = document.getElementById('rtaB');
const rtaCInput = document.getElementById('rtaC');
const rtaDInput = document.getElementById('rtaD');
const correctaInput = document.getElementById('correcta');
const formularioPregunta = document.getElementById('formulario');


formularioPregunta.addEventListener('submit', (e) => {
  e.preventDefault();

  const enunciado = enunciadoInput.value;
  const rtaA = rtaAInput.value;
  const rtaB = rtaBInput.value;
  const rtaC = rtaCInput.value;
  const rtaD = rtaDInput.value;
  if (correctaInput.value === 'a'){
  correcta = rtaA;
  } else if (correctaInput.value === 'b') {
    correcta = rtaB;

  }else if (correctaInput.value === 'c'){
    correcta = rtaC;

  }else{
    correcta = rtaD;

  }

  const pregunta = new Pregunta(enunciado, rtaA, rtaB, rtaC, rtaD, correcta);
  administrarPreguntas.agregarPregunta(pregunta);

  mostrarQuiz();
  formularioPregunta.reset();
});

const areaQuiz = document.getElementById('quiz');

function mostrarQuiz() {
  areaQuiz.innerHTML = '';

  administrarPreguntas.preguntas.forEach((pregunta, indice) => {
    const nuevaPregunta = document.createElement('div');
    nuevaPregunta.classList.add('card', 'mt-5', "border", 'border-black', 'border-2');
    nuevaPregunta.innerHTML = `
      <div class="card-body">
        <h5 class="card-title fs-4 ">${pregunta.enunciado}</h5>
        <a href="#formulario" class="btn" onclick="administrarPreguntas.editarPregunta(${indice})">
          <i style="cursor:pointer" class="fa-solid fa-pen-to-square"></i>
        </a>
        <button class="btn" onclick="eliminarPregunta(${indice})">
          <i style="cursor:pointer; color: #e01b24;" class="fa-solid fa-trash"></i>
        </button>
        <div class="card-text">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault${indice}" id="flexRadioDefault1">
            <label class="form-check-label" fs-5" for="flexRadioDefault1">${pregunta.a}</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault${indice}" id="flexRadioDefault2">
            <label class="form-check-label" fs-5" for="flexRadioDefault2">${pregunta.b}</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault${indice}" id="flexRadioDefault3">
            <label class="form-check-label" fs-5" for="flexRadioDefault3">${pregunta.c}</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault${indice}" id="flexRadioDefault4">
            <label class="form-check-label" fs-5" for="flexRadioDefault4">${pregunta.d}</label>
          </div>
        </div>
      </div>
      
    `;
   
    areaQuiz.appendChild(nuevaPregunta);
    
  });
    

}

function eliminarPregunta(indice) {
  administrarPreguntas.eliminarPregunta(indice);
  mostrarQuiz();
}


function showSection(sectionId) {
  const sections = ['formulario', 'preguntas'];
  sections.forEach((id) => {
      const section = document.getElementById(id);
      if (id === sectionId) {
          section.style.display = 'block';
      } else {
          section.style.display = 'none';
      }
  });
}


document.querySelector("a[href='#formulario']").addEventListener("click", () => showSection("formulario"));
document.querySelector("a[href='#preguntas']").addEventListener("click", () => showSection("preguntas"));



showSection("formulario");

