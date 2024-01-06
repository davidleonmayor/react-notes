// TODO: regfactorizar y validar las posibles respuestas de la API
// para que no se rompa la aplicacion en los distintos casos al rsponser la API

const PATH = "https://www.omdbapi.com/";
const APY_KEY = "4287ad07";
const URL = `${PATH}?apikey=${APY_KEY}&s=`;

export default async function fetchMovies(search) {
  try {
    if (search === "") {
      console.log("Search is empty");
    }

    const response = await fetch(`${URL}${search}`);
    const json = await response.json();
    if (!json.Search) {
      console.log(json.Error);
      return [];
    }

    const movies = json.Search;
    return movies?.map(mapData);
  } catch (error) {
    console.error(error);
    throw new Error("Error searching movies");
  }
}

function mapData(movie) {
  return {
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    image: movie.Poster,
    category: movie.Type,
  };
}
