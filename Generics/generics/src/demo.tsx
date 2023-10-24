// GENERICS ARROW FUNCTIONS & TSX FILES

// ex of non arrow function in TypeScript
function getRandomItem_1<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

// Theres a little weirdness with typescript and jsx because
// jsx thinks <T> is an element
// To avoid this we have to add a trailing comoa <T,>
// ex with arrow function
const getRandomItem_2 = <T,>(list: T[]): T => {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
};
