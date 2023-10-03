// -- INTERFACE METHODS --

// what does it look like to add a method to an interface

interface PersonInfo_1 {
  readonly id: number;
  firstName: string;
  lastName: string;
  age: number;
  nickname?: string;
  //   sayHello: () => string;
  sayHello(): string;
}
// Above is an alternate method for writing
// interfaces methods

const david: PersonInfo_1 = {
  id: 233484020834,
  firstName: "David",
  lastName: "Mathis",
  age: 34,
  nickname: "Bass man",
  sayHello: () => {
    return "Here there";
  },
};

// What if the method receive a string
// We didn't spectify the method would take a property
// so we see an error
const david_1: PersonInfo_1 = {
  id: 233484020834,
  firstName: "David",
  lastName: "Mathis",
  age: 34,
  nickname: "Bass man",
  sayHello: (firstName: string) => {
    return "Here there";
  },
};
