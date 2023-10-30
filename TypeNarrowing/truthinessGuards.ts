// -- TRUTHINESS GUARDS --

// Truthiness Type Guards involve checking a value
// for being truthy or falsy before working with it

// This is helpful in avoiding errors whrn values might
// be null or undefined

const printLetters = (word: string[] | null) => {
  if (!word) {
    // If word is null, don't loop over it
    console.log("No word was provided");
  } else {
    // Only loop if word exists/is truthy
    word.forEach((letter) => console.log(letter));
  }
};

printLetters(["Hello"]);

const printLetters_1 = (word?: string) => {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log("No word was provided");
  }
};

printLetters_1("Hello");
