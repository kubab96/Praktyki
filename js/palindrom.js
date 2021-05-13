"use strict";
function porownajWypiszPalindromy(odwroconyWyraz) {
    if (odwroconyWyraz.split('').reverse().join('') === odwroconyWyraz) {
        console.log("Palindrom: " + odwroconyWyraz);
    }
    else {
        console.log("Nie palindrom: " + odwroconyWyraz);
    }
}
var wyrazy = ['ala', 'tekst', 'zaraz', 'test', 'radar', 'zakaz', 'nie', 'sos'];
for (var i = 0; i < wyrazy.length; i++) {
    porownajWypiszPalindromy(wyrazy[i]);
}
