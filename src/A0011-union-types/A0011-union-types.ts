// -> | ou
function addOrconcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrconcat(10, 30));
console.log(addOrconcat('10', '30'));
