// Product Interface
class ProductInterface {
  constructor(product) {
    this.product = product;
    this.product.price /= 100;
    this.selectColorElement = document.querySelector('select');
    this.productDOM = document.querySelector('.container-product');
    this.addToCartButton = document.querySelector('.btn__cart');
  }

  displayProduct() {
    const { colors } = this.product;
    const result = `
      <div>
        <img class"image" src="${this.product.imageUrl}">
        <h3><span class="name">${this.product.name}</span> - <span class="price">${this.product.price}</span> €</h3>
        <p>${this.product.description}</p>
      </div>
    `;
    for (let i = 0; i < colors.length; i += 1) {
      this.selectColorElement.innerHTML += `
      <option value="${colors[i]}">${colors[i]}</option>
      `;
    }
    this.productDOM.innerHTML = result;
  }

  getBagButton() {
    this.addToCartButton.addEventListener('click', () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const teddy = {
        // eslint-disable-next-line no-underscore-dangle
        id: this.product._id,
        name: document.querySelector('.name').innerText,
        price: document.querySelector('.price').innerText,
        color: this.selectColorElement.value,
      };
      cart.push(teddy);
      localStorage.setItem('cart', JSON.stringify(cart));
      // Set cart counter
      let cartItems = document.getElementsByClassName('cart__counter');
      console.log(cartItems.textContent)
      console.log(cart.length);
      const result = `
        ${cart.length}
      `;
      cartItems.textContent = result;
      /*if (cart === null || cart === undefined) {
        return itemsTotal.innerHTML = 0;
      } else {
        itemsTotal.innerHTML = cart.length;
        console.log(cart.length);
      }*/
    });
    
  }
}
