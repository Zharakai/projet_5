// Getting the product
class Product {
  constructor(id) {
    this.id = id;
  }

  async getProduct() {
    try {
      const result = await fetch(`http://localhost:3000/api/teddies/${this.id}`);
      this.data = await result.json();
      return this.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
