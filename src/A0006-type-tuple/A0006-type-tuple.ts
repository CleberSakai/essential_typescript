// Tipo Tuple
const dadosCliente1: [number, string] = [1, 'Cleber'];
const dadosCliente2: [number, string, string] = [20, 'Luziana', 'Rodrigues'];
const dadosCliente3: [number, string, string?] = [20, 'Luziana'];
const dadosCliente4: [number, string, ...string[]] = [
  20,
  'Luziana',
  'Rodrigues',
];

//dadosCliente1[0] = 100;
//dadosCliente1[1] = 'Isabella';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);
// pop remove valores
// push adicona valores

// reandonly -> valor inalterável
const array: readonly string[] = ['Calors', 'Luan'];
const array2: ReadonlyArray<string> = ['Carlos', 'Luan'];

console.log(array);
console.log(array2);
