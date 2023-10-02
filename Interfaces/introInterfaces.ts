// -- INTERFACES --

// Interfaces serve almost the exact same purpose as type aliases
// (with a slightly different syntax)

// We can use them to create reusable, modular types
// that describe the shapes of objects

// Interface
interface Person {
  name: string;
  age: number;
}

const usersBirthday = (person: Person): string => {
  return `${person.name} birthday is today, they're turning ${person.age} today`;
};

usersBirthday({ name: "Clark Kent", age: 98 });

type Point = {
  x: number;
  y: number;
};

const pt: Point = { x: 234, y: 876 };

// What would it look like if we converted a type alias to an interface
// Remember, we can only use interfaces for objects and not union types
// we can use type aliases for that

interface Point_1 {
  x: number;
  y: number;
}

const pt_1: Point_1 = { x: 234, y: 876 };
