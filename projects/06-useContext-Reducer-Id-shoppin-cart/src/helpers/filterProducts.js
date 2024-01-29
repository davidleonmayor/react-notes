function filterByCategory(product, category) {
  return product.filter((element) => element.category === category);
}

// filtrar por rango de precios
function filterByRange(product, range) {
  return product.filter((element) => element.price >= range);
}

export { filterByCategory, filterByRange };
