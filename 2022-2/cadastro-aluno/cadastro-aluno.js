'use strict';
(function () {
  window.onload = function () {
    function onSubmit(event) {
      event.preventDefault();
      let name = this.elements[0].value;
      let courseSelectedIndex = document.getElementById('curso-select').value;
      let periods = document.getElementsByName('period');

      if (
        isValidName(name) &&
        isValidCourse(courseSelectedIndex) &&
        isValidPeriod(periods)
      ) {
        alert('Formulário enviado com sucesso!');
      } else {
        alert('Oppss! Houve uma falha ao enviar os dados!');
      }
    }

    window.document.forms[0].onsubmit = onSubmit;

    //window.document.forms[0].addEventListener('submit', onSubmit);

    function isValidPeriod(periods) {
      for (let p of periods) {
        if (p.checked) {
          return true;
        }
      }
      return false;
    }
    /**
     * Valida um curso
     * @param {*} index
     * @returns
     */
    function isValidCourse(index) {
      return !(index < 0);
    }

    function isValidName(name) {
      if (name === '') {
        return false;
      }
      return true;
    }
  };
})();
