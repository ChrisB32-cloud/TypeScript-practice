// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
var products = [
    { name: "coffee mug", price: 11.5 },
    { name: "tee shirt", price: 20 },
    { name: "sanddles", price: 15 },
    { name: "coffee mug", price: 11.5 },
];
var getTotal = function (products) {
    //   let sum = products.reduce((acc, curr) => {
    //     return acc + curr.price;
    //   }, 0);
    //   return sum;
    var sum = 0;
    products.forEach(function (product) {
        sum += product.price;
    });
    return sum;
};
var sumOfProducts = getTotal(products);
console.log(sumOfProducts);
