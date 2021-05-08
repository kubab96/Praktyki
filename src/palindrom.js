var wyrazy = ['ala', 'tekst', 'zaraz', 'test', 'radar', 'zakaz', 'nie', 'sos'];
console.log("Palindromy w tablicy:");
var _loop_1 = function (i) {
    var wyraz = wyrazy[i];
    PorownajWypiszPalindromy(wyrazy[i]);
    function PorownajWypiszPalindromy(odwroconyWyraz) {
        if (odwroconyWyraz.split('').reverse().join('') === wyrazy[i]) {
            console.log('-', odwroconyWyraz);
        }
    }
};
for (var i = 0; i < wyrazy.length; i++) {
    _loop_1(i);
}
