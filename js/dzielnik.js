"use strict";
function wyznaczDzielnik(liczba, dzielnik1, dzielnik2) {
    if (liczba % dzielnik1 === 0 && liczba % dzielnik2 === 0) {
        console.log("FizzBuzz");
    }
    else if (liczba % dzielnik1 === 0) {
        console.log("Fizz");
    }
    else if (liczba % dzielnik2 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(liczba);
    }
}
var dzielniki = [3, 5];
for (var i = 1; i <= 100; i++) {
    var liczba = i;
    var dzielnik1 = dzielniki[0];
    var dzielnik2 = dzielniki[1];
    wyznaczDzielnik(liczba, dzielnik1, dzielnik2);
}
