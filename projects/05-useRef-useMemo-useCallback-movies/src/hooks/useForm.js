import { useState, useRef } from "react";
// import fetchMovies from "../services/fetchMovies";

// Nuevo gancho personalizado para el formulario
export function useForm() {
  const [searchValue, setSearchValue] = useState("");
  const firstTimeFocus = useRef(null);

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = async (event, onSearch) => {
    event.preventDefault();
    await onSearch(searchValue);
  };

  return {
    searchValue,
    handleSearchInputChanges,
    handleSubmit,
    inputRef: firstTimeFocus,
  };
}

// Gancho personalizado para películas
// export default function useMovies() {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const lastSearch = useRef("");

//   const searchMovies = async (searchValue) => {
//     try {
//       setLoading(true);
//       const result = await fetchMovies(searchValue);
//       setLoading(false);
//       return result;
//     } catch (error) {
//       setLoading(false);
//       console.error(error);
//     }
//   };

//   const getMovies = async (searchValue) => {
//     if (searchValue.trim() === "") {
//       console.info("No se realiza la petición porque la cadena de búsqueda está vacía");
//       return;
//     }
//     if (searchValue.trim() === lastSearch.current) {
//       console.info("No se realiza la petición porque la cadena de búsqueda es la misma");
//       return;
//     }

//     lastSearch.current = searchValue.trim();
//     setMovies(await searchMovies(searchValue));
//   };

//   return { movies, loading, getMovies };
// }

// Ejemplo de cómo usar el nuevo gancho para el formulario en App.js
// import { useForm } from "./hooks/useForm";
// // ... (importaciones restantes)

// export default function App() {
//   const { searchValue, handleSearchInputChanges, handleSubmit, inputRef } = useForm();
//   const { movies, loading, getMovies } = useMovies();

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <header>
//         {/* Uso del nuevo gancho para el formulario */}
//         <SearchForm
//           onSearchInputChange={handleSearchInputChanges}
//           onSubmit={(e) => handleSubmit(e, getMovies)}
//           searchValue={searchValue}
//           inputRef={inputRef}
//         />
//       </header>
//       <main className="w-full">
//         {loading ? <p>Loading...</p> : <Movies movies={movies} />}
//       </main>
//     </div>
//   );
// }
