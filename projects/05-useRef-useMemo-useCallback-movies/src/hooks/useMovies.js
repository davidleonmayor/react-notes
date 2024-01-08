import { useState, useRef } from "react";
import fetchMovies from "../services/fetchMovies";

// Gancho personalizado para películas
export default function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const lastSearch = useRef("");

  const searchMovies = async (searchValue) => {
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

  const getMovies = async (searchValue) => {
    if (searchValue.trim() === "") {
      console.info(
        "No se realiza la petición porque la cadena de búsqueda está vacía"
      );
      return;
    }
    if (searchValue.trim() === lastSearch.current) {
      console.info(
        "No se realiza la petición porque la cadena de búsqueda es la misma"
      );
      return;
    }

    lastSearch.current = searchValue.trim();
    setMovies(await searchMovies(searchValue));
  };

  return { movies, loading, getMovies };
}
