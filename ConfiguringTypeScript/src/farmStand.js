"use strict";
const printProduct = (product) => {
    console.log(`${product.name} - $${product.price} - ${product.quantity}`);
};
// When working with multilple files we can use the tsc command
// alone to compile the files in our directory
// same applies to tsc -w, command will work for
// files in the directory
// We can tell typescript specific files we want it to
// compile by adding files to our ts.config.json file
// adding these files to the array will allow typescript to
// compile those files and ignore the others that are
// not in the list
