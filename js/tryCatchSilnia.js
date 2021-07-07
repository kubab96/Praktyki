"use strict";
function obliczSilnieTry(liczba, silnia) {
    try {
        if (liczba < 0)
            throw "";
        for (var z = liczba; z > 1; z--) {
            silnia = silnia * z;
        }
        console.log("Silnia liczby " + liczba + " wynosi: " + silnia);
    }
    catch (_a) {
        console.log("Liczba mniejsza ni\u017C 0, wpisz liczb\u0119 ca\u0142kowit\u0105 nieujemn\u0105.");
    }
}
var liczbySilniaTry = [1, 3, -5, -89, 10, 5, -67];
for (var i = 0; i < liczbySilniaTry.length; i++) {
    var liczba = liczbySilniaTry[i];
    var silnia = 1;
    obliczSilnieTry(liczba, silnia);
}
