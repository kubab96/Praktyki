var wyrazy = ['ala', 'tekst', 'zaraz', 'test', 'radar', 'zakaz', 'nie', 'sos'];
console.log("Palindromy w tablicy:");
for (var i = 0; i < wyrazy.length; i++) {
    var odworconyWyraz = wyrazy[i];
    if (odworconyWyraz.split('').reverse().join('') == odworconyWyraz) {
        console.log('-', odworconyWyraz);
    }
}
