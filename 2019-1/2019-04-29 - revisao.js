(function () {
    let x;



    let sum = function (x = 1, y = 3) {
        return x + y;
    }

    alert(sum());

    let Client = function (code, name) {
        this.code = code;
        this.name = name;
        this.print = function () {
            console.log(`Código ${this.code} Nome ${this.name}`);
        }
    }

    let joao = new Client(1, 'João');
    let jose = new Client(2, 'Jose');

    joao.age = 20;
    joao.print();

    console.log(joao);
    console.log(jose);

    let josue = Object.create(joao);
    josue.name = "Josué";
    josue.code = 3;
    console.log(josue);
    console.log(`Idade de Josue ${josue.age}`);
    console.log(`Pai de Josue ${josue.__proto__.name}`);


    let garfield = {
        code: 5,
        country: 'Brasil',
        print: function () {
            console.log('Código do Garfield' + this.code);
        }
    }

    garfield.print();

    class University {
        constructor(name, city) {
            this.name = name;
            this.city = city;
        }

        print() {
            console.log(`Nome: ${this.name}`);
        }
    }

    let utfpr = new University("UTFPR", "Guarapuava");
    utfpr.print();

})();