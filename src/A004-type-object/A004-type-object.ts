const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'valor A',
  chaveB: 'valor B',
};

objetoA.chaveB = 'Outro Valor'; // alterando valor da chave
objetoA.chaveC = 'Opcional'; // tornei a chave opcional
objetoA.ChaveD = 'Nova Chave'; // Neste caso estou criando a chave depois

console.log(objetoA);

// readonly -> o Valor da chave não pode ser mais alterado.
