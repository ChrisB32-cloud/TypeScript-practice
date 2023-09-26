// -- NESTED OBJECTS --
// A funtion with nested objects
var personDescription = function (person) {
    return "Person: ".concat(person.name, ",\n    Age: ").concat(person.age, ",\n    siblings: ").concat(person.siblingsNames.sister, ", ").concat(person.siblingsNames.brother, "\n    ");
};
personDescription({
    name: "Chris",
    age: 34,
    siblingsNames: { sister: "Dana", brother: "Porder" },
});
var artistInformation = {
    titleName: "Saphire",
    artistName: "Fallujah",
    numberOfStream: 7423852345234,
    credits: {
        producer: "Billy Wallsh",
        writter: "Scott Carstairs",
    },
    top50Chart: true,
};
function caluculatePayout(payoutArtist) {
    return payoutArtist.numberOfStream * 0.12;
}
function showSongDetails(artistInfo) {
    return "Band: ".concat(artistInfo.artistName, ", Song: ").concat(artistInfo.titleName, ", Albume producer ").concat(artistInfo.credits.producer, ", Albume writter ").concat(artistInfo.credits.writter, ", and this band ").concat(artistInfo.top50Chart === true
        ? "made the top 50 Chart"
        : "didn't make the top 50 Chart");
}
var earings = caluculatePayout(artistInformation);
var songInfo = showSongDetails(artistInformation);
console.log(earings);
console.log(songInfo);
