const PATH = 'https://www.omdbapi.com/'
const APY_KEY = '4287ad07'
const URL = `${PATH}?apikey=${APY_KEY}&s=`

export default async function useGetMovies(search) {
  try {
    if (search === '') {
      throw new Error('Search is empty')
    }

    const response = await  fetch(`${URL}${search}`)
    const json = await response.json()

    const movies = json.Search
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster
    }))
  }
  catch (error) {
    console.error(error)
    throw new Error('Error searching movies')
  }
}
