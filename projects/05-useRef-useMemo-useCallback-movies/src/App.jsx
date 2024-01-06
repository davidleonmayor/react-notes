import { useRef, useState } from "react";
import Movies from "./components/Movies";
import SearchForm from "./components/SearchForm";
import useFocusEffect from "./hooks/useFocusEffect";
import useMovies from "./hooks/useMovies";

// TODO: 1. handle list of movies be alphabetical order or not
// separar el formulario sin pasar para metros en la utilizacion del compoenete, realizar hooks personalizados para encapsular la logica
export default function App() {
  const firstTimeFocus = useRef(null); // del form
  const { movies, loading, getMovies } = useMovies();
  const [searchValue, setSearchValue] = useState(""); // del form

  useFocusEffect(firstTimeFocus);

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getMovies(searchValue);
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
