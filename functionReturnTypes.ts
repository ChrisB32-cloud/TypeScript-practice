// -- Function Return types --

// We can specify the type returned by a function. Even though
// TypeScript can ofter infer this, prefere the explicit annotation

// Add the type annotation after the function parameter list
//                                             -   here    -
// const function = (num1: number, num2: number): number =<

const addNums = (x: number, y: number): number => {
  return x + y;
};

// Note: we don't have to do this
// TypeScript can infer the return type
