"use strict";
function obliczDelte(a, b, c) {
    console.log("---------------------------------------------------");
    console.log("Liczba w dzia\u0142aniu: a = " + a + " | b = " + b + " | c = " + c);
    var delta = Math.pow(b, 2) - 4 * a * c;
    console.log("Delta wynosi: " + delta);
    wyznaczMiejscaZerowe(delta, a, b);
}
function wyznaczMiejscaZerowe(delta, a, b) {
    if (delta > 0) {
        console.log("Delta > 0");
        var x1 = (-b - Math.sqrt(delta)) / (2 * a);
        var x2 = (-b + Math.sqrt(delta)) / (2 * a);
        console.log("Pierwsze miejsce zerowe: " + Math.round(x1));
        console.log("Drugie miejsce zerowe: " + Math.round(x2));
    }
    else if (delta === 0) {
        console.log("Delta = 0");
        var x = -b / 2 * a;
        console.log("Miejsce zerowe: " + Math.round(x));
    }
    else if (delta < 0) {
        console.log("Delta < 0");
        console.log("Brak miejsc zerowych");
    }
}
var dane = [1, 2, 3, 2, 4, -10, 1, 2, 1];
for (var i = 0; i < dane.length / 3; i++) {
    var elementA = dane[0 + 3 * i];
    var elementB = dane[1 + 3 * i];
    var elementC = dane[2 + 3 * i];
    obliczDelte(elementA, elementB, elementC);
}
