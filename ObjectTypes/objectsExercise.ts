// Write the Movie type alias to make the following two variables properly typed
// Make sure that "originalTitle" is optional and "title" is readonly

type Movie = {
  readonly title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldwide: number;
  };
};

const dune: Movie = {
  title: "Dune",
  originalTitle: "Dune Part One",
  director: "Denis Villeneuve",
  releaseYear: 2021,
  boxOffice: {
    budget: 165000000,
    grossUS: 108327830,
    grossWorldwide: 400671789,
  },
};

const cats: Movie = {
  title: "Cats",
  director: "Tom Hooper",
  releaseYear: 2019,
  boxOffice: {
    budget: 95000000,
    grossUS: 27166770,
    grossWorldwide: 73833348,
  },
};

const getProfit = (movie: Movie): string => {
  const worldGross: number = movie.boxOffice.grossWorldwide;
  const movieBudget: number = movie.boxOffice.budget;
  return `${movie.title} world wide gross is ${worldGross - movieBudget}`;
};

const getProfit_2 = ({
  title,
  boxOffice: { grossWorldwide, budget },
}: Movie): string => {
  return `${title} world wide gross is ${grossWorldwide - budget}`;
};

const callGetProfitWithDune = getProfit(dune);
const callGetProfitWithCats = getProfit(cats);

const callGetProfitWithDune_2 = getProfit_2(dune);
const callGetProfitWithCats_2 = getProfit_2(cats);

console.log(callGetProfitWithDune);
console.log(callGetProfitWithCats);

console.log(callGetProfitWithDune_2);
console.log(callGetProfitWithCats_2);

// Write a function called getProfit that accepts a single Movie object
// It should return the movie's worldwide gross minus its budget

// For example...
// getProfit(cats) => -21166652
