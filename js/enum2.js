"use strict";
function wykonajDzialanie(a) {
    var wynik;
    switch (a) {
        case 5:
            wynik = a * a;
            break;
        case 10:
            wynik = a + a;
            break;
        case 15:
            wynik = a * a * 15;
            break;
        case 20:
            wynik = a + a + 15;
            break;
        default:
            console.log(a);
    }
    console.log(wynik);
}
var Operacje;
(function (Operacje) {
    Operacje[Operacje["Operacja1"] = 5] = "Operacja1";
    Operacje[Operacje["Operacja2"] = 10] = "Operacja2";
    Operacje[Operacje["Operacja3"] = 15] = "Operacja3";
    Operacje[Operacje["Operacja4"] = 20] = "Operacja4";
})(Operacje || (Operacje = {}));
wykonajDzialanie(5);
