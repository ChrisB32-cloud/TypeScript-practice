// -- Readonly and Optional Interface Properties --

// As with types we can also mark properites as
// readonly and optional with interfaces

interface PersonInfo {
  readonly id: number;
  name: string;
  age: number;
  nickname?: string;
}

const showPersonInfo = (person: PersonInfo): string => {
  return `${person.name} is ${person.age} and their nickman is ${person.nickname}`;
};

// Here can add nickname if we want but it's not required
// We can set the id when intializing but we can't re-assign after
// intializing because the property is read only
const clark: PersonInfo = { id: 837192, name: "clark", age: 87 };
