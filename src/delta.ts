const dane: Array<number> = [1,2,3,2,4,-10,1,2,1];

for (let i = 0; i < dane.length/3; i++){
    const elementA: number = dane[0+3*i];
    const elementB: number = dane[1+3*i];
    const elementC: number = dane[2+3*i];

    ObliczDelte(elementA, elementB, elementC);

    function ObliczDelte(a: number, b: number, c: number){
        console.log('---------------------------------------------------');
        console.log('Liczby w działaniu: a =',a,'| b =',b,'| c =',c);
        
        const delta = Math.pow(b, 2)-4*a*c;
        console.log('Delta wynosi', delta);

        function WyznaczMiejscaZerowe(delta: number, a: number, b: number){
            if (delta > 0) {
                console.log('Delta > 0');
                const x1=(-b-Math.sqrt(delta)) / (2*a);
                const x2=(-b+Math.sqrt(delta)) / (2*a);
                console.log('Pierwsze miejsce zerowe:', Math.round(x1));
                console.log('Drugie miejsce zerowe:', Math.round(x2));
            }
        
            if (delta == 0) {
                console.log('Delta = 0');
                const x=-b/2*a;
                console.log('Miejsce zerowe:', Math.round(x));
            }
        
            if (delta < 0) {
                console.log('Delta < 0');
                console.log('Brak miejsc zerowych');
            }
        }
        WyznaczMiejscaZerowe(delta, a, b)
    }
}

