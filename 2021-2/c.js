function calcular() {
  let valor1Input = document.getElementById("valor1");
  let valor2Input = document.getElementById("valor2");
  //let resultado=document.getElementById('resultado');

  if (valor1.value == 0 || valor2.value == 0) {
    window.alert("[ERROR ], number Vazio!!!");
  } else {
    debugger;
    let valor1 = new Number(valor1Input.value);
    console.log(valor1);
    let valor2 = parseInt(valor2Input.value);
    console.log(valor2);
    console.log(typeof valor1);
    console.log(typeof valor2);
    let total = valor1 + valor2;
    console.log(total);
    resultado.innerText = "Resultado:" + total;
  }
}
