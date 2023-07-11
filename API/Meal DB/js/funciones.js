import { select, contenedor, btnFavoritos, contenedorFavoritos } from "./selectores.js";

export async function categorias() {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?c=list`
    );
    const data = await response.json();
    listarCategorias(data.meals);
  } catch (error) {
    console.error(error);
  }
}

function listarCategorias(datos) {
  datos.forEach((categoria) => {
    const option = document.createElement("option");
    option.value = categoria.strCategory;
    option.textContent = categoria.strCategory;
    select.appendChild(option);
  });
}

export async function verCategoria(categoria) {
  try {
    // Get the loader and display it
    const loader = document.getElementById('loader');
    loader.style.display = 'block';
    
    const resp = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`
    );
    const datos = await resp.json();
    console.log(datos.meals);

    // Hide the loader and show the meals
    mostrarPlatos(datos.meals)
  } catch (error) {
    console.error(error);
  }
}

function mostrarPlatos(platos) {
  contenedor.innerHTML = '';
  const loader = document.getElementById('loader');

  let imagesLoaded = 0;
  for(let plato of platos) {
    let divPlatos = document.createElement('div');
    divPlatos.className = "col-sm-6 col-md-4 col-lg-3 ";
    divPlatos.innerHTML = `
      <div class="card border border-0 shadow-lg p-3 mb-3 bg-body-tertiary rounded mx-auto  " style="width: 18rem;">
        <img src="${plato.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${plato.strMeal}</h5>
          <button class="btn btn-primary add-favorite" id="${plato.idMeal}">Add to Favorites</button>
        </div>
        </div>
      </div>
    `;

    divPlatos.querySelector('img').addEventListener('load', () => {
      imagesLoaded++;
      if (imagesLoaded === platos.length) {
        loader.style.display = 'none';
      }
    });

    contenedor.appendChild(divPlatos);
  }
}

function agregarAFavoritos(platoId) {
  // Obtén los datos actuales de los platos favoritos almacenados
  let platosFavoritos = localStorage.getItem('platosFavoritos');
  if (!platosFavoritos) {
    platosFavoritos = [];
  } else {
    platosFavoritos = JSON.parse(platosFavoritos);
  }

  // Sólo queremos almacenar la id para mantener los datos almacenados en localStorage a un mínimo
  if (!platosFavoritos.includes(platoId)) {
    platosFavoritos.push(platoId);
  }
  localStorage.setItem('platosFavoritos', JSON.stringify(platosFavoritos));
}

async function getMealDetails(mealId) {
  // Obtén los detalles de la comida usando la API
  try {
    const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const mealData = await resp.json();
    return mealData.meals[0];
  } 
  catch (error) {
    console.error(error);
  } 
}

async function mostrarFavoritos() {
  // Obtén los IDs de los platos favoritos del localStorage
  const mealIds = JSON.parse(localStorage.getItem('platosFavoritos') || "[]");
  contenedorFavoritos.innerHTML = '';

  // Obtiene los detalles de cada comida y agrega a la interfaz de usuario
  for (const mealId of mealIds) {
    const mealData = await getMealDetails(mealId);
    
    let divPlatosFavoritos = document.createElement('div');
    divPlatosFavoritos.className = "col-sm-6 col-md-4 col-lg-3 mx-auto ";
    divPlatosFavoritos.innerHTML = `
      <div class="card border border-0 shadow-lg p-3 mb-3 bg-body-tertiary rounded" style="width: 18rem;">
        <img src="${mealData.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${mealData.strMeal}</h5>
          <button class="btn btn-primary remove-favorite" id="remove-${mealData.idMeal}">Remove from Favorites</button>

        </div>
      </div>
    `;


    contenedorFavoritos.appendChild(divPlatosFavoritos);
    const removeButton = document.querySelector(`#remove-${mealData.idMeal}`);
    removeButton.addEventListener('click', event => {
      event.preventDefault();
      removeFromFavorites(mealData.idMeal);
      mostrarFavoritos(); 
    });

  }
}

function removeFromFavorites(mealId) {
  // Paso 1: Obtiene los platos favoritos actuales de localStorage.
  // Si no hay ningún plato almacenado, se devuelve un array vacío.
  let platosFavoritos = JSON.parse(localStorage.getItem('platosFavoritos') || "[]");
  
  // Paso 2: Creamos un nuevo array que contenga todos los platos que no coinciden con el mealId que queremos eliminar.
  // La función 'filter' crea un nuevo array con todos los elementos que pasen un test (proporcionado como función).
  // En este caso, el "test" es una comparación de igualdad entre el id del plato actual (id) y el mealId que queremos eliminar.
  // Solo los ids que no sean iguales al mealId pasarán el test y serán incluidos en el nuevo array.
  let updatedPlatosFavoritos = platosFavoritos.filter(id => id !== mealId);
  
  // Paso 3: Actualiza los platos favoritos en localStorage con el nuevo array.
  // Nota: localStorage solo puede almacenar strings, así que necesitamos convertir el array a string antes de almacenarlo.
  localStorage.setItem('platosFavoritos', JSON.stringify(updatedPlatosFavoritos));
}




document.addEventListener('click', function(e) {
  if (e.target.classList.contains('add-favorite')) {
    agregarAFavoritos(e.target.id);
  }
});

btnFavoritos.addEventListener('click', mostrarFavoritos);