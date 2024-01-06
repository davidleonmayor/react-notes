import { useRef, useEffect, useState } from "react";
import fetchMovies from "./services/fetchMovies";
import Movies from "./components/Movies";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false); // new state for loading
  const firstTimeFocus = useRef(null);

  useEffect(() => {
    if (firstTimeFocus.current) {
      firstTimeFocus.current.focus();
      return;
    }
  }, []);

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const getMovies = async () => {
    try {
      setLoading(true); // set loading to true when the fetch starts
      const result = await fetchMovies(searchValue);
      setLoading(false); // set loading to false when the fetch ends
      return result;
    } catch (error) {
      setLoading(false); // set loading to false when there is an error
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMovies(await getMovies());
  };

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
          <button type="submit" onClick={handleSubmit} className="">
            Search
          </button>
        </form>
      </header>
      <main className="w-full">
        {loading ? <p>Loading...</p> : <Movies movies={movies} />}
      </main>
    </div>
  );
}

export default App;
