const teddy = document.querySelector('.teddy');
const productDOM = document.querySelector('.container-product');

// Getting the products
class Products {
    async getProducts() {
        try {
            let result = await fetch('http://localhost:3000/api/teddies/');
            let data = await result.json();
            return data;
        } catch (error) {
            Console.log(error);
        }  
    }
}

//Display the product

class ProductInterface {
    displayProductInterface(products) {
        let result = '';
        products.forEach(product => {
            result += `
                <section class="container-product">
                    <article class="product__sheet">
                        <div>
                            <img src="${product.imageUrl}">
                            <h3>${product.name} - ${product.price/100} €</h3>
                            <p>${product.description}</p>
                        </div>
                        <div class="container__btn">
                            <ul class="scrolling_menu">
                                <li class="scroll">Couleur de votre peluche
                                    <ul class="under">
                                        <li>Tan</li>
                                        <li>Chocolate</li>
                                        <li>Black</li>
                                        <li>White</li>
                                    </ul>
                                </li>
                            </ul>
                            <button class="btn__cart" type="submit" data-id="">Ajouter au panier</button>
                        </div>
                    </article>
                </section>
            `;
        });
        productDOM.innerHTML = result;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const pi = new ProductInterface;
    const products = new Products();

    products.getProducts().then(products => {
        pi.displayProductInterface(products)
    });
});
            