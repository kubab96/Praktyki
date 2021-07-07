function obliczSilnieTry(liczba: number, silnia: number) {
  try {
    if (liczba < 0) throw ``;
    for (let z = liczba; z > 1; z--) {
      silnia = silnia * z;
    }
    console.log(`Silnia liczby ${liczba} wynosi: ${silnia}`);
  } catch {
    console.log(`Liczba mniejsza niż 0, wpisz liczbę całkowitą nieujemną.`);
  }
}

const liczbySilniaTry: number[] = [1, 3, -5, -89, 10, 5, -67];

for (let i = 0; i < liczbySilniaTry.length; i++) {
  const liczba: number = liczbySilniaTry[i];
  const silnia: number = 1;

  obliczSilnieTry(liczba, silnia);
}
