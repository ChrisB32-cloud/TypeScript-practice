// -- INTERSECTION TYPE --

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

// When we combind these two different type aliases when creating a new var
// we have to include all the types from both

const combination: ColorfulCircle = {
  radius: 20,
  color: "blue",
};

// ex CatDog is the intersection of Cat and Dog and
// say we want to add on something else,

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const clark: CatDog = {
  numLives: 9,
  breed: "terrier",
  age: 4,
};
