const dane: Array<number> = [1,2,3,2,4,-10,1,2,1];

ObliczDelte();

function ObliczDelte(){
    for (let i = 0; i < dane.length/3; i++){
        let a: number = dane[0+3*i];
        let b: number = dane[1+3*i];
        let c: number = dane[2+3*i];

        console.log('---------------------------------------------------');
        console.log('Liczby w działaniu: a =',a,'| b =',b,'| c =',c);

        let delta = Math.pow(b, 2)-4*a*c;
        console.log('Delta wynosi', delta);

        if (delta > 0) {
            console.log('Delta > 0');
            let x1=(-b-Math.sqrt(delta)) / (2*a);
            let x2=(-b+Math.sqrt(delta)) / (2*a);
            console.log('Pierwsze miejsce zerowe:', Math.round(x1));
            console.log('Drugie miejsce zerowe:', Math.round(x2));
        }

        if (delta == 0) {
            console.log('Delta = 0');
            let x=-b/2*a;
            console.log('Miejsce zerowe:', Math.round(x));
        }

        if (delta < 0) {
            console.log('Delta < 0');
            console.log('Brak miejsc zerowych');
        }
    }
}

