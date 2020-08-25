let maisAlto = 0,
    maisBaixo = 1000,
    maisGordo = 0,
    maisMagro = 1000;
let idMaisAlto, idMaisBaixo, idMaisGordo, idMaisMagro;
let mediaAltura = 0,
    mediaPeso = 0,
    alturaTotal = 0,
    pesoTotal = 0;
let clientes = [];
do {
    let codigo = parseInt(window.prompt("Insira seu código: "));
    let altura = parseFloat(window.prompt("Informe sua altura"));
    let peso = parseFloat(window.prompt("Informe seu peso"));
    clientes.push({
        'Código': codigo,
        'Altura': altura,
        'Peso': peso
    });
} while (window.confirm("Deseja cadastrar novos clientes?") == true);
for (i = 0; i < clientes.length; i++) {
    if (clientes[i].Altura > maisAlto) {
        idMaisAlto = clientes[i].Código;
        maisAlto = clientes[i].Altura;
    }
    if (clientes[i].Altura < maisBaixo) {
        idMaisBaixo = clientes[i].Código;
        maisBaixo = clientes[i].Altura;
    }
    if (clientes[i].Peso > maisGordo) {
        idMaisGordo = clientes[i].Código;
        maisGordo = clientes[i].Peso;
    }
    if (clientes[i].Peso < maisMagro) {
        idMaisMagro = clientes[i].Código;
        maisMagro = clientes[i].Peso;
    }
    alturaTotal += clientes[i].Altura;
    pesoTotal += clientes[i].Peso;
}
mediaAltura = alturaTotal / clientes.length;
mediaPeso = pesoTotal / clientes.length;
console.log(`O cliente mais alto é o: ${idMaisAlto}
                Medindo ${maisAlto}`);
pularLinha();
document.write(`O cliente mais baixo é o: ${idMaisBaixo}
                Medindo ${maisBaixo}`);
pularLinha();
document.write(`O cliente mais gordo é o: ${idMaisGordo}
                Pesando ${maisGordo}`);
pularLinha();

document.write(`O cliente mais magro é o: ${idMaisMagro}
                Pesando ${maisMagro}`);
pularLinha();
pularLinha();
document.write(`Média das alturas ${mediaAltura}`);
pularLinha();
document.write(`Média dos pesos ${mediaPeso}`);
//Apenas para visualização do Array
//console.log(clientes);

window.setTimeout(function () {
    if (window.confirm("Deseja inserir outro grupo de clientes?")) {
        location.reload();
    } else {
        location.href = "https://www.tuasaude.com/calculadora/imc/ ";
    }
}, 5000);

//Método enxuto para pular linha
function pularLinha() {
    document.write("<br>");
}