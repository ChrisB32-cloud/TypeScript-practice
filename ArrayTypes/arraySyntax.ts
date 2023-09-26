// -- ARRAY SYNTAX --

// Alternate array syntax

// Alt syntax
const ages_2: Array<number> = [34, 32, 45, 43];

const names_4: Array<string> = ["Clark", "Taylor"];

// more general syntax
const booleanValues: Array<boolean> = [true, true, false, true];
// equivalent to above
const booleanValues_1: boolean[] = [true, true, false, true];

// Non primatives
type Point = {
  x: number;
  y: number;
};

const pointArray: Array<Point> = [
  { x: 12, y: 7 },
  { x: 12, y: 7 },
];
pointArray.push({ x: 7, y: 100 });
// missing parameter
pointArray.push({ y: 100 });

// equivalent to above
const pointArray_1: Point[] = [
  { x: 12, y: 7 },
  { x: 12, y: 7 },
];
