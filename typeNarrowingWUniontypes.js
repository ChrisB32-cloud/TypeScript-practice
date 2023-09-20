// -- TYPE NARROWING WITH UNION TYPES --
// Unions - Narrowing the Type
// Narrowing the tyoe is simply doing a type check before
// working with a value. If your calue is a string you may want to
// use it differently than if you got a number.
// Since unions allow multiple types for a value, it's good to
// check what came through before working with it
function printMyAge(age) {
    console.log("Your age: ".concat(age));
}
printMyAge("32");
printMyAge(32);
// ex not working because TypeScript know that price isn't always a number
function calTax(price, tax) {
    //   return price * 0.6;
}
// ex same issue if we want to use a string method on price
function calTax_2(price, tax) {
    //   price.replace("$", "");
}
// How to fix this?
// Type Narrowing
function calTax_3(price, tax) {
    if (typeof price === "string") {
        price.replace("$", "");
    }
    if (typeof price === "number") {
        return price * 0.6;
    }
}
function calTax_4(price, tax) {
    if (typeof price === "string") {
        price.replace("$", "");
    }
    else {
        return price * 0.6;
    }
}
function calTax_5(price, tax) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * 0.6;
}
var checkTax = calTax_5(4000, 0.11);
var checkTax_2 = calTax_5("$4000", 0.11);
console.log(checkTax);
console.log(checkTax_2);
