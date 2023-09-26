// -- OPTIONAL PROPERTIES --

// To add optional parameters to our type alias post fix our
// parameter with a ?, ex blow

type diffCoordinates = {
  x: number;
  y: number;
  z?: number; // pamater?: type for optional
};

// ex
// We're not make a new type, just a reference to a type
let coordinate_8: diffCoordinates = { x: 34, y: 56 };
let coordinate_9: diffCoordinates = { x: 34, y: 56, z: 12 };

// ex
function newDiffCoordinates(point: diffCoordinates): diffCoordinates {
  return { x: point.x * 2, y: point.y * 2 };
}
// function newDiffCoordinates_2(point: diffCoordinates): diffCoordinates {
//   return { x: point.x * 2, y: point.y * 2, z: point.z * 3 };
// }

newDiffCoordinates(coordinate_8);
// newDiffCoordinates_2(coordinate_9);
