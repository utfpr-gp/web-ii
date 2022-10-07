for (let i = 1; i <= 10; i++) {
  debugger;
  let jogada = Math.ceil(Math.random() * 6);
  jogada = jogada == 0 ? 1 : jogada;
  const jogadaLi = `<li>${i}ª jogada: ${jogada}</li>`;
  let jogadasUl = document.querySelector('#jogadas-ul');
  jogadasUl.innerHTML += jogadaLi;
}
