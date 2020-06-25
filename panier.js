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
          <td><span class="quantity">${1}</span></td>
          <td><span class="result__total">${parseInt(item.price) * 1}</span>€</td>
        `;
        cartContainer.appendChild(el);
      });
      const items = document.querySelectorAll('tr.product[data-uid]');
      let cartTotal = 0;

      for (const item of items) {
        const itemTotal = item.getElementsByClassName('result__total')[0].textContent;
        cartTotal += parseInt(itemTotal);
      }
      cartTotalElement.innerHTML = cartTotal;

      cartItems.forEach((item) => {
        //console.log(item.id, item.color)
        let quantity = document.getElementsByClassName('quantity')[0].innerHTML;
        //console.log(quantity);
        //if (item.id === id && item.color === color) {
          
        //}
      })

      // if (cartItems.length === 1) {
        // continue;
      // }
      // console.log(cartItems);
      for (let i = 0; i <= items.length; i += 1) {
        const UID = items[i].dataset.uid;
        const correspondingItems = document.querySelectorAll('[data-uid="'+UID+'"]');
        const itemsCount = correspondingItems.length;
        console.log(itemsCount);
        
        if (itemsCount === 1) {
          continue;
        }

        correspondingItems[0].getElementsByClassName('quantity')[0].innerHTML = itemsCount;

        // total à calculer

        const iterableItems = document.querySelectorAll('[data-uid="'+UID+'"] ~ [data-uid="'+UID+'"]');
        for (const itemToDelete of iterableItems) {
          console.log(itemToDelete);
          itemToDelete.parentNode.removeChild(itemToDelete);
        }
        
        // console.log(UID);
        // if (UID === UID) {
          // console.log(UID);
          // items.remove();
        // }
      }
      
      //for (const item of items) {
        //if (el.length === 1) {
        //continue;
      //} else {

        //}
      //}
      
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
