// -- Annonymous Functions --

// When TypeScript can infer how an unnamed function is going to be called
//  it can automatically infer it's parameters' types.

const numbers = [1, 2, 3, 4];

// Contextual typing on an arrow function
// TypeScript is able to figure out iteral variable type
// based off the context of it's use

// ex In this loop, TypeScript knows num is a number
numbers.forEach((num) => {
  return num;
});

const shirts = ["blue", "brown", "green", "hazel"];

// ex in this loop TypeScript knows in a string
// Will also catch if we try to use incorrect methods for
// the variable type
shirts.map((shirt) => {
  return shirt.toFixed();
});
