// -- Delayed initialization & Implicit Any --
const movies_3 = [
  "Dude where's my car",
  "The Thing",
  "Gremlines",
  "The Lost Boys",
];

// We want to implicity set a variable if it's not
// going to contain a value when declaring it
let foundMyMovie_1;
// If we know what the variable will be used for we can implicity set it
// to it's tyoe this way below
let foundMyMovie_3: string;

for (let movie of movies) {
  if (movie === "The Lost Boys") {
    foundMyMovie_1 = movie;
    foundMyMovie_3 = movie;
  }
}
