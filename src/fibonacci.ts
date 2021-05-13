function wyznaczCiag(ilosc: number, liczba:number, liczba2: number){
    for(let z = 0; z < ilosc; z++){
        const wynik: number = liczba + liczba2;
        console.log(wynik)
        liczba2 = wynik;
        liczba = wynik - liczba;
    }
    console.log('----------------------------')
}

const liczby: Array<number> = [1,2,10,15,20];

for(let i = 0; i < liczby.length; i++){
    const liczba: number = liczby[i];
    const liczba2: number = liczba;

    console.log('Kolejne liczby ciągu dla', liczba)

    wyznaczCiag(5,liczba,liczba2)
    
    // ilosc = ilosc powtorzen ciagu
    
}