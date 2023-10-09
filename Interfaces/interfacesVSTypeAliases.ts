// -- INTERFACES VS TYPE ALIASES

// What are some of the key differences between interfaces
//  and Type Aliases?

// Interfaces can only be used to describe objects
// We have to use Type Alias if we want to describe things
// other than objects

// interfaces can be opened and added more too
// we can't do that with types

// ex
type Chicken = {
  breed: string;
};

// we can't do this
// error: duplicate identifier
type Chicken = {
  numberOfEggs: number;
};

// Same ex with interfaces
interface Chicken_1 {
  breed: string;
}
// No issues opening and adding to
// Note: probably wouldn't do this in the same file
interface Chicken_1 {
  numberOfEggs: number;
}

// Also, with interfaces we can use the extend key word to extend an
// object

interface Avergers_1 {
  ironMan: string;
  hulk: string;
}

interface Avergers_1 {
  hulkSmash(): string;
}

const battle_2: Avergers_1 = {
  ironMan: "Tonystark",
  hulk: "Bruce Banner",
  hulkSmash() {
    return "hulk smash";
  },
};

// ex of extending onto avengers interface

interface AvengersPlus_1 extends Avergers_1 {
  moreCharacters: "Scarlett Witch" | "HawkEye" | "Vision";
}

const newAvenger_1: AvengersPlus_1 = {
  ironMan: "Tonystark",
  hulk: "Bruce Banner",
  hulkSmash() {
    return "hulk smash";
  },
  moreCharacters: "Scarlett Witch",
};

// When using type aliases  we have to use the & symble

type Name = {
  name: string;
};

type Person_12 = Name & {
  age: number;
};

const anotherPerson: Person_12 = {
  name: "Clark Kent",
  age: 89,
};

// Summary

// Key points -

// interfaces can only describe object shapes, can't be used for anything else

// Types Aliases can be used to describe any sort of types, we just need a name for a type
// Could be an object type, could be a function type, could be a union type

// General for objects it's favorable use interfaces because we can open, extend, and inherit them
