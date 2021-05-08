var dzielniki = [3, 5];
for (var i = 1; i <= 100; i++) {
    var liczba = i;
    var dzielnik1 = dzielniki[0];
    var dzielnik2 = dzielniki[1];
    WyznaczDzielnik(liczba, dzielnik1, dzielnik2);
    function WyznaczDzielnik(liczba, dzielnik1, dzielnik2) {
        if (liczba % dzielnik1 === 0 && liczba % dzielnik2 !== 0) {
            console.log("Liczba:", liczba, '- Fizz');
        }
        if (liczba % dzielnik2 === 0 && liczba % dzielnik1 !== 0) {
            console.log("Liczba:", liczba, '- Buzz');
        }
        if (liczba % dzielnik1 === 0 && liczba % dzielnik2 === 0) {
            console.log("Liczba:", liczba, '- FizzBuzz');
        }
    }
}
