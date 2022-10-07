class ImovelNovo extends Imovel {

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
                    Preço ${this.preco * 1.2}`);
    }

}