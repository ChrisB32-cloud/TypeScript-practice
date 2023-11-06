// -- EXHASUTIVENESS CHECKING WITH NEVER --

interface Rooster_1 {
  name: string;
  weight: number;
  age: number;
  _type: "rooster";
}

interface Cow_1 {
  name: string;
  weight: number;
  age: number;
  _type: "cow";
}

interface Pig_1 {
  name: string;
  weight: number;
  age: number;
  _type: "pig";
}

interface Sheep_1 {
  name: string;
  weight: number;
  age: number;
  _type: "sheep";
}

type FarmAnimal_1 = Pig_1 | Cow_1 | Rooster_1 | Sheep_1;

function getFarmAnimalSound_1(animal: FarmAnimal_1) {
  switch (animal._type) {
    case "pig":
      return `This is a ${animal._type} and it weights ${animal.weight}`;
    case "cow":
      return `This is a ${animal._type} and it weights ${animal.weight}`;
    case "rooster":
      return `This is a ${animal._type} and it weights ${animal.weight}`;
    default:
      // We should never make it here, if all cases were handle correctly
      // Common pattern
      // Here we can see sheep is caught because we are not checking got case sheep
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
}

let thisAnimal_1: Rooster_1 = {
  name: "Montana",
  weight: 12,
  age: 7,
  _type: "rooster",
};

const callFunction_1 = getFarmAnimalSound_1(thisAnimal_1);

console.log(callFunction_1);
