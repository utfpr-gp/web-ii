let calculo = function () {
  let soma = 0;

  //document.getElementById('valor-maximo').value = 78;

  let valorMaximo = document.getElementById('valor-maximo').value;

  for (let i = 0; i <= valorMaximo; i++) {
    soma += i;
  }

  document.querySelector('#total').textContent = soma;
  document.querySelector('#total').classList.add('total');
};

document.querySelector('#my-button').onclick = calculo;
