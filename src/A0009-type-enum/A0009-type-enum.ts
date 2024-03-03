enum Cores {
  VERMELHO = 10, // 0
  AZUL = 100, // 1
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

// console.log(Cores.VERMELHO);
// console.log(Cores[10]);

//console.log(Cores);

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(Cores.ROXO);
