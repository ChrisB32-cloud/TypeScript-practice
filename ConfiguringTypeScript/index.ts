interface Duck {
  breed: string;
  eggsPerWeek: number;
  name: string;
}

const norman: Duck = {
  breed: "Swedish Blue",
  eggsPerWeek: 1,
  name: "Dalphny",
};

// We can run tsc -w "file name" to have a file
// automatically compilied each time we save

interface Guitar {
  brand: string;
  numberOfString: number;
  pickups: string;
}

const newGuitar: Guitar = {
  brand: "Ibanez",
  numberOfString: 7,
  pickups: "Fishman Fluance",
  //   newVar: "error",
};

const anotherGuitar: Guitar = {
  brand: "ESP",
  numberOfString: 7,
  pickups: "Fishman Fluance",
};

// The extra var is now showing an error in console on save
