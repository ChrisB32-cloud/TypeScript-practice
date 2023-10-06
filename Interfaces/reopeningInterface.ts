// -- REOPENING INTERFACES

// After creating an interface, we can reopen and add to the interface

interface Person {
  name: string;
}

interface Person {
  age: number;
}

// ex notice now we need to meet both of Person interfaces
// sepecifations

const thatPerson: Person = {
  name: "Bishop",
  age: 39,
};

// The idea isn't what's in the example above but rather
// receiving the interface from a file or third part libray
// we would be able to add to whats existing

interface Avergers {
  ironMan: string;
  hulk: string;
}

interface Avergers {
  hulkSmash(): string;
}

const battle: Avergers = {
  ironMan: "Tonystark",
  hulk: "Bruce Banner",
  hulkSmash() {
    return "hulk smash";
  },
};
