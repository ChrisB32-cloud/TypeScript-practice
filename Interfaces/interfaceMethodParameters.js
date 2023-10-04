// -- INTERFACE METHOD PARAMETERS --
var shirt = {
    name: "hanes black shirt",
    price: 15,
    applyDiscountCode: function (code) {
        var updatedPrice = this.price * (1 - code);
        this.price = updatedPrice;
        return this.price;
    },
};
var newValue = shirt.applyDiscountCode(0.1);
console.log(newValue);
