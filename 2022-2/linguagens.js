let linguagens = ['A', 'a', '100', '10', '11', 'I', 'D', 'E', 'F', 'J'];

inverte();

function inverte() {
  let inverso = linguagens.reverse();

  let inversoUL = document.getElementById('inversoUL');
  let liString = '';
  for (let linguagem of inverso) {
    liString += `<li>${linguagem}</li>`;
  }
  inversoUL.innerHTML = liString;
}

function ordemAlfabetica() {}
