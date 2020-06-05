let productsCartElement = document.getElementsByClassName('shopping-cart-products');
let productsColorElement = document.getElementsByClassName('shopping-cart-area-color');
let productsPriceElement = document.getElementsByClassName('shopping-cart-area-price');
let productsQuantityElement = document.getElementsByClassName('shopping-cart-area-quantity');
let productsTotalElement = document.getElementsByClassName('shopping-cart-area-total');

const getItems = localStorage.getItem('cart');
let items = JSON.parse(getItems);

// Getting the products
class Products {
  async getProducts() {
    try {
      const result = await fetch('http://localhost:3000/api/teddies');
      const data = await result.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

class ProductsId {
  async productsId() {
    for (let i = 0; i < items.length; i += 1) {
      const itemsId = items[i].id;
    }
  }
}

class UserInterface {
  displayItems(items) {
    let result = '';
    let resultColor = '';
    let resultPrice = '';
    let resultQuantity = '';
    let resultTotal = '';
    items.forEach((item) => {
  
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const products = new Products();
  const productsId = new ProductsId
  const ui = new UserInterface(); 

  // Get all products
  products.getProducts().then((products) => {
    productsId.productsId();
    ui.displayItems(items)
  });
});

/*var removeCartItems = document.getElementsByClassName('btn-danger');

for (var i = 0; i < removeCartItems.length; i =+ 1) {
    var button = removeCartItems[i];
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
    })
}*/