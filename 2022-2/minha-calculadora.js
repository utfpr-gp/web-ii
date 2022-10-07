//module pattern
//(function () {
//função anônima com retorno
let calcula = function (a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    default:
      return a;
  }
};

let calcula1 = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '?':
      return a / b;
    default:
      console.log('Operador inexistente!');
  }
};
//})();

//função pública
function onSubmit() {
  const n1 = +document.getElementById('number1Input').value;
  const n2 = +document.forms[0].elements[1].value;
  const operator = document.querySelector('#operatorSelect').value;
  const resultado = calcula1(n1, n2, operator);
  alert(resultado);
  return false;
}
