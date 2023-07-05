function doSomething() {
    return new Promise((resolve, reject) => {
      // Realiza una tarea asincrónica
      let x = Math.random()*10;
      if(x>5) {
        // Si la tarea se completa con éxito, llamamos a resolve
        resolve('¡Tarea completada! '+ parseInt(x));
      }
      else {
        // Si ocurre un error, llamamos a reject
        reject('¡Algo salió mal! '+ parseInt(x));
      } 
    });
  }

  // Llamamos a la función doSomething y manejamos la Promesa resultante
  for (i=0;i<5;i++) {
    doSomething()
        .then((res) => {
        console.log(res);
        })
        .catch((err) => {
        console.error(err);
        });
    }