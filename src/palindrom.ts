function porownajWypiszPalindromy(odwroconyWyraz: string) {
    if (odwroconyWyraz.split('').reverse().join('') === odwroconyWyraz) {
        console.log(`Palindrom: ${odwroconyWyraz}`)
    }
    else {
        console.log(`Nie palindrom: ${odwroconyWyraz}`)
    }
}

const wyrazy: string[] = ['ala', 'tekst', 'zaraz', 'test', 'radar', 'zakaz', 'nie', 'sos'];

for (let i = 0; i < wyrazy.length; i++) {
    porownajWypiszPalindromy(wyrazy[i]);
}