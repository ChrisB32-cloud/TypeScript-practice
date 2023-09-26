// -- Function Return types --

// We can specify the type returned by a function. Even though
// TypeScript can ofter infer this, prefere the explicit annotation

// Add the type annotation after the function parameter list
//                                             -   here    -
// const function = (num1: number, num2: number): number =>

const addNums = (x: number, y: number): number => {
  return x + y;
};

// Note: we don't have to do this
// TypeScript can infer the return type

// Reason to use?
// Say we forget to add return to our function and we call it
// If we hover over our function in the ide we see that it returns void ( means nothing )

function square_4(num: number) {
  num * num;
}
square_4(2);

// ex catchs the error that there is no return key
// word for returning the value
function square_5(num: number): number {
  num * num;
}
square_5(2);

// Working ex
function square_6(num: number): number {
  return num * num;
}
square_6(2);

// ex
const numberIsEven = (num: number): boolean => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

numberIsEven(18);

// ex what if we have two different return types
// when we hover we see string | number which is a union type
// Revisit union types in later section

function rando(num: number) {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}
