const wyrazy: Array<string> = ['ala','tekst','zaraz','test','radar','zakaz','nie','sos'];

console.log("Palindromy w tablicy:")

for (let i = 0; i < wyrazy.length; i++){
    let odworconyWyraz: string=wyrazy[i]
    if (odworconyWyraz.split('').reverse().join('') == odworconyWyraz){
        console.log('-',odworconyWyraz)
  }
}