import read from 'readline-sync';

const TEMPERATURES : number[] = [12, 25, 5, -2, 1, -1, 7, 6, -5];
let tpCourante : number = TEMPERATURES[0];  
let tpZero : number = 0;
for (let i = 1; i < TEMPERATURES.length; i++) {
    let tpPosi = Math.abs(TEMPERATURES[i])
    if (tpPosi < tpCourante) {
        tpCourante = tpPosi;
        tpZero = TEMPERATURES[i];
    } else if (tpPosi == tpCourante) {
        if (TEMPERATURES[i] < tpZero) {
            tpZero = TEMPERATURES[i];
        }
    }
}
console.log(`La température la plus proche de zéro est ${tpZero}`);
    
    
       

 


