var liczby = [1, 2, 10, 15, 20];
for (var i = 0; i < liczby.length; i++) {
    var liczba = liczby[i];
    var liczba2 = liczba;
    console.log('Kolejne liczby ciągu dla', liczba);
    Ciag(5, liczba, liczba2);
    // ilosc = ilosc powtorzen ciagu
    function Ciag(ilosc, liczba, liczba2) {
        for (var z = 0; z < ilosc; z++) {
            var wynik = liczba + liczba2;
            console.log(wynik);
            liczba2 = wynik;
            liczba = wynik - liczba;
        }
        console.log('----------------------------');
    }
}
