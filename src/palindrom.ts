const wyrazy: Array<string> = ['ala','tekst','zaraz','test','radar','zakaz','nie','sos'];

console.log("Palindromy w tablicy:");

for (let i = 0; i < wyrazy.length; i++){
    const wyraz: string=wyrazy[i]
    PorownajWypiszPalindromy(wyrazy[i]);

    function PorownajWypiszPalindromy(odwroconyWyraz: string){
        if (odwroconyWyraz.split('').reverse().join('') === wyrazy[i]){
            console.log('-',odwroconyWyraz)
        }
    }
}