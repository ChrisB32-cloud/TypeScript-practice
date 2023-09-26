// -- LITERAL TYPES --

// Literal types are not just types - but the
// values themseleves too

// On it's own, that;s not super helpful. But combine
// it with something like unions and you can have very
// fine-tunes types options for TypeScript to enforce

// ex
const myAnswer = (anwser: "yes" | "no" | "maybe"): string => {
  return `The anwser is ${anwser}`;
};

// can provide one of the literals in the union
myAnswer("yes");

// can't provide anything else
myAnswer("I'm not really sure");

// Another way to think about literal types is that
// it has to be one of the type and values that you specified

// ex
let one: 1 = 1;

// ex different type same value
one = "1";
// ex same type different value
one = 2;

// Not useful on it's own but becomes useful when combined with a union type

// ex
// Note: this method is also case sensitive
// we can't use "Happy"
let myMood: "happy" | "angery" = "happy";
// This var can only be "happy" or "angery"

type DayOfTheWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let thisDayOfTheWeek: DayOfTheWeek = "Thursday";
thisDayOfTheWeek = "Friday";

// We could also use a different type
type DayOfTheWeek_2 =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday"
  | 0;

let thisDayOfTheWeek_2: DayOfTheWeek_2 = "Thursday";
thisDayOfTheWeek_2 = "Friday";
thisDayOfTheWeek_2 = 0;
