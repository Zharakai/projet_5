// const teddy = document.querySelector('.teddy');

// Isolate URL & id
const url = window.location.search;
const id = url.replace('?_id=', '');

document.addEventListener('DOMContentLoaded', () => {
  const product = new Product(id);

  // Get product
  product.getProduct().then((item) => {
    const pi = new ProductInterface(item);
    pi.displayProduct();
    pi.getBagButton();
  });
});
