// -- DISCRIMINATED UNIONS --

// A common pattern in TypeScript involes creating
// a literal property that is common across
// multiple types

// We can then narrow the type using that literal property

interface Circle {
  kind: "circle"; // literal property
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number; // literal property
}

interface Rooster {
  name: string;
  weight: number;
  age: number;
  _type: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  _type: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  _type: "pig";
}

type FarmAnimal = Pig | Cow | Rooster;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal._type) {
    case "pig":
      return `This is a ${animal._type} and it weights ${animal.weight}`;
    case "cow":
      return `This is a ${animal._type} and it weights ${animal.weight}`;
    case "rooster":
      return `This is a ${animal._type} and it weights ${animal.weight}`;
    default:
  }
}

let thisAnimal: Rooster = {
  name: "Montana",
  weight: 12,
  age: 7,
  _type: "rooster",
};

const callFunction = getFarmAnimalSound(thisAnimal);

console.log(callFunction);
