let botonNext;
const botones= document.getElementById('botones')
const pelicula = document.getElementById('pelicula'),
buscar =document.getElementById('buscar')

const getMovies = async (url) => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5533997ec8msh53a237ca505a69ap1fe517jsn6d0ebb33e613',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        var contenedor = document.getElementById('contenedor');
        
        for(let pelicula of result.results){

        if(pelicula.primaryImage){
            let divPelicula = `
            <div class="card border border-0 shadow-lg p-3 mb-5 bg-body-tertiary rounded col-6 mx-auto mt-3" style="width: 18rem;" id="${result.name}">
            <img src= ${pelicula.primaryImage.url} class="card-img-top" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title">${pelicula.titleText.text}</h5>
              
            </div>
          `;
            
            contenedor.innerHTML += divPelicula
        }else{
            console.log("no");
        }
        
        }

        botonNext = result.next ? `<button type="button" data-url = https://moviesdatabase.p.rapidapi.com${result.next} class="btn btn-primary w-75 mx-auto col-12">Cargar Màs</button>`:"";
        botones.innerHTML =  botonNext; 
    } catch (error) {
        console.error(error);
    }

}

buscar.addEventListener("click", ()=>{
    const titulo = pelicula.value;
const url = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${titulo}?exact=false&titleType=movie`;
    getMovies(url)
})


botones.addEventListener('click', (e)=>{
    if(e.target.classList.contains('btn')){
        let value = e.target.dataset.url
        console.log(value);
        getMovies(value)
    }

})
