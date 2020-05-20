const teddy = document.querySelector('.teddy');
const productDOM = document.querySelector('.container-product');
const btn = document.querySelector('.btn__cart');
const selectColor = document.querySelector('select')

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

//Product Interface
class ProductInterface {
    displayProduct(product) {
        let colors = product.colors
        let result = `
                <div>
                    <img src="${product.imageUrl}">
                    <h3>${product.name} - ${product.price/100} €</h3>
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
        btn.addEventListener("click", (event) => {
            console.log(event);
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const product = new Product();
    const pi = new ProductInterface

    //Get product
    product.getProduct().then(product => pi.displayProduct(product)).then(() => {
        pi.getBagButton();
    });
});