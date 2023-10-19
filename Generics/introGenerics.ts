// -- GENERICS --

// Generics allos us to define reusable functions and
// classes that work with multiple types rather than a
// single type

// ex

function wrapINArray<T>(element: T): T[] {
  return [element];
}

// With Generics we can basically say this function
// accepts any types and whatever that types
// is we will return that same type

// Give a string, return a string
// Give a number, return a number

// Union types are not the same as Generics

// const nums: number[] = []
// Built in Generic
const nums: Array<number> = [];
const colors: Array<string> = [];
