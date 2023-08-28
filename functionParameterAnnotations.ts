// -- Function Parameter Annotations --

// Function parameter types

// In TypeScript, we can specify the type of function
// parameters in a funtion definition

// This allows TypeScript to enforce the types for the
// values being passed into your function

// Typing parameters is just like typing variables

// When annotating a variable in a function call
// we annotate as we would any other variable
// ex nameOfvariable: string

// If we don't the passed value to the function will
// default to type any

// ex with no parameter annotation
// Doesn't catch methods on num
function square(num) {
  num.toUpperCase();
  num();
  return num * num;
}

square(4);
square(false);
square("Hello");

// ex with parameter annotation
// Catchs methods on num
function square_2(num: number) {
  num.toUpperCase();
  num();
  return num * num;
}

// Also, will catch error when trying to call
// a function
square_2(4);
square_2(false);
square_2("Hello");

// String ex
function greetings(person: string) {
  return `Hey there ${person}`;
}

// -- More on Function Parameter Annotations --
// Note: when passing mulitple variables/arguments
// into a function, they must be in order

function doSomething(person: string, personAge: number, isFunny: boolean) {
  return `Hi! My name is ${person}, I'm ${personAge} and I'm ${
    isFunny === true ? "funny" : "not funny at all"
  } `;
}

// ex
doSomething("clark", 85, true);
// ex with too many variable/arguments
doSomething("clark", 85, true, "tooManyvarible");
// ex with missing variables/arguments
doSomething("clark", 85);
// ex with variable/arguments out of order
doSomething(85, true, "clark");
