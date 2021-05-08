const dzielniki: Array<number> = [3, 5]

for (let i = 1; i <= 100; i++){
    const liczba: number = i;
    
    const dzielnik1: number = dzielniki[0];
    const dzielnik2: number = dzielniki[1];

    WyznaczDzielnik(liczba, dzielnik1, dzielnik2)
                
    function WyznaczDzielnik(liczba: number, dzielnik1: number, dzielnik2: number){
        
        if (liczba%dzielnik1 === 0 && liczba%dzielnik2 !== 0){
            console.log("Liczba:", liczba, '- Fizz') 
        }
        if (liczba%dzielnik2 === 0 && liczba%dzielnik1 !== 0) {
            console.log("Liczba:", liczba, '- Buzz')
        }
        if(liczba%dzielnik1 === 0 && liczba%dzielnik2 === 0)
        {
            console.log("Liczba:", liczba, '- FizzBuzz')
        }
    }
}