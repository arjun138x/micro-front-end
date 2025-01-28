import("products/ProductsIndex")
  .then((module) => module.default())
  .catch((err) => console.error("Failed to load ProductsIndex", err));
import "cart/CartShow";

console.log("container");
