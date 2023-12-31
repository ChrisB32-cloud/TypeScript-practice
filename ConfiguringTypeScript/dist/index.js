"use strict";
const norman = {
    breed: "Swedish Blue",
    eggsPerWeek: 1,
    name: "Dalphny",
};
const newGuitar = {
    brand: "Ibanez",
    numberOfString: 7,
    pickups: "Fishman Fluance",
    //   newVar: "error",
};
const anotherGuitar = {
    brand: "ESP",
    numberOfString: 7,
    pickups: "Fishman Fluance",
};
// The extra var is now showing an error in console on save
// include and exclude options
// include specifies an array of filename or patterns to include in the progran
// These filenames are resolved relative to the directory containing the tsconfig.js file
// basically we can tell typescript we want to use everything in this directory
// ex
// "inlcude": ["src/**/*", "test/**/*"]
// With exclude we can specify a fileman we want to exclude specifically if it
// falls under a file directory that we are including
// Note: if we use the files option, include will default to nothing
// By default node.modules will be excluded when we don't specifiy anything
// or have a excludes present in tsconfig.json
// However if we do specifiy files we want to exclude we have to add node.modules
// to the array of file we want to exclude as well
// outdir
// outdir is basically specifing where we want typescript to spit out
// the complied javascript files
// Right now if we don't specify they are present along side our typescript files
// in the same directory
