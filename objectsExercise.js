// Write the Movie type alias to make the following two variables properly typed
// Make sure that "originalTitle" is optional and "title" is readonly
var dune = {
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
var cats = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348,
    },
};
var getProfit = function (movie) {
    var worldGross = movie.boxOffice.grossWorldwide;
    var movieBudget = movie.boxOffice.budget;
    return "".concat(movie.title, " world wide gross is ").concat(worldGross - movieBudget);
};
var getProfit_2 = function (_a) {
    var title = _a.title, _b = _a.boxOffice, grossWorldwide = _b.grossWorldwide, budget = _b.budget;
    return "".concat(title, " world wide gross is ").concat(grossWorldwide - budget);
};
var callGetProfitWithDune = getProfit(dune);
var callGetProfitWithCats = getProfit(cats);
var callGetProfitWithDune_2 = getProfit_2(dune);
var callGetProfitWithCats_2 = getProfit_2(cats);
console.log(callGetProfitWithDune);
console.log(callGetProfitWithCats);
console.log(callGetProfitWithDune_2);
console.log(callGetProfitWithCats_2);
// Write a function called getProfit that accepts a single Movie object
// It should return the movie's worldwide gross minus its budget
// For example...
// getProfit(cats) => -21166652
