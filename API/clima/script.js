async function traerDatos (){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=peru&units=metric&appid=2fecb748b5b060c588450f540e21822c`
        );
        const data = await response.json()
        if (data.cod === '404') {
            container.innerHTML="No se encuentra la ciudad :(";
            return;
        }
        console.log(data);
        mostrarDatos(data)
    }
    catch (error){
        console.error(error)
    }
}

traerDatos()
async function mostrarDatos (datos){
    try{
        var container = document.getElementById('contenedor')
        container.innerHTML = `
        
  <div class="card border border-0 shadow-lg p-3 mb-5 text-white bg-dark rounded color-white col-6 mx-auto mt-3" style="width: 18rem;" >
  <img src= https://openweathermap.org/img/wn/${datos.weather[0].icon}@2x.png class="card-img-top" alt="...">

  <div class="card-body text-center">

  <h5 class="card-title">${datos.name}</h5>
  <p>${datos.main.temp.toFixed(0)}ºC</p>
  <p>${datos.sys.country}</p>
  <p>${datos.weather[0].main}</p>
  <p>
  <i class="fa-solid fa-wind"></i>
  ${datos.wind.speed} m/s
  </p>

  <p>
  💧${datos.main.humidity} %
  </p>
  
  
  
  </div>
  </div>
    `     
    }
    catch(error){
        console.error(error);
    }

}





