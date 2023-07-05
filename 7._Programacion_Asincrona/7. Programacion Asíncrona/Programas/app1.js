function doSomething(callback) {
    //Tarea:
    for(i=0; i<10; i++){
        console.log(i);}
    // Llama al callback después de la tarea
    callback();
}
function callbackFunction() {
    console.log('¡El callback se ha invocado!');
}
// Llamamos a la función doSomething y pasamos callbackFunction como callback
doSomething(callbackFunction);
console.log('¡Última instrucción!');
  