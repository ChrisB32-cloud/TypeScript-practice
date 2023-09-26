// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
var highScore = 0;
highScore = true;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
var AlotOfStuff = [1, 2, 3, 5, 6, 7];
AlotOfStuff = ["1", "2", "3", "5", "6", "7"];
// Create an array called colors that can hold a mixture of RGB and HSL color types
var myColors = [
    { r: 234, g: 543, b: 432 },
    { h: 23343.34, s: 432343.23, l: 239423.98 },
];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
function greet(name) {
    if (typeof name === "string") {
        return "Hello ".concat(name);
    }
    else {
        return name.map(function (n) { return "Hello ".concat(n); });
    }
}
var checkFunc = greet("Clark");
var checkFunc_2 = greet(["Lex", "clark", "Marc"]);
console.log(checkFunc);
console.log(checkFunc_2);
