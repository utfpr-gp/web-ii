class Imovel {

    constructor(endereco, preco) {
        this.endereco = endereco;
        this.preco = preco;
    }

    imprime() {
        console.log(`Endereco ${this.endereco}
                    Preço ${this.preco}`);
    }
}