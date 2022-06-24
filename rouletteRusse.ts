import read from 'readline-sync';

// Demande et enregistrement du nombre de balles dans le barrillet
let nbBalle = read.questionInt('Veuillez indiquer le nombre de balles dans le barillet :');
console.log(`Vous avez choisi de mettre ${nbBalle} balle(s) dans le barillet`);

// Tableau simulant le barrillet
let barillets : number[] = [0, 0, 0, 0, 0, 0, 0, 0];



for (let i = 0; i < barillets.length; i++) {

    for (let j = 0; j < nbBalle; j++) {
        let balleN = barillets.shift();
        barillets.push(1);
        barillets.sort(() => Math.random() - 0.5);
    }

    while (barillets[0] == 0 || barillets[0] == 1) {
        if(barillets[0] == 0 ){
            console.log(`Pas de détonation`);
            read.question(`Joueur Suivant, a votre tour`);
            barillets.sort(() => Math.random() - 0.5);
        } else {
            console.log(`
                            ======----- BANG !   
                            //)    |__|      `);
            break;
        }
    }

    if (barillets[0] == 1) {
        break;
    }

}










    

