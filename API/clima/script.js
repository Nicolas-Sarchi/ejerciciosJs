async function traerDatos(ciudad){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=2fecb748b5b060c588450f540e21822c`
        );
        const data = await response.json()
        if (data.cod === '404') {
            var container = document.getElementById('contenedor')
            container.innerHTML = "<div class='alert alert-danger text-center' role='alert'>No se pudo encontrar la ciudad. Por favor, intenta con otra ciudad.</div>";
            return;
        }
        console.log(data);
        mostrarDatos(data)
    }
    catch (error){
        console.error(error)
    }
}

async function mostrarDatos (datos){
    try{
        var container = document.getElementById('contenedor')
        container.innerHTML = `
        
  <div class="card border border-0 shadow-lg p-3 mb-5 text-white bg-primary rounded color-white col-6 mx-auto mt-3" style="width: 18rem;" >
  <img src= https://openweathermap.org/img/wn/${datos.weather[0].icon}@2x.png class="card-img-top" alt="...">

  <div class="card-body text-center">

  <h5 class="card-title fs-3">${datos.name}</h5>
  <p class = "fs-5 mt-3 ">${datos.main.temp.toFixed(0)}ºC</p>
  <p class = "fs-5 ">${datos.sys.country}</p>
  <p class = "fs-5 ">${datos.weather[0].main}</p>
  <p class = "fs-5 ">
  <i class="fa-solid fa-wind "></i>
  ${datos.wind.speed} m/s
  </p>
  <p class = "fs-5 ">  💧${datos.main.humidity} %
  </p>
  
  
  
  </div>
  </div>
    `     
    }
    catch(error){
        console.error(error);
    }

}



document.getElementById('buscar').addEventListener('click', function() {
    const ciudad = document.getElementById('ciudad').value;
    traerDatos(ciudad);
});

