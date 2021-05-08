const liczby: Array<number> = [3, 5, 15, 6, 10, 30, 12, 20];
const dzielniki: Array<number> = [3, 5, 15]

for (let i = 0; i < liczby.length; i++){
    const liczba: number = liczby[i];
    console.log('Dzielniki liczby', liczba)

    for (let i = 0; i < dzielniki.length; i++){
        const dzielnik: number = dzielniki[i];
                
        WyznaczDzielnik(liczba, dzielnik)
                
        function WyznaczDzielnik(liczba: number, dzielnik: number){
            if(liczba%dzielnik === 0)
            console.log('-', dzielnik)
        }
    }
}