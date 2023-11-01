// -- EQUALITY NARROWING --

// equality Type Guards onvole comparing types to each
// other before doing certain operations with values

// By checking two values against one another, we can be
// they're both the same before wirking with them in a
// type-specfic way

const someFunction = (x: string | boolean, y: string | number) => {
  if (x === y) {
    x.toUpperCase();
    y.toUpperCase();
  } else {
    console.log(x);
    console.log(y);
  }
};

someFunction("hello", "hello");

// When using equality narrowing we want to make sure to use triple equals
// ( === ), when we use double equals ( == ), TypeScript may not catch our
// the correct type - ex 3 === "3" catches error 3 == "3" doesn't catch error
