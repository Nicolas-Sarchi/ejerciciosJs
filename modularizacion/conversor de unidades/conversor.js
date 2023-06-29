import { convertirTemperatura } from "./js/temperatura.js";
import { conversorPeso } from "./js/peso.js";
import { convertirDistancia } from "./js/distancia.js";


const unidad = document.getElementById('dato'),
conversion = document.getElementById('conversion'),
modalResultado = document.getElementById('resultado'),
btnModal = document.getElementById('btnModal')




// function mostrarResultado (i){
    


btnModal.addEventListener("click", (e)=>{
        e.preventDefault()

    let a = conversion.value


    
        if (a === 
            "1"){
            console.log(convertirDistancia(parseFloat(unidad.value))); 
            
        } else if (a === "2"){
            console.log(convertirTemperatura(parseFloat(unidad.value))); 
           
        } else if (a === "3"){
    
            console.log(conversorPeso(parseFloat(unidad.value))); 
            
        } else {
            console.log("error");
        }
    
    

    ;
   
  

    unidad.value = '';

})

