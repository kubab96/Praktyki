"use strict";
function wyznaczCiag(liczba) {
    if (liczba === 0)
        return 0;
    if (liczba === 1)
        return 1;
    return wyznaczCiag(liczba - 1) + wyznaczCiag(liczba - 2);
}
/*  dla 3
    input: 3-1     +       3-2
           (2)             [1]
        2-1 + 2-2
        [1]   [0]
    output: 1+0+1=2
 */
var liczby = [0, 1, 2, 3, 4, 5, 10, 15, 20];
for (var i = 0; i < liczby.length; i++) {
    var liczba = liczby[i];
    console.log(liczba + " wyraz ci\u0105gu: " + wyznaczCiag(liczba));
}
