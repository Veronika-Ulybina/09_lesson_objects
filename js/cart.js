'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() {
    return this.totalPrice;
  },
  add(name, price, amount = 1) {
    this.items.push({
        name,
        price,
        amount,
      });
    this.increaseCount();
    this.calculateItemPrice()
  },
  increaseCount() {
    this.count = this.items.reduce((acc, item) => acc + item.amount, 0);
  },
  calculateItemPrice() {
    this.totalPrice += this.items.reduce((acc, item) => item.price * item.amount, 0);
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.getTotalPrice());
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
}

cart.add('Apple', 40);
cart.add('Banana', 100);
cart.add('Orange', 50);
cart.print();
cart.clear();
