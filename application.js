const productsDOM = document.querySelector('.container-products');

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

class UserInterface {
    displayProducts(products) {
        let result = '';
        products.forEach(product => {
            result +=`
            <section class="container-products">
                <article>
                    <div class=""><a href="produit.html"><img src=${product.imageUrl} alt="Ours en peluche Norbert"></a></div>
                    <h3>${product.name} - ${product.price} €</h3>
                </article>
                <article>
                    <div class=""><a href="produit.html"><img src="./images/teddy_2.jpg" alt="Ours en peluche Arnold"></a></div>
                    <h3>Arnold - 39 €</h3>
                </article>
                <article>
                    <div class=""><a href="produit.html"><img src="./images/teddy_3.jpg" alt="Ours en peluches Lenny et Carl"></a></div>
                    <h3>Lenny et Carl - 59 €</h3>
                </article>
                <article>
                    <div class=""><a href="produit.html"><img src="./images/teddy_4.jpg" alt="Ours en peluche Gustav"></a></div>
                    <h3>Gustav - 45 €</h3>
                </article>
                <article>
                    <div class=""><a href="produit.html"><img src="./images/teddy_5.jpg" alt="Ours en peluche Garfunkel"></a></div>
                    <h3>Garfunkel - 55 €</h3>
                </article>
            </section>
            `;
        });
        productsDOM.innerHTML = result;
    }
}

class Storage {

}

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UserInterface();
    const products = new Products();

    // Get all products
    products.getProducts().then(products => console.log(products));
});