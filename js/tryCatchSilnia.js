"use strict";
function obliczSilnieTry(liczba, silnia) {
    try {
        if (liczba < 0)
            throw new Error("Liczba mniejsza niż 0, wpisz liczbę całkowitą nieujemną.");
        for (var z = liczba; z > 1; z--) {
            silnia = silnia * z;
        }
        console.log("Silnia liczby " + liczba + " wynosi: " + silnia);
    }
    catch (e) {
        console.log(e);
    }
}
var liczbySilniaTry = [1, 3, -5, -89, 10, 5, -67];
for (var i = 0; i < liczbySilniaTry.length; i++) {
    var liczba = liczbySilniaTry[i];
    var silnia = 1;
    obliczSilnieTry(liczba, silnia);
}
