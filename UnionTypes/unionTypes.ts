// -- UNION TYPES --

// Union types allows us to give a value a few different possible
// types. If the eventual value's types is included, TypeScript
//  will be happy

// We can create a union type by using the single | (pipe character)
// to separate the types we want to include. It's like saying, "This
// thing is allowed to be this, this, or this". TypeScript will
// enforce it from there.

// ex
const guessAge = (age: number | string): string => {
  return `Your age is: ${age}`;
};

guessAge(30);
guessAge("30");

// ex with error
guessAge({ age: 30 });

const isActive = (active: boolean | string): string => {
  return `The status: ${active}`;
};

isActive(true);
isActive("true");

let currentAlititude: number | string = 1200;
currentAlititude = "1200";

type NewPoint = {
  x: number;
  y: number;
};

type NewLocation = {
  lat: number;
  long: number;
};

let currentLocation: NewPoint | NewLocation = { x: 24, y: 98 };
currentLocation = { lat: 329.1231, long: 932.321 };
