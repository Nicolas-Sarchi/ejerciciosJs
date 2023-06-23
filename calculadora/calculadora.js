const pantalla = document.querySelector('.pantalla'),
botones = document.querySelector('.btn');


class Calculadora{
    constructor(contenido){
        this.operacion = contenido;
    }

    operar(){
        eval(this.operacion)
    }
}


botones.forEach(boton => {

    
    
});
