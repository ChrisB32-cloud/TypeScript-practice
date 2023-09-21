// -- UNION TYPES AND ARRAYS --

const myNumbers: number[] = [1, 2, 3, 4];

const stuff: any[] = [
  1,
  2,
  3,
  4,
  true,
  "Hey there buddy",
  "this way is probably not a good idea",
  false,
  { nope: "nope" },
];

// What if we have an array that we want to put different stuff in?
const otherStuff: (string | number)[] = [1, 2, 3, 45, "5", 6, "7", "8"];

// ex of types that we didn't specify
// we see any error because we didn't mention objects or booleans
const otherStuff_1: (string | number)[] = [
  1,
  2,
  3,
  45,
  "5",
  6,
  "7",
  "8",
  { nope: "nope" },
  true,
];

// Note: we can't do string[] | number[]
// With that syntax we would have to do either an all string
// array or an all number array
// ex
const numberStuff: number[] | string[] = [1, 2, 3, 4];
// ex works with one or the other
const bothStuff: number[] | string[] = [1, 2, 3, 4, "5"];

type actPoint = {
  x: number;
  y: number;
};

type actCoord = {
  lat: number;
  long: number;
};

// ex with types
const directions: (actCoord | actPoint)[] = [
  { x: 45, y: 55 },
  { lat: 78, long: 98 },
];
