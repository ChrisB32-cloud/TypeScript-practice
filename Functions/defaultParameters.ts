// -- Working with Default Parameters --

// What if we want to have default values?
// Syntax varName: type = value

function doSomething(
  person: string = "Clark",
  personAge: number = 85,
  isFunny: boolean = true
) {
  return `Hi! My name is ${person}, I'm ${personAge} and I'm ${
    isFunny === true ? "funny" : "not funny at all"
  } `;
}

doSomething();
doSomething("Chris", 32, true);
