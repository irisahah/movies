async function searchMovies(query) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=b47b05cf57efae0f3eb0857eb4d2bc5e&query=${query}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    console.log(data.results)
    
    return data.results;
  }
  
  export { searchMovies };
  