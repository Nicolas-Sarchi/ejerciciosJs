// function mostrarQuiz(){

//     areaQuiz.innerHTML = ''
//     const preguntas = administrarPreguntas.verPreguntas()
//     for( let i = 0 ; i < preguntas.length; i++) {
//         const pregunta = preguntas[i];
//         const nuevaPregunta = document.createElement('div')
//         nuevaPregunta.classList.add('col-12')
//         nuevaPregunta.innerHTML = `
//                 <p>${pregunta.enunciado}</p>
//                 <div class="form-check">
//                     <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
//                     <label class="form-check-label" for="flexRadioDefault1">
//                       ${pregunta.a}
//                     </label>
//                   </div>
//                   <div class="form-check">
//                     <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
//                     <label class="form-check-label" for="flexRadioDefault2">
//                     ${pregunta.b}
//                     </label>
//                   </div>
//                   <div class="form-check">
//                   <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
//                   <label class="form-check-label" for="flexRadioDefault2">
//                   ${pregunta.c}
//                   </label>
//                 </div>
//                 <div class="form-check">
//                 <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4">
//                 <label class="form-check-label" for="flexRadioDefault2">
//                 ${pregunta.d}
//                 </label>
//               </div>`
//               areaQuiz.appendChild(nuevaPregunta);

//     }


// }