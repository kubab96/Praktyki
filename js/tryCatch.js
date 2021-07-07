"use strict";
function dzielenie(dzielnia, dzielnik) {
    try {
        if (dzielnik === 0 || dzielnia === 0)
            throw "";
        var wynik = dzielnia / dzielnik;
        console.log(dzielnia + " : " + dzielnik + " = " + wynik);
    }
    catch (_a) {
        console.log(dzielnia + " : " + dzielnik + " = Pami\u0119taj cholero nie dziel przez zero");
    }
}
var dzielniaTab = [1, 245, 2, 55, 6, 25, 8, 0];
var dzielnikTab = [43, 5, 23, 0, 9, 2, 5, 67];
for (var i = 0; i < dzielniaTab.length; i++) {
    var dzielnia = dzielniaTab[i];
    for (var i_1 = 0; i_1 < dzielnikTab.length; i_1++) {
        var dzielnik = dzielnikTab[i_1];
        dzielenie(dzielnia, dzielnik);
    }
}
/*

for (let i = 0; i < dzielniaTab.length; i++) {
  const dzielnia: number = dzielniaTab[i];
  const dzielnik: number = dzielnikTab[i];
  dzielenie(dzielnia, dzielnik);
}

*/
