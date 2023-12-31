export default function Movie({ id, image, title, year }) {
  return (
    <section>
      <h3>{title}</h3>
      <p>{year}</p>
      <img src={image} alt={title} />
    </section>
  );
}
