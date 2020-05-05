const productsDOM = document.querySelector('.container-products');


// Getting the products
class Products {
    async getProducts() {
        try {
            let result = await fetch('http://localhost:3000/api/teddies');
            let data = await result.json();
            return data;
        } catch (error) {
            Console.log(error)
        }
        
    }
}

class UserInterface {

}

class Storage {

}

document.addEventListener("DOMContentLoaded", () => {
    const products = new Products();
    products.getProducts().then(data => console.log(data));
});