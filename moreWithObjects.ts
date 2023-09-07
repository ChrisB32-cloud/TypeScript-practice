// -- MORE ON OBJECTS --

// We were able to annotate a function parameter types
// now we can do the same thing for a return type

// ex
//   var name       type object              object value
let coordinate: { x: number; y: number } = { x: 34, y: 57 };

// ex shows an error with when the type shape doesn't match the value shape
let coordinate_2: { x: number; y: number } = { x: 34 };

// ex
// annotate function return type
function newCoordinates(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}
