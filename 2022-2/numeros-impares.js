window.onload = function () {
  document.querySelector('#my-button').onclick = function () {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'blue';
  };

  let impares = '';
  impares = 4;
  impares = '';
  for (let i = 0; i <= 10; i++) {
    if (i % 2 != 0) {
      console.log(i);
      impares += i + '-';
    }
  }

  window.alert(impares);
  let numberDiv = document.getElementById('number-list');
  //numberDiv.innerHTML = '<strong>' + impares + '</strong>';
  numberDiv.innerHTML = `<strong> ${impares} </strong>`;

  numberDiv.textContent =
    numberDiv.textContent + `<strong> ${impares} </strong>`;

  let nome = window.prompt('Qual o seu nome?');
  console.log(nome);
};
