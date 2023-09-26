// -- ARRAY TYPES --

// Arrays can be types using a type annotation followed
// by empty array brackets, like number[] for an array of numbers

// Note: these arrays only allow data of that one
// type inside them. More in future sections

// Using Brackets
// String array
let name_2: string[] = ["new", "array"];

// Number array
let numbers_2: number[] = [1, 2, 3, 4, 5];

// Alternate syntax
// String array
let name_3: Array<string> = ["new", "array"];

// Number array
let number_3: Array<number> = [1, 2, 3, 4, 5];

// We have to be careful when using empty array

// ex
// In this ex we can see that we are getting an error
// and that because we are saying this is of
// type empty array
const activeUser: [] = [];
activeUser.push("clark");

// Even if we intialize we will still see the srror
const activeUser_2: [] = [1];

// Working ex
const activeUser_3: string[] = [];
// Now we can push into array
activeUser_3.push("clark");

// Not implicity specifing a array type
// will set the array to type any

// ex
// never
const activeUser_4 = [];
