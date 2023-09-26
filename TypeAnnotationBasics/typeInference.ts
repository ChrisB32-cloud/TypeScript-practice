// -- Type Inference --
// Type Inference refers to the TypeSript compiler's ability to infer types from
// certain values in you code

// TypeScript can remember a value's type even if you didn't
// provide a tyoe annotation, and it will enforce that
// type moving forward

// Creating a variable with a value
// but without a type annotation
let x: number = 27;
x = "27";
// Error - Type 'string' is not assignable
// to type 'number'

// So with type inference we can set a variable without
// declaring what kind type the value is
let myShow = "Super man & Loius";

// Instead of

let myShow_2: string = "Super man & Louis";
