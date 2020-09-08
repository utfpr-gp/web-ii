class Rica extends Pessoa {
    constructor(nome, idade, dinheiro) {
        super(nome, idade);
        this.dinheiro = dinheiro;
    }

    fazCompras() {
        console.log(`${this.nome} faz compras!`);
    }
}