class ImovelVelho extends Imovel {
  constructor(endereco, preco, cidade) {
    super(endereco, preco);
    this._cidade = cidade;
  }

  get cidade() {
    return this._cidade;
  }

  set cidade(cidade) {
    this._cidade = cidade;
  }

  imprime() {
    console.log(`Endereco ${this.endereco}
                    Preço ${this.preco * 0.8}`);
  }

  toString() {
    return `Endereco ${this.endereco}
        Preço ${this.preco * 0.8}`;
  }
}
