//  -- THE READONLY MODIFIER --

// This is not a javascript key word, it's a modifier in typeScript

type DiffCoordinates_2 = {
  x: number;
  y: number;
  z?: number; // pamater?: type for optional
};

const coordinate_10: DiffCoordinates_2 = { x: 34, y: 56 };
const coordinate_11: DiffCoordinate_2 = { x: 34, y: 56, z: 12 };

// ex
type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 92849782342,
  username: "superboy",
};

console.log(user.id, user.username);

// ex of trying to re-assign id when it's set to read only
// We can only read to id not write
// NOTE: if id was referencing an object or an array we could
// still update and add to that array or change the object
// because they are reference types, we couldn't re-assign the property however
user.id = 713454325;
