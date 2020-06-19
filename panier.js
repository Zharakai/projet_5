let productsCartElement = document.getElementsByClassName('shopping-cart-product');
let productsColorElement = document.getElementsByClassName('shopping-cart-area-color');
let productsPriceElement = document.getElementsByClassName('shopping-cart-area-price');
let productsQuantityElement = document.getElementsByClassName('shopping-cart-area-quantity');
let productsTotalElement = document.getElementsByClassName('shopping-cart-area-total');
let resultTotalElement = document.getElementsByClassName('result__total');
let cartTotalElement = document.getElementsByClassName('cart__total')[0];
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
      const cartContainer = document.getElementsByClassName('shopping-items')[0];
      cartItems.forEach((item) => {
        const el = document.createElement('tr');
        el.dataset.uid = `${item.id}-${item.color}`;
        el.className = "product";
        el.innerHTML =`
          <td><img src=${item.image}></td>
          <td>${item.name}</td>
          <td>${item.color}</td>
          <td>${item.price}€</td>
          <td>${1}</td>
          <td><span class="result__total">${parseInt(item.price) * 1}</span>€</td>
        `;
        cartContainer.appendChild(el);
      });
      const items = document.querySelectorAll('tr.product[data-uid]');
      let cartTotal = 0;
      for (const item of items) {
        console.log(item);
        const itemTotal = item.getElementsByClassName('result__total')[0].textContent;
        console.log(itemTotal)
        cartTotal += parseInt(itemTotal);
        console.log(cartTotal)
      }
      cartTotalElement.innerHTML = cartTotal;
      /*let result = '';
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
        resultTotal += `<p><span class="result__total">${parseInt(item.price, 10) * 1}</span>€</p>`;

        resultCartTotal += parseInt(item.price, 10);
        
      });
      productsCartElement[0].innerHTML = result;
      productsColorElement[0].innerHTML = resultColor;
      productsPriceElement[0].innerHTML = resultPrice;
      productsQuantityElement[0].innerHTML = resultQuantity;
      productsTotalElement[0].innerHTML = resultTotal;

      /*const teddiesTotal = [...resultTotalElement];
      console.log(teddiesTotal);
      teddiesTotal.forEach(teddy => {
        let shoppingCartTotal = parseInt(teddy.innerHTML, 10)
        console.log(shoppingCartTotal);
        resultCartTotal += shoppingCartTotal;
        console.log(resultCartTotal)
      });*/
      cartTotal[0].innerHTML = resultCartTotal;
      // deleteCartBtn.addEventListener('click', () => {
        // console.log(coucou)
      // });*/
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