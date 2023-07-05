const getMovies = async () => {

    const url = 'https://moviesdatabase.p.rapidapi.com/titles';
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
        console.log(result.results);
    } catch (error) {
        console.error(error);
    }

}

getMovies()

