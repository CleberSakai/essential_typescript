type Age = number;
type Person = {
  name: string;
  age: Age;
  salary: number;
  favoriteColor?: string;
};

type colorRGB = 'Red' | 'Green' | 'Blue';
type colorCMYK = 'Ciano' | 'Magenta' | 'Yellow' | 'Black';
type favoriteColor = colorRGB | colorCMYK;

const person: Person = {
  name: 'Cleberson',
  age: 21,
  salary: 1200,
};

export function setFavoriteColor(person: Person, color: favoriteColor): Person {
  return { ...person, favoriteColor: color };
}

console.log(setFavoriteColor(person, 'Black'));
