interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  interface DeliveryToHome {
    type: 'toHome';
    date: Date;
    address: string;
  }
  
  interface DeliveryToPickupPoint {
    type: 'toPickupPoint';
    date: Date;
    shopId: number;
  }
  
  type Delivery = DeliveryToHome | DeliveryToPickupPoint;
  
  class Cart {
    products: Product[] = [];
    delivery: Delivery | null = null;
  
    addProduct(product: Product): void {
      this.products.push(product);
    }
  
    removeProduct(id: number): void {
      this.products = this.products.filter(product => product.id !== id);
    }
  
    calculateTotal(): number {
      return this.products.reduce((sum, product) => sum + product.price, 0);
    }
  
    setDelivery(delivery: Delivery): void {
      this.delivery = delivery;
    }
  
    checkout(): string {
      if (this.products.length === 0 || this.delivery === null) {
        throw new Error('Немає продуктів або параметрів доставки');
      }
  
      return 'Все гаразд!';
    }
  }


  const cart = new Cart();

const product1: Product = { id: 1, name: 'Футболка', price: 200 };
const product2: Product = { id: 2, name: 'Штани', price: 500 };

cart.addProduct(product1);
cart.addProduct(product2);

cart.removeProduct(1);

const total = cart.calculateTotal();
console.log(total); // Виведе 500

const deliveryToHome: DeliveryToHome = {
  type: 'toHome',
  date: new Date(),
  address: 'вул. Пушкіна, 10'
};

cart.setDelivery(deliveryToHome);

const result = cart.checkout();
console.log(result); // Виведе "Все гаразд!"