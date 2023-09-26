// -- NESTED OBJECTS --

// A funtion with nested objects

const personDescription = (person: {
  name: string;
  age: number;
  siblingsNames: {
    sister: string;
    brother: string;
  };
}) => {
  return `Person: ${person.name},
    Age: ${person.age},
    siblings: ${person.siblingsNames.sister}, ${person.siblingsNames.brother}
    `;
};

personDescription({
  name: "Chris",
  age: 34,
  siblingsNames: { sister: "Dana", brother: "Porder" },
});

// How would we annotate this?

//  ex
// Note: when writting out a type alias a good convention to
// use is capitalizing
type ArtistInfo = {
  titleName: string;
  artistName: string;
  numberOfStream: number;
  credits: {
    producer: string;
    writter: string;
  };
  top50Chart: boolean;
};

const artistInformation: ArtistInfo = {
  titleName: "Saphire",
  artistName: "Fallujah",
  numberOfStream: 7423852345234,
  credits: {
    producer: "Billy Wallsh",
    writter: "Scott Carstairs",
  },
  top50Chart: true,
};

function caluculatePayout(payoutArtist: ArtistInfo): number {
  return payoutArtist.numberOfStream * 0.12;
}

function showSongDetails(artistInfo: ArtistInfo): string {
  return `Band: ${artistInfo.artistName}, Song: ${
    artistInfo.titleName
  }, Albume producer ${artistInfo.credits.producer}, Albume writter ${
    artistInfo.credits.writter
  }, and this band ${
    artistInfo.top50Chart === true
      ? "made the top 50 Chart"
      : "didn't make the top 50 Chart"
  }`;
}

const earings = caluculatePayout(artistInformation);
const songInfo = showSongDetails(artistInformation);
console.log(earings);
console.log(songInfo);
