// Strings
let movieTitle_2: string = "No country for old men";
movieTitle_2 = "The Lost Boys";

// Numbers
let gameSaves: number = 20;
gameSaves += 2;

// Boolean
let active: boolean = false;
active = true;

// Type Inference

// Strings
let aShow = "this show ex";
aShow = "Smallville";

// Numbers
let myAge = 20;
myAge = 34;

// Boolean
let isFunny = false;
isFunny = true;

// Any type
let thing: any = "hello there";
thing = 24;
thing = false;
// Keep in mind when using any we will lose the ability
// to check the variable
// thing()
// thing.toUpperCase()
// ^ potential issues

// Delayed initialization & Implicit Any
const movies = [
  "Dude where's my car",
  "The Thing",
  "Gremlines",
  "The Lost Boys",
];

let foundMyMovie;
// If we know what the variable will be used for we can implicity set it
// to it's tyoe this way below
let foundMyMovie_2: string;

for (let movie of movies) {
  if (movie === "The Lost Boys") {
    foundMyMovie = movie;
    foundMyMovie_2 = movie;
  }
}

// Since we didn't infer a type it gets implicity set to type any
// foundMyMovie could be anything and cause issues
