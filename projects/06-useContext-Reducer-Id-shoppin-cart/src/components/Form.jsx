import React from "react";
import products from "../mocks/products.json";

// ['home-decoration', 'laptops', 'smartphones', 'fragrances', 'skincare', 'groceries']

// function SelectProduct({ categories }) {
//   return (
//     <select>
//       {categories.map((categori) => (
//         <option value={categori}>{categori}</option>
//       ))}
//     </select>
//   );
// }

function Form() {
  const categories = [
    "home-decoration",
    "laptops",
    "smartphones",
    "fragrances",
    "skincare",
    "groceries",
  ];

  const handleOptionSelected = (e) => {
    console.log("Has seleccionado la categoría:", e.target.value);

    // re-renderizar los productos por categoría seleccionada
  };

  return (
    <form>
      <fieldset>
        <legend>Encuentra lo que deceas</legend>
        <label>
          Producto:
          <input type="text" />
        </label>
        {/* <label>
          Apellido:
          <input type="text" />
        </label> */}
      </fieldset>

      <fieldset>
        {/* <legend>Contacto</legend>
        <label>
          Email:
          <input type="text" />
        </label> */}
        <label>
          Categoria:
          {/* <select>
            <option value="telefono">Teléfono</option>
            <option value="email">Email</option>
            <option value="fax">Fax</option>
          </select> */}
          {/* <SelectProduct categories={categories} /> */}
          <select
            onChange={(e) => {
              handleOptionSelected(e);
            }}
          >
            {categories.map((categori) => (
              <option value={categori}>{categori}</option>
            ))}
          </select>
        </label>
      </fieldset>

      <button type="submit">Buscar</button>
    </form>
  );
}

export default Form;
