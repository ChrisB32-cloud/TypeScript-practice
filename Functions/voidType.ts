//  -- Void --

// Void is a return type for functions that don't return anything
// It means just that- this function is void of any data

// TypeScript can infer this type fairly well, but
// sometimes it may want you to annotate a function with a void
// return explicitly

// ex of a function that doesn't return anything
const annoyUser = (num: number): void => {
  for (let i = 0; i < num; i++) {
    alert("wow");
  }
};

// We don't have to eplicitly set void but it's helpful
// and obviuose what the function is doing when we do
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}

// In this ex below we see that when we try and use
// return in this function it throws an error
// Since we explicitly set the function to void
//  it catchs the return error
function printThreeTimes(msg: string): void {
  console.log(msg);
  console.log(msg);
  console.log(msg);
  return msg;
}
