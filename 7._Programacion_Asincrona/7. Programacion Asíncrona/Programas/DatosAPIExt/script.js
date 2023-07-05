

async function fetchData() {
    try {
    //   const response = await fetch('https://api.example.com/data');
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    // const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=4&lon=72&appid=2fecb748b5b060c588450f540e21822c");
    
      const data = await response.json();
      pokemones(data.results)
    } catch (error) {
      throw 'Error al obtener los datos';
    }
  }


  const pokemones = async (data)=> {
    try {
      var contenedor = document.getElementById('data-container')
      for(let pokemon of data){
        const resp = await fetch(pokemon.url),
        result = await resp.json()
        console.log(result);
        let divPokemon = `
    <div class="col-3">

    <div class="card" style="width: 18rem;">
  <img src= ${result.sprites.front_default} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${result.name}</h5>
  </div>
</div>

</div>  
        `
        contenedor.innerHTML+= divPokemon;
      }
    }
    catch(error){
        console.error(error);
    }
  }

  fetchData()

  // const coordenadas = async() => {
  //   try{
  //     const data = await fetchData()
  //     console.log(data);
  //   }
  //   catch(error){
  //     console.error(error);
  //   }
  // }

  // coordenadas()