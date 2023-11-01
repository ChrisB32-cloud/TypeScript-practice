// -- in OPERATIR NARROWING --

// Javascript's (in) operator helps check if a certain property
// exists in an object

// This means we can use it to check if a value
// exist in an object, according to it's type alias
// or aliases, before working with it

type Cat = { meow: () => void };
type Dog = { bark: () => void };

const talk = (creature: Cat | Dog) => {
  if ("meow" in creature) {
    console.log(creature.meow);
  } else {
    console.log(creature.bark);
  }
};

const myCat: Cat = { meow: () => "MEOWWW" };
talk(myCat);

// another ex
interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRuntime(video: Movie | TVShow) {
  if ("numEpisodes" in video) {
    return `TV show runtime is ${video.episodeDuration}`;
  }
  return `Movie runtime is ${video.duration}`;
}

const tvShow: TVShow = {
  title: "Cheers",
  numEpisodes: 200,
  episodeDuration: 20,
};

const movie: Movie = {
  title: "Avengers",
  duration: 140,
};

getRuntime(tvShow);
getRuntime(movie);
