// -- MORE ON TUPLES --

// With tuples we can can have mixed types

const newColor: [number, string, number] = [78, "98", 65];

// type UserInfo = {
//   age: number;
//   firstName: string;
//   lastname: string;
// };

// type PassedInfo = {

// }
// const responseCodes: [number, number, number, number]
// const responseCodesMessage: [string]

type Responses = [number, string];

let responseCodes: Responses;

responseCodes = [200, "OK"];
responseCodes = [400, "Bad Request"];
responseCodes = [401, "UnAuthorized"];

// Can't do this
responseCodes = ["OK", 200];

// We need to be careful because we can still do this
// TypeScript won't catch this because how it was implemented
// No easy answer why
responseCodes.push(234);
// can pop too
responseCodes.pop();
