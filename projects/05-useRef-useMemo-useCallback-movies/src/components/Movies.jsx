// TODO: pasar modulo css a tailwind

import "../App.css";

function Movies({ movies }) {
  return (
    <ul
      className="grid w-full gap-2 grid-layout"
      // style={{
      //   gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      // }}
    >
      {movies.map((item, index) => (
        <Movie key={index} {...item} />
      ))}
    </ul>
  );
}

function Movie({ id, image, title, year }) {
  return (
    <div className="text-center">
      <h3>{title}</h3>
      <p>{year}</p>
      <li
        className="block h-[calc(var(--size)-var(--gap))]" // calcular el tamaño de la imagen
      >
        <img
          src={image}
          alt={title}
          className="block w-full h-full object-cover fixed-width"
        />
      </li>
    </div>
  );
}

export default Movies;
export { Movie };
