// TODO: pasar modulo css a tailwind
import PropTypes from "prop-types";
import { useState } from "react";
import "../App.css";

function Movies({ movies }) {
  return (
    <ul className="grid w-full gap-2 grid-layout">
      {movies.map((item) => (
        <Movie key={item.id} {...item} />
      ))}
    </ul>
  );
}
Movies.propTypes = {
  movies: PropTypes.array.isRequired,
};

function Movie({ image, title, year, category }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <li
      className="text-center relative"
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      {showInfo && (
        <div className="absolute top-0 left-0 right-0 bottom-0 p-2 shadow backdrop-opacity-10 backdrop-invert bg-black/60">
          <h3 className="text-5xl font-semibold text-slate-100">{title}</h3>
          <span className="text-lg font-medium text-slate-200">{year}</span>-
          <span className="text-lg font-medium text-slate-200">{category}</span>
        </div>
      )}
      <div className="block h-[calc(var(--size)-var(--gap))]">
        <img
          src={image}
          alt={title}
          className="block w-full h-full object-cover fixed-width"
        />
      </div>
    </li>
  );
}
Movie.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Movies;
export { Movie };
