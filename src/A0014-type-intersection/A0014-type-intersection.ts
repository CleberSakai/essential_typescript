// & AND
type hasName = { name: string };
type hasSurname = { surname: string };
type hasAge = { age: number };
type Person = hasName & hasSurname & hasAge; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersection = AB & AC & AD;

const person: Person = {
  name: 'Cleberson',
  surname: 'Rodrigues',
  age: 21,
};

console.log(person);

export { person };
