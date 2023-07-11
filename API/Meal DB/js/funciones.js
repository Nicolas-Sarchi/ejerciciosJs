import { select, contenedor } from "./selectores.js";

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
    mostrarPlatos(datos.meals)
  } catch (error) {
    console.error(error);
  }
}

function mostrarPlatos(platos) {
    contenedor.innerHTML = ''
  for(let plato of platos) {
  
    let divPlatos = `
<div class="col-3 mt-3 mx-auto ">
    
        <div class="card" style="width: 18rem;">
        <img src="${plato.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${plato.strMeal}</h5>
         
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>`;

      contenedor.innerHTML += divPlatos;
  };
}
