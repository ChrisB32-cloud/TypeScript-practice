// -- INTRODUCTION TUPLES --

// Tuples
// Tuples are a special type exclusive to TypeScript
// they don't exist in JS

// Tuples are arrays of fixed lengths and ordered with
// specfic types - like supre rigid arrays

// Creating a Tuple with it's type definition
let myTuple: [number, string];

// CAN assign it values per it's spec
myTuple = [25, "string of 25"];

// Can't assign it values of a different structure
myTuple = ["string of 25", 25];

// ex
// Will complain is array is empty
const rgbColors: [number, number, number] = [123, 432, 214];
// If we try and add an extra value it will complain
const rgbColors_1: [number, number, number] = [123, 432, 214, 321];

type EuroCoordinates = {
  x: number;
  y: number;
};

type ExtendEuroCoordinates = {
  lat: number;
  long: number;
};

let appCoords: [EuroCoordinates, ExtendEuroCoordinates];
appCoords = [
  { x: 24, y: 18 },
  { lat: 87, long: 89 },
];
