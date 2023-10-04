// -- INTERFACE METHOD PARAMETERS --

interface Product {
  name: string;
  price: number;
  applyDiscountCode(discount: number): number;
}

const shirt: Product = {
  name: "hanes black shirt",
  price: 15,
  applyDiscountCode(code: number) {
    const updatedPrice = this.price * (1 - code);
    this.price = updatedPrice;
    return this.price;
  },
};

const newValue = shirt.applyDiscountCode(0.1);
console.log(newValue);
