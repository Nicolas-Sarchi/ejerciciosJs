import {
  select,
  contenedor,
  btnFavoritos,
  contenedorFavoritos,
} from "./selectores.js";

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
    
    const resp = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`
    );
    const datos = await resp.json();
    console.log(datos.meals);

    mostrarPlatos(datos.meals);
  } catch (error) {
    console.error(error);
  }
}

function mostrarPlatos(platos) {
  contenedor.innerHTML = "";

  for (let plato of platos) {
    let divPlatos = document.createElement("div");
    divPlatos.className = "col-sm-6 col-md-4 col-lg-3 ";
    divPlatos.innerHTML = `
      <div class="card border border-0 shadow-lg p-3 mb-3 bg-body-tertiary rounded mx-auto  " style="width: 18rem;">
        <img src="${plato.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${plato.strMeal}</h5>
          <button class="btn btn-outline-primary add-favorite" id="${plato.idMeal}">Añadir a Favoritos</button>
        </div>
        </div>
      </div>
    `;

    divPlatos.querySelector("img").addEventListener("load", () => {
    });

    contenedor.appendChild(divPlatos);
  }
}

function agregarAFavoritos(platoId) {
  let platosFavoritos = localStorage.getItem("platosFavoritos");
  if (!platosFavoritos) {
    platosFavoritos = [];
  } else {
    platosFavoritos = JSON.parse(platosFavoritos);
  }

  if (!platosFavoritos.includes(platoId)) {
    platosFavoritos.push(platoId);
  }
  localStorage.setItem("platosFavoritos", JSON.stringify(platosFavoritos));
}

async function getMealDetails(mealId) {
  try {
    const resp = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const mealData = await resp.json();
    return mealData.meals[0];
  } catch (error) {
    console.error(error);
  }
}

async function mostrarFavoritos() {
  const mealIds = JSON.parse(localStorage.getItem("platosFavoritos") || "[]");
  contenedorFavoritos.innerHTML = "";

  for (const mealId of mealIds) {
    const mealData = await getMealDetails(mealId);

    let divPlatosFavoritos = document.createElement("div");
    divPlatosFavoritos.className = "col-sm-6 col-md-4 col-lg-3 mx-auto ";
    divPlatosFavoritos.innerHTML = `
      <div class="card border border-0 shadow-lg p-3 mb-3 bg-body-tertiary rounded" style="width: 18rem;">
        <img src="${mealData.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${mealData.strMeal}</h5>
          <button class="btn btn-primary remove-favorite" id="remove-${mealData.idMeal}">Eliminar de favoritos</button>

        </div>
      </div>
    `;

    contenedorFavoritos.appendChild(divPlatosFavoritos);
    const removeButton = document.querySelector(`#remove-${mealData.idMeal}`);
    removeButton.addEventListener("click", (event) => {
      event.preventDefault();
      removeFromFavorites(mealData.idMeal);
      mostrarFavoritos();
    });
  }
}

function removeFromFavorites(mealId) {
  let platosFavoritos = JSON.parse(
    localStorage.getItem("platosFavoritos") || "[]"
  );

  let updatedPlatosFavoritos = platosFavoritos.filter((id) => id !== mealId);

  localStorage.setItem(
    "platosFavoritos",
    JSON.stringify(updatedPlatosFavoritos)
  );
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-favorite")) {
    agregarAFavoritos(e.target.id);
  }
});

btnFavoritos.addEventListener("click", mostrarFavoritos);
