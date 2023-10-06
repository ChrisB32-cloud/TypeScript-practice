// -- EXTENDING INTERFACES --

// Extending interface is essentially inherirting from another interface
// Similar to classes with obj oriented programing

interface Avergers {
  ironMan: string;
  hulk: string;
}

interface Avergers {
  hulkSmash(): string;
}

const battle_1: Avergers = {
  ironMan: "Tonystark",
  hulk: "Bruce Banner",
  hulkSmash() {
    return "hulk smash";
  },
};

// ex of extending onto avengers interface

interface AvengersPlus extends Avergers {
  moreCharacters: "Scarlett Witch" | "HawkEye" | "Vision";
}

const newAvenger: AvengersPlus = {
  ironMan: "Tonystark",
  hulk: "Bruce Banner",
  hulkSmash() {
    return "hulk smash";
  },
  moreCharacters: "Scarlett Witch",
};

// Note: we can actually extend multiple interfaces
