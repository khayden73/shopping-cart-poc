import Catalog from "./products.json";

export function getCatalog() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Catalog);
    }, 1000);
  });
}
