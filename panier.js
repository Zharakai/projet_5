const getItems = localStorage.getItem('cart');
let items = JSON.parse(getItems);

let productsCartElement = document.getElementsByClassName('shopping-cart-products');
let productsColorElement = document.getElementsByClassName('shopping-cart-area-color');
let productsPriceElement = document.getElementsByClassName('shopping-cart-area-price');
let productsQuantityElement = document.getElementsByClassName('shopping-cart-area-quantity');
let productsTotalElement = document.getElementsByClassName('shopping-cart-area-total');

let result = '';
items.forEach(item => {
  result += `

  `

});

/*var removeCartItems = document.getElementsByClassName('btn-danger');

for (var i = 0; i < removeCartItems.length; i =+ 1) {
    var button = removeCartItems[i];
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
    })
}*/