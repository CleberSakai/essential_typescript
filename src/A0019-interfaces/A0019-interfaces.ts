interface TipoNome {
  nome: string;
}

interface TipoSobreNome {
  sobrenome: string;
}

interface TipoNomeComplento {
  nomeCompleto(): string;
}

// type TipoPessoa = TipoNome & TipoSobreNome & TipoNomeComplento;
interface TipoPessoa2 extends TipoNome, TipoSobreNome, TipoNomeComplento {}

export class Pessoa implements TipoPessoa2 {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Cleberson', 'Rodrigues');
console.log(pessoa.nomeCompleto());
