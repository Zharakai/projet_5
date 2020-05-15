const teddy = document.querySelector('.teddy');
const productDOM = document.querySelector('.container-product');

// Isolate URL & id
const url = window.location.search;
const id = window.location.search.replace("?_id=", "");

// Getting the product
class Product {
    async getProduct() {
        try {
            let result = await fetch('http://localhost:3000/api/teddies/' + id);
            let data = await result.json();
            return data;
        } catch (error) {
            console.log(error);
        }  
    }
}

// Display product
class ProductInterface {
    displayProduct(product) {
        let result = `
            <article class="product__sheet">
                <div>
                    <img src="${product.imageUrl}">
                    <h3>${product.name} - ${product.price/100} €</h3>
                    <p>${product.description}</p>
                </div>
                <div class="container__btn">
                    <ul class="scrolling_menu">
                        <li class="scroll">Couleur de votre peluche
                            <ul class="under">${product.colors}</ul>
                        </li>
                    </ul>
                    <button class="btn__cart" disabled type="submit" data-id="">Ajouter au panier</button>
                </div>
            </article>
        `;
        productDOM.innerHTML = result;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const product = new Product();
    const pi = new ProductInterface

    //Get all products
    product.getProduct().then(product => pi.displayProduct(product));
});