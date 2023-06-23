class Pregunta{
    constructor(enunciado, a, b, c, d, rta){
        this.enunciado = enunciado;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.correcta = rta;
    }

}

class QuestionManager{
    constructor(){
        this.preguntas = [];
    }

    agregarPregunta(pregunta){
        this.preguntas.push(pregunta);
    }
     getPreguntas(){
        return this.preguntas
    }

}

const administrarPreguntas = new QuestionManager();

const enunciadoInput = document.getElementById('enunciado'),
rtaAInput = document.getElementById('rtaA'),
rtaBInput = document.getElementById('rtaB'),
rtaCInput = document.getElementById('rtaC'),
rtaDInput = document.getElementById('rtaD'),
correctaInput = document.getElementById('correcta'),
formularioPregunta = document.getElementById('formulario');



formularioPregunta.addEventListener('submit', e => {
    e.preventDefault();

    const enunciado = enunciadoInput.value,
    rtaA = rtaAInput.value,
    rtaB = rtaBInput.value,
    rtaC = rtaCInput.value,
    rtaD = rtaDInput.value,
    correcta = correctaInput.value

    const pregunta = new Pregunta(enunciado, rtaA, rtaB, rtaC, rtaD, correcta);
    administrarPreguntas.agregarPregunta(pregunta);
    
    
    mostrarQuiz()
    formularioPregunta.reset()
    console.log(administrarPreguntas.getPreguntas())

})


const areaQuiz = document.getElementById('quiz');

function mostrarQuiz(){

    areaQuiz.innerHTML = ''

    administrarPreguntas.preguntas.forEach(pregunta => {
        const nuevaPregunta = document.createElement('div')
        nuevaPregunta.classList.add('card','mt-5')
        nuevaPregunta.innerHTML = `
                    <div class="card-body">

                 <h5 class="card-title fs-6">${pregunta.enunciado}</h5>
                 <div class="card-text">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      ${pregunta.a}
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                    <label class="form-check-label" for="flexRadioDefault2">
                    ${pregunta.b}
                    </label>
                  </div>
                  <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                  <label class="form-check-label" for="flexRadioDefault2">
                  ${pregunta.c}
                  </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4">
                <label class="form-check-label" for="flexRadioDefault2">
                ${pregunta.d}
                </label>
              </div>
            </div>
            </div>
              `
              areaQuiz.appendChild(nuevaPregunta);

    })


}

   
    
    




