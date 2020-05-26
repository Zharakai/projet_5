const productsDOM = document.querySelector('.container-products');

// Getting the products
class Products {
  async getProducts() {
    try {
      const result = await fetch('http://localhost:3000/api/teddies');
      const data = await result.json();
      return data;
    } catch (error) {
      return console.log(error);
    }
  }
}

// Display products
class UserInterface {
  displayProducts(products) {
    let result = '';
    products.forEach((product) => {
      result += `
        <article>
          <div class="teddy"><a href="produit.html?_id=${product._id}"><img src=${product.imageUrl} alt="Ours en peluche ${product.name}"></a></div>
          <h3>${product.name} - ${product.price/100} €</h3>
        </article>
      `;
    });
    productsDOM.innerHTML = result;
  }
}

/*// Local storage
class Storage {
  static saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
  }
}*/

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UserInterface();
  const products = new Products();

  // Get all products
  products.getProducts().then((products) => {
    ui.displayProducts(products);
    //Storage.saveProducts(products);
  });
});