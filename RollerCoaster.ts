import read from 'readline-sync';

/* Enregistrement des variables pour :
    - le nombre de places dans le wagon
    - le nombre de tours sur une journée
    - Le tableau des groupes
    - l'initialisation de la variable du profit
    - Le nombre de groupes maximum pour un tour
*/

let nbPlace = () => {
    const PLACE : number = read.questionInt(`Veuillez entrer le nombre de places dans le manege :`);
    return PLACE
}

let nbTour = () => {
    const TOURS : number = read.questionInt(`Veuillez entrer le nombre de tours dans une journee :`);
    return TOURS;
}

let files : number[] = [2, 3, 5, 4];
let profit : number = 0;
let nbGrpMax : number = files.length;


/**
 * La fonction RollerCoaster() prend un tableau de nombres comme argument et renvoie la somme des
 * nombres du tableau.
 */
let RollerCoaster = () => {
    let PLACE = nbPlace();
    let TOURS = nbTour();
    // une première boucle qui fait les tours sur une journée
    for (let j = 0; j < TOURS; j++) {
        // initialisation du nombre de place occupées dans le wagon
        let placeOqp : number = 0;
        //un boucle for en fonction du nombre de place encore disponible par tour
        for (let i = 0; ((placeOqp + files[0]) <= PLACE && placeOqp < nbGrpMax); i++) {
            // addition du nombre de places occupées avec le nombre d'occupant du groupe actuel
            placeOqp = files[0] + placeOqp;
            // retrait et enregistrement du premier groupe de la file d'attente
            let premierGroupe : number = <number>files.shift();
            // ajout du groupe retiré à la fin de la file d'attente
            files.push(premierGroupe);
            // affichage de l'état de la file d'attente
            console.log(files);        
        }  
        //affichage du profit par tour
        console.log(`Profit pour ce tour ${placeOqp}`);
        // Enregistrement du profit cumulé par tour
        profit = placeOqp + profit;
    }
        // affichage du profit global sur une journée
        console.log(`Le profit cumulé pour ce jour est de ${profit}€`);

}

RollerCoaster();

    


