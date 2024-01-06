import React, { useRef, useEffect, useState } from "react";
import fetchMovies from "./services/fetchMovies";
import Movies from "./components/Movies";
import SearchForm from "./components/SearchForm";

const useFocusEffect = (ref) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);
};

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const lastSearch = useRef("");

  const getMovies = async (searchValue) => {
    try {
      setLoading(true);
      const result = await fetchMovies(searchValue);
      setLoading(false);
      return result;
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const searchMovies = async (searchValue) => {
    if (searchValue.trim() === "") return;

    if (searchValue.trim() !== lastSearch.current) {
      lastSearch.current = searchValue.trim();
      setMovies(await getMovies(searchValue));
    } else {
      console.log(
        "No se realiza la petición porque la cadena de búsqueda es la misma"
      );
    }
  };

  return { movies, loading, searchMovies };
};

// const SearchForm = ({
//   onSearchInputChange,
//   onSubmit,
//   searchValue,
//   inputRef,
// }) => (
//   <form className="flex justify-between p-2" onSubmit={onSubmit}>
//     <input
//       ref={inputRef}
//       onChange={onSearchInputChange}
//       value={searchValue}
//       type="text"
//     />
//     <button type="submit">Search</button>
//   </form>
// );

export default function App() {
  const firstTimeFocus = useRef(null);
  const { movies, loading, searchMovies } = useMovies();
  const [searchValue, setSearchValue] = useState("");

  useFocusEffect(firstTimeFocus);

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await searchMovies(searchValue);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <header>
        <SearchForm
          onSearchInputChange={handleSearchInputChanges}
          onSubmit={handleSubmit}
          searchValue={searchValue}
          inputRef={firstTimeFocus}
        />
      </header>
      <main className="w-full">
        {loading ? <p>Loading...</p> : <Movies movies={movies} />}
      </main>
    </div>
  );
}
