// undefined
let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

// Null
export function squareOf(x: any) {
  if (typeof x === 'number') x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
// const squareOfTwoString = squareOf('2');

if (squareOfTwoNumber === null) {
  console.log('Error');
} else {
  console.log(squareOfTwoNumber * 2);
}
