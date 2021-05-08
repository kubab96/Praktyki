const liczby: Array<number> = [0,1,2,10,15,20];

for(let i = 0; i < liczby.length; i++){
    const liczba: number = liczby[i];
    console.log('Silnia dla liczby', liczba,'wynosi:')
    const silnia: number = 1;
    

    Silnia(liczba, silnia)
    
    function Silnia(liczba:number, silnia: number){
        for(let z = liczba; z > 1; z--){
            silnia = silnia * z;
        }
    console.log(silnia)
    }
}