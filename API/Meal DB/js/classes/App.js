import {categorias, verCategoria} from "../funciones.js"
import { select } from "../selectores.js";

 class App {
    constructor (){
        this.iniciarApp();
    }

    iniciarApp(){
        categorias()
        select.addEventListener('input', (e)=>{
            verCategoria(e.target.value)
        })
    }
}

export default App;