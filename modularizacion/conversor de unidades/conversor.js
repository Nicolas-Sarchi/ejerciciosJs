import { convertirTemperatura } from "./js/temperatura.js";
import { conversorPeso } from "./js/peso.js";
import { convertirDistancia } from "./js/distancia.js";


const unidad = document.getElementById('dato'),
conversion = document.getElementById('conversion'),
modalResultado = document.getElementById('resultado'),
btnModal = document.getElementById('btnModal');





function calcularResultado (a){
 
    if (a === 
        "1"){
        mostrarConversion(convertirDistancia(parseFloat(unidad.value))); 
        
    } else if (a === "2"){
        mostrarConversion(convertirTemperatura(parseFloat(unidad.value))); 
       
    } else if (a === "3"){

        mostrarConversion(conversorPeso(parseFloat(unidad.value))); 
        
    } else {
        console.log("error");
    }
}


function mostrarConversion (operacion){
    modalResultado.innerHTML = ''
    const resultado = document.createElement('p');
    resultado.classList.add('text-center')
    resultado.textContent = `El resultado es : ${operacion}`;
    modalResultado.appendChild(resultado);

}


btnModal.addEventListener("click", (e)=>{
        e.preventDefault()


    calcularResultado(conversion.value);


   
      unidad.value = '';

})


