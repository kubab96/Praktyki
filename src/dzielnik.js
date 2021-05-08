var liczby = [3, 5, 15, 6, 10, 30, 12, 20];
var dzielniki = [3, 5, 15];
for (var i = 0; i < liczby.length; i++) {
    var liczba = liczby[i];
    console.log('Dzielniki liczby', liczba);
    for (var i_1 = 0; i_1 < dzielniki.length; i_1++) {
        var dzielnik = dzielniki[i_1];
        WyznaczDzielnik(liczba, dzielnik);
        function WyznaczDzielnik(liczba, dzielnik) {
            if (liczba % dzielnik == 0)
                console.log('-', dzielnik);
        }
    }
}
