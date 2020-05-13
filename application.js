const productsDOM = document.querySelector('.container-products');
const productDOM = document.querySelector('.container-product');

// Getting the products
class Products {
    async getProducts() {
        try {
            let result = await fetch('http://localhost:3000/api/teddies');
            let data = await result.json();
            return data;
        } catch (error) {
            Console.log(error);
        }  
    }
}

//Display products
class UserInterface {
    displayProducts(products) {
        let result = '';
        products.forEach(product => {
            result +=`
            <section class="container-products">
                <article>
                    <div class=""><a href="produit.html"><img src=${product.imageUrl} alt="Ours en peluche Norbert"></a></div>
                    <h3>${product.name} - ${product.price/100} €</h3>
                </article>
            </section>
            `;
        });
        productsDOM.innerHTML = result;
    }
}

//Display one product (page produit)


//Local storage
class Storage {
    static saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products));
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UserInterface();
    const products = new Products();

    // Get all products
    products.getProducts().then(products => {
        ui.displayProducts(products);
        Storage.saveProducts(products);
    });
});