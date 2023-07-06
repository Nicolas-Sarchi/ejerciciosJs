async function fetchData() {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    // const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=4&lon=72&appid=2fecb748b5b060c588450f540e21822c");

    const data = await response.json();
    pokemones(data.results);
  } catch (error) {
    throw "Error al obtener los datos";
  }
}

const pokemones = async (data) => {
  try {
    var contenedor = document.getElementById("data-container");
    for (let pokemon of data) {
      const resp = await fetch(pokemon.url),
        result = await resp.json();
      let divPokemon = `
  

    <div class="card border border-0 shadow-lg p-3 mb-5 bg-body-tertiary rounded col-4 mx-auto mt-3" style="width: 18rem;" id="${result.name}">
  <img src= ${result.sprites.front_default} class="card-img-top" alt="...">
  <div class="card-body text-center">
    <h5 class="card-title">${result.name}</h5>
    
  </div>
<div class="card-footer text-center">

  <button class="btn btn-outline-dark" onclick="mostrarAtaques('${result.name}','${result.id}')">Mostrar ataque Especial</button></div>
</div>

        `;
      contenedor.innerHTML += divPokemon;
    }
  } catch (error) {
    console.error(error);
  }
};

async function mostrarAtaques(nombrePokemon, id) {
  try {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/move/${id}`);
    const datosPokemon = await respuesta.json();
    const tarjeta = document.getElementById(nombrePokemon);
    const cuerpoTarjeta = tarjeta.querySelector(".card-body");

    if (cuerpoTarjeta.querySelector("ul")) {
      cuerpoTarjeta.classList.add("hidden");

      cuerpoTarjeta.innerHTML = `
          <h5 class="card-title">${nombrePokemon}</h5>
        `;
      cuerpoTarjeta.classList.remove("hidden");
    } else {
      const listaAtaques = document.createElement("ul");
      listaAtaques.classList.add("list-group");
      const habilidades = datosPokemon.names[5].name;

      const elementoLista = document.createElement("li");
      elementoLista.textContent = habilidades;
      listaAtaques.appendChild(elementoLista);

      cuerpoTarjeta.classList.add("hidden");

      cuerpoTarjeta.appendChild(listaAtaques);
      cuerpoTarjeta.classList.remove("hidden");
    }
  } catch (error) {
    console.error(error);
  }
}

fetchData();