import { useRef, useEffect, useState } from 'react';
import getMovies from './services/getMovies';
import Movie from './components/Movie';
// import SearchVar from './components/SearchVar';
import MOCK from "./mock/movies";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('')
	const firstTimeFocus = useRef(null)

	// focus on the input when the component is mounted for the first time
	useEffect(() => {
		if (firstTimeFocus.current) {
      firstTimeFocus.current.focus()
      return
    }
	}, [])

  // render movies for the first time
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies("cat");
        data.forEach((item, index) => {
          console.log(index, item)
        })

        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, []);


  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
		// usar el custom hook para pedir datos y luego actualizar el estado de la app
    // useGetMovies("cat")
		// setSearchValue('')
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <header>
        <form className="flex justify-between p-2">
          <input
            ref={firstTimeFocus}
            onChange={handleSearchInputChanges}
            value={searchValue}
            type="text"
          />
          <button type="submit" onClick={handleSubmit} className="">Search</button>
        </form>
      </header>
      <main>
        {/* TODO: change key to id prop */}
        {movies.map((item, index) => <Movie key={index} {...item} />)}
        {/* <Movies></Movies> */}
      </main>
    </div>
  );
}

export default App;
