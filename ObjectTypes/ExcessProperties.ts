// -- Excess Properties --

const printName_3 = (name: { first: string; last: string }) => {
  return `Name ${name.first} ${name.last}`;
};

printName({ first: "Will", last: "Sasso" });

// ex
//   var name       type object              object value
let coordinate_4: { x: number; y: number } = { x: 34, y: 57 };

// ex shows an error with when the type shape doesn't match the value shape
let coordinate_5: { x: number; y: number } = { x: 34 };

// ex
// annotate function return type
function newCoordinates(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

// ex of when we pass in an extra pamameter (age) which is of type number
// The error we see is Argumet of type { first: "Mick", last: "Jagger", age: 89 }
// is not assignable to parameter of type { first: "Mick", last: "Jagger" }
// Object literal may only specify known properties and "age" does not
// exist in type { first: "Mick", last: "Jagger" }
printName_3({ first: "Mick", last: "Jagger", age: 89 });

// ex of passing in a var obj with the same properties
// the reason we don't see an error this way is because a
// disscuon was made early on that excutes an additional check
// when we provide an object literal inline like the ex above to
// check that we only pass in the properties that are required
// If we pass in a var instead of providing a object inline
// the error will be ignored

const artist = { first: "Mick", last: "Jagger", age: 89 };
printName_3(artist);
