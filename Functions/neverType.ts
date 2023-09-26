//  -- Never --

// The never type represents values that NEVER occur. We might
// use it to annotate a function that always throws an exception,
// or a function that never finishes executing

// Don't confuse with voild - void returns indefined or null, which
// is technically still a type of value. With never, a function
// doesn't even finsh executing

// ex of a function that doesn't finish
const neverStop = (): never => {
  while (true) {
    console.log("Still going");
  }
};

// ex of a function that throws an execption
const giveError = (msg: string) => {
  throw new Error(msg);
};

// ex if we don't give the return type it will by default be void
// when we hover we see void
function makeError(msg: string) {
  throw new Error(msg);
}

// ex we need to explicitly set never if we know we don't want the function
// to ever return
// will also catch errors
// we see never now when we hover over the function
function makeError_2(msg: string): never {
  return msg;
  throw new Error(msg);
}

// ex with no errors
function makeError_3(msg: string): never {
  throw new Error(msg);
}

// ex of another time to use never is with a function
// that never stops executing
function gameLoop(): never {
  while (true) {
    console.log("Game loop running");
  }
  return true;
}

// ex with no error
function gameLoop_2(): never {
  while (true) {
    console.log("Game loop running");
  }
}

// Comparing void and never, void is technically value were as
// never is say the function should never even have the
// opertunity to return
