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
        this.preguntaEditando = null;
    }

    agregarPregunta(pregunta){
      if (this.preguntaEditando) {
        editarPregunta(pregunta);

        preguntaEditando = null;

    } else {
      this.preguntas.push(pregunta);
    }
        
    }
     getPreguntas(){
        return this.preguntas
    }

    eliminarPregunta(indice){
      this.preguntas.splice(indice,1)

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
    correcta = correctaInput.value;

    const pregunta = new Pregunta(enunciado, rtaA, rtaB, rtaC, rtaD, correcta);
    administrarPreguntas.agregarPregunta(pregunta);
    
    
    mostrarQuiz()
    formularioPregunta.reset()

})


const areaQuiz = document.getElementById('quiz');

function mostrarQuiz(){

    areaQuiz.innerHTML = ''

    administrarPreguntas.preguntas.forEach((pregunta,indice) => {
        const nuevaPregunta = document.createElement('div')
        nuevaPregunta.classList.add('card','mt-5')
        nuevaPregunta.innerHTML = `
                    <div class="card-body">

                 <h5 class="card-title fs-3 space-between">${pregunta.enunciado} </h5>
                  <button class= "btn" onclick ="editarPregunta(${indice})" ><i style="cursor:pointer" class="fa-solid fa-pen-to-square"></i></button>
                  <button class= "btn" onclick = "eliminarPregunta(${indice})""><i style="cursor:pointer; color: #e01b24;" class="fa-solid fa-trash"></i></button>
                
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
              if(administrarPreguntas.preguntaEditando === pregunta){
                document.getElementById('enunciado').value = pregunta.enunciado
                 document.getElementById('rtaA').value = pregunta.rtaA
                 document.getElementById('rtaB').value = pregunta.rtaB
                document.getElementById('rtaC').value = pregunta.rtaC
                document.getElementById('rtaD').value = pregunta.rtaD

                preguntaEditando = pregunta;
              }


              areaQuiz.appendChild(nuevaPregunta);

    })
   

}

function eliminarPregunta(indice){
  administrarPreguntas.eliminarPregunta(indice);
  mostrarQuiz()
}


const preguntas = administrarPreguntas.getPreguntas();
console.log(preguntas)
function editarPregunta(preguntaEditado) {
    const index = preguntas.findIndex(function (pregunta) {
        return pregunta.enunciado === preguntaEditado.enunciado;
    });

    if (index !== -1) {
        administrarPreguntas[index] = preguntaEditado;
    }

    mostrarQuiz();
}

   
    
    




