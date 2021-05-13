function wyznaczDzielnik(liczba: number, dzielnik1: number, dzielnik2: number) {
    if (liczba % dzielnik1 === 0 && liczba % dzielnik2 === 0) {
        console.log(`FizzBuzz`)
    }
    else if (liczba % dzielnik1 === 0) {
        console.log(`Fizz`)
    }
    else if (liczba % dzielnik2 === 0) {
        console.log(`Buzz`)
    }
    else{
        console.log(liczba)
    }
}

const dzielniki: number[] = [3, 5]

for (let i = 1; i <= 100; i++) {
    const liczba: number = i;

    const dzielnik1: number = dzielniki[0];
    const dzielnik2: number = dzielniki[1];

    wyznaczDzielnik(liczba, dzielnik1, dzielnik2)
}