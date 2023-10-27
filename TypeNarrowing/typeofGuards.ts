// -- TYPE OF GUARDS

// typeof Type Guards involve simply doing a type
// check before working with a value.

// Since unions allow nultiple types for a value, we can
// first check what came through befir working with it

// ex when working with primatives
function triple(value: number | string) {
  if (typeof value === "number") {
    return value * 3;
  }
  if (typeof value === "string") {
    return value.repeat(3);
  }
}

// TypeScript is smart so we can also just check for
// one type instead of both
function triple_1(value: number | string) {
  if (typeof value === "string") {
    return value.repeat(3);
  }
  return value * 3;
}
