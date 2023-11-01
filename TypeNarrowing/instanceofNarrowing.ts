// -- instanceof NARROWING --

// instanceof os a Javascript operator that allows us
// to check if one thing is an instance of another (remeber prototypes)

// This can helo us narrown types when working
// with things like classes

// ex
function printFullData(date: string | Date) {
  if (date instanceof Date) {
    return date.toUTCString();
  } else {
    return new Date(date).toUTCString();
  }
}

class User {
  constructor(public username: string) {}
}
class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    entity;
  } else {
    entity;
  }
}
