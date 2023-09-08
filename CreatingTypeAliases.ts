// -- TYPE ALIAS --

// Instead of writing out object types in an annotation, we
// can declare them separaretly in a type alis, whcih is
// simply the desired shape of the object

// This allows us to make our code more readable and even
// reuse the types elsewhere in our code.

// ex
// A type alias
type PersonInfo = {
  name: string;
  age: number;
};

// Use the type alias in the annotation
const personsBirthday = (person: PersonInfo): string => {
  return `Happy birthday ${person.name}, on your ${person.age} `;
};

const person = { name: "Fred", age: 1 };
personsBirthday(person);

// Convert previous example to use type alias

type myCoordinates = {
  x: number;
  y: number;
};

// ex
// We're not make a new type, just a reference to a type
let coordinate_6: myCoordinates = { x: 34, y: 56 };

// ex
function newCoordinates(): myCoordinates {
  return { x: Math.random(), y: Math.random() };
}

function newDoubleCoordinates(points: { x: number; y: number }): myCoordinates {
  return { x: points.x * 2, y: points.y * 2 };
}

newDoubleCoordinates({ x: 21, y: 89 });
// ex passing in a var
newDoubleCoordinates(coordinate_6);

// ex we can pass in the type alias for referenceing the function parameter
function newDoubleCoordinates_2(points: myCoordinates): myCoordinates {
  return { x: points.x * 2, y: points.y * 2 };
}

newDoubleCoordinates_2({ x: 21, y: 89 });
// ex passing in a var
newDoubleCoordinates_2(coordinate_6);

// We can also do type alias for a primative type if we need a lot
// clairty to the var but most of the time we won't need to

// ex
type myAge = number;
const age: myAge = 34;
