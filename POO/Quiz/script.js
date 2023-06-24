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
  const correcta = correctaInput.value;

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
    nuevaPregunta.classList.add('card', 'mt-5', "border", 'border-primary', 'border-3');
    nuevaPregunta.innerHTML = `
      <div class="card-body">
        <h5 class="card-title fs-4 space-between">${pregunta.enunciado}</h5>
        <a href="#formulario" class="btn" onclick="administrarPreguntas.editarPregunta(${indice})">
          <i style="cursor:pointer" class="fa-solid fa-pen-to-square"></i>
        </a>
        <button class="btn" onclick="eliminarPregunta(${indice})">
          <i style="cursor:pointer; color: #e01b24;" class="fa-solid fa-trash"></i>
        </button>
        <div class="card-text">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label fs-5" for="flexRadioDefault1">${pregunta.a}</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
            <label class="form-check-label fs-5" for="flexRadioDefault2">${pregunta.b}</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
            <label class="form-check-label fs-5" for="flexRadioDefault3">${pregunta.c}</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4">
            <label class="form-check-label fs-5" for="flexRadioDefault4">${pregunta.d}</label>
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

mostrarQuiz();

