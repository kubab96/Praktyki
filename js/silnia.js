"use strict";
function obliczSilnie(liczba, silnia) {
    for (var z = liczba; z > 1; z--) {
        silnia = silnia * z;
    }
    console.log("Silnia liczby " + liczba + " wynosi: " + silnia);
}
var liczbySilnia = [0, 1, 2, 10, 15, 20];
for (var i = 0; i < liczbySilnia.length; i++) {
    var liczba = liczbySilnia[i];
    var silnia = 1;
    obliczSilnie(liczba, silnia);
}
