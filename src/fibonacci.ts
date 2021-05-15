function wyznaczCiag(liczba: number): number {
  if (liczba === 0) return 0;
  if (liczba === 1) return 1;
  return wyznaczCiag(liczba - 1) + wyznaczCiag(liczba - 2);
}

/*  dla 3   
    input: 3-1     +       3-2
           (2)             [1]
        2-1 + 2-2     
        [1]   [0]       
    output: 1+0+1=2
 */

const liczby: Array<number> = [0, 1, 2, 3, 4, 5, 10, 15, 20];

for (let i = 0; i < liczby.length; i++) {
  const liczba: number = liczby[i];
  console.log(`${liczba} wyraz ciągu: ${wyznaczCiag(liczba)}`);
}
