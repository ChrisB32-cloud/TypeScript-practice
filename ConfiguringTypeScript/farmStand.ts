interface Products {
  price: number;
  name: string;
  quantity: number;
}

const printProduct = (product: Products): void => {
  console.log(`${product.name} - $${product.price} - ${product.quantity}`);
};

// When working with multilple files we can use the tsc command
// alone to compile the files in our directory

// same applies to tsc -w, command will work for
// files in the directory
