function semRetorno(...args: string[]): void {
  console.log(args.join(''));
}

const pessoa = {
  nome: 'Cleber',
  sobrenome: 'Rodrigues',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Cleber', ' ', 'Rodrigues');
pessoa.exibirNome();

export { pessoa };
