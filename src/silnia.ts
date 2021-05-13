function obliczSilnie(liczba: number, silnia: number) {
    for (let z = liczba; z > 1; z--) {
        silnia = silnia * z;
    }
    console.log(`Silnia liczby ${liczba} wynosi: ${silnia}`)
}

const liczbySilnia: number[] = [0, 1, 2, 10, 15, 20];

for (let i = 0; i < liczbySilnia.length; i++) {
    const liczba: number = liczbySilnia[i];
    const silnia: number = 1;

    obliczSilnie(liczba, silnia)
}
