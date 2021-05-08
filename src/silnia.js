var liczby = [0, 1, 2, 10, 15, 20];
for (var i = 0; i < liczby.length; i++) {
    var liczba = liczby[i];
    console.log('Silnia dla liczby', liczba, 'wynosi:');
    var silnia = 1;
    Silnia(liczba, silnia);
    function Silnia(liczba, silnia) {
        for (var z = liczba; z > 1; z--) {
            silnia = silnia * z;
        }
        console.log(silnia);
    }
}
