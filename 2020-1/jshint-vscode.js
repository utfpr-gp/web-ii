'use strict';
var f = function () {
    var myDiv = document.getElementById('div-id');
    let text = '';
    for (var i = 0; i <= 10; i++) {
        text += i + ' ';
    }
    myDiv.innerHTML = text;
};

f();