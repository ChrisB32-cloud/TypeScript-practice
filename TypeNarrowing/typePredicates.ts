// -- TYPE PREDICATES --

// Typescript allows us to write custom functions that 
// can narrow the typp of a value. These function have a 
// very speical return type called a type predicate

// A predicate takes the form (parameterName is Type)

// ": pet is dog" --> type predicate


const isCat(pet: Cat | Dog): pet is Dog {
    return (pet as Dog).bark !== undefined;
}

let pet = getAnimal();
// pet gets passed to isCat above to narrow type
if(isCat(pet)) {
    pet.meow();
} else {
    pet.bark();
}


interface Cat_1 {
    name: string;
    numLives: number
}

interface Dog_1 {
    name: string;
    breed: string;
}

function isACat(animal: Cat_1| Dog_1): animal is Cat_1 {
   return (animal as Cat_1).numLives !== undefined
}

function makeNoise(animal: Cat_1 | Dog_1): string {
    if(isACat(animal)) {

        return `This cats name is ${animal.name}`
    }
    return `This Dogs name is ${animal.name} and it's breed is ${animal.breed}`
}