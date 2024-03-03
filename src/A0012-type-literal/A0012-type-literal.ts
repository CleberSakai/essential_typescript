let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
let a = 100 as const; // eslint-disable-line

const person = {
  name: 'Cleber' as const,
  surname: 'Santos',
};

function color(color: 'Red' | 'Yellow' | 'Blue'): string {
  return color;
}

console.log(color('Yellow'));

// Module mode
export default 1;
