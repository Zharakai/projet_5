let productsCartElement = document.getElementsByClassName('shopping-cart-product');
let productsColorElement = document.getElementsByClassName('shopping-cart-area-color');
let productsPriceElement = document.getElementsByClassName('shopping-cart-area-price');
let productsQuantityElement = document.getElementsByClassName('shopping-cart-area-quantity');
let productsTotalElement = document.getElementsByClassName('shopping-cart-area-total');
let resultTotalElement = document.getElementsByClassName('result__total');
let cartTotal = document.getElementsByClassName('cart__total');
let deleteCartBtn = document.getElementsByClassName('delete__cart__btn');

let titleElement = document.getElementsByClassName('h1__cart');

const cartItems = JSON.parse(localStorage.getItem('cart')) || []; 

// const getItems = localStorage.getItem('cart');
// let items = JSON.parse(getItems);

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
    for (let i = 0; i <= cartItems.length; i += 1) {
      const itemsId = cartItems[i].id;
      return console.log(itemsId);
    }
  }
}

class UserInterface {
  displayItems(cartItems) {
    if (!cartItems.length) {
      titleElement[0].textContent = 'Désolé, votre panier est vide !';
    } else {
      let result = '';
      let resultColor = '';
      let resultPrice = '';
      let resultQuantity = '';
      let resultTotal = '';
      let resultCartTotal = '';
      cartItems.forEach((item) => {
        result +=`<div class="shopping-cart-product"><img src=${item.image}><p>${item.name}</p></div>`;
        resultColor += `<p>${item.color}</p>`;
        resultPrice += `<p>${item.price}€</p>`;
        resultQuantity += `<p>${1}</p>`;
        resultTotal += `<p><span class="result__total">${parseInt(item.price) * 1}</span>€</p>`;

        resultCartTotal += parseInt(item.price);
      });

      productsCartElement[0].innerHTML = result;
      productsColorElement[0].innerHTML = resultColor;
      productsPriceElement[0].innerHTML = resultPrice;
      productsQuantityElement[0].innerHTML = resultQuantity;
      productsTotalElement[0].innerHTML = resultTotal;
      cartTotal[0].innerHTML = resultCartTotal;
      // deleteCartBtn.addEventListener('click', () => {
        // console.log(coucou)
      // });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const products = new Products();
  const productsId = new ProductsId
  const ui = new UserInterface(); 

  // Get all products
  products.getProducts().then((products) => {
    // productsId.productsId();
    ui.displayItems(cartItems)
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