const teddy = document.querySelector('.teddy');
const productDOM = document.querySelector('.container-product');
const btn = document.querySelector('.btn__cart');
const selectColor = document.querySelector('select');

let cart = [];

// Isolate URL & id
const url = window.location.search;
const id = url.replace('?_id=', '');

// Getting the product
class Product {
  async getProduct() {
    try {
      const result = await fetch(`http://localhost:3000/api/teddies/${id}`);
      const data = await result.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

// Product Interface
class ProductInterface {
  displayProduct(product) {
    const { colors } = product;
    const result = `
        <div>
          <img src="${product.imageUrl}">
          <h3>${product.name} - ${product.price / 100} €</h3>
          <p>${product.description}</p>
        </div>
    `;
    for (let i = 0; i < colors.length; i++) {
      selectColor.innerHTML += `
      <option value="${colors[i]}">${colors[i]}</option>
      `;
    }
    productDOM.innerHTML = result;
  }
  getBagButton() {
    btn.addEventListener('click', (event) => {
      // const inCart = cart.find(item => item.id === id);
      // Get product from localStorage
      //let cartItem = Storage.getProduct(id)
      //console.log(cartItem);
    });
  }
}

// Local storage
/*class Storage {
  static saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
  static getProduct(id) {
    let products = JSON.parse(localStorage.getItem('products'));
    return products.find(product => product.id === id);
  }
}*/


document.addEventListener('DOMContentLoaded', () => {
  const product = new Product();
  const pi = new ProductInterface();

  // Get product
  product.getProduct().then((product) => pi.displayProduct(product)).then(() => {
    pi.getBagButton();
    //Storage.saveProducts(products);
  });
});
