function doSomething() {
    let x = Math.random()*10;
    if(x>5) {
      // Realiza una tarea asincrónica
      // ...
  
      // Si la tarea se completa con éxito, se devuelve el resultado
      return '¡Tarea completada! '+ parseInt(x);
    } else {
      // Si ocurre un error, se lanza una excepción
      throw '¡Algo salió mal! ' + parseInt(x);
    }
  }
  
  async function runAsyncCode() {
    try {
      const result = await doSomething();
      console.log(result);
    } catch (erro) {
      console.error(erro);
    }
  }
  
  for (i=0;i<5;i++) {
    runAsyncCode();
  }


  /*async function doSomething() {
  try {
    // Realiza una tarea asincrónica
    // ...

    // Si la tarea se completa con éxito, se devuelve el resultado
    return '¡Tarea completada!';
  } catch (error) {
    // Si ocurre un error, se lanza una excepción
    throw '¡Algo salió mal!';
  }
}

async function runAsyncCode() {
  try {
    const result = await doSomething();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

runAsyncCode();
*/