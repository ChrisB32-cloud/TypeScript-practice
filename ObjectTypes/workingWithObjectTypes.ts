// -- WORKING WITH OBJECT TYPES --

// Objects
// Objects can be types by declaring what the object
// should look like in the annotation

// Accessing a property that isn't defined or performing
// operations without keeping types in mind will throw errors

// ex
// A function with an object type parameter
const printName = (name: { first: string; last: string }) => {
  return `Name ${name.first} ${name.last}`;
};

printName({ first: "Will", last: "Sasso" });

// In typescript we can create annotations that are
// supposed to annotate objects that describe the shape of an object

// another ex with clg
const printName_2 = (name: { first: string; last: string }): void => {
  console.log(`Name ${name.first} ${name.last}`);
};

printName_2({ first: "Will", last: "Sasso" });
