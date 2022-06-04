/* 
FizzBuzz !

Afficher en console les nombres de 1 à 35 (un par ligne) 
en remplacant les multiples de 3 par "Fizz" et le multiple de 5 par "Buzz!".
Les multiples de 3 et de 5 seront remplacés par "FizzBuzz".

*/




/**
 * Si le nombre est divisible par 3 et 5, imprimez FizzBuzz, s'il est divisible par 3, imprimez Fizz,
 * s'il est divisible par 5, imprimez Buzz, sinon imprimez le nombre.
 */
const fizzBuzz = () => {
    for (let i = 0; i < 36; i++) {
        if (i%5 === 0 && i%3 === 0) {
            console.log("FizzBuzz !");
        } else if (i%3 === 0) {
            console.log("Fizz !");
        } else if (i%5 === 0) {
            console.log("Buzz !");
        } else {
            console.log(i); 
        }
    }
}

fizzBuzz();