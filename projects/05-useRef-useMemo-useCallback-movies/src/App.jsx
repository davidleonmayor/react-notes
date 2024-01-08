import Movies from "./components/Movies";
import SearchForm from "./components/SearchForm";
import useMovies from "./hooks/useMovies";
import { useForm } from "./hooks/useForm";

export default function App() {
  const { searchValue, handleSearchInputChanges, handleSubmit, inputRef } =
    useForm();
  const { movies, loading, getMovies } = useMovies();

  return (
    <div className="flex flex-col items-center justify-center">
      <header>
        <SearchForm
          onSearchInputChange={handleSearchInputChanges}
          onSubmit={(e) => handleSubmit(e, getMovies)}
          searchValue={searchValue}
          inputRef={inputRef}
        />
      </header>
      <main className="w-full">
        {loading ? <p>Loading...</p> : <Movies movies={movies} />}
      </main>
    </div>
  );
}
