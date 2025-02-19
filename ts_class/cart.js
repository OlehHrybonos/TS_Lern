"use strict";
class Cart {
    constructor() {
        this.products = [];
        this.delivery = null;
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProduct(id) {
        this.products = this.products.filter(product => product.id !== id);
    }
    calculateTotal() {
        return this.products.reduce((sum, product) => sum + product.price, 0);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkout() {
        if (this.products.length === 0 || this.delivery === null) {
            throw new Error('Немає продуктів або параметрів доставки');
        }
        return 'Все гаразд!';
    }
}
const cart = new Cart();
const product1 = { id: 1, name: 'Футболка', price: 200 };
const product2 = { id: 2, name: 'Штани', price: 500 };
cart.addProduct(product1);
cart.addProduct(product2);
cart.removeProduct(1);
const total = cart.calculateTotal();
console.log(total); // Виведе 500
const deliveryToHome = {
    type: 'toHome',
    date: new Date(),
    address: 'вул. Пушкіна, 10'
};
cart.setDelivery(deliveryToHome);
const result = cart.checkout();
console.log(result); // Виведе "Все гаразд!"
