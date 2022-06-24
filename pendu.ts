import read from 'readline-sync';

let motADeviner : string = read.question(`Saisisser un mot : `);
let motCache : string[] = [];
let nbVie : number = read.questionInt(`Indiquer un nombre de vie : `);

let dissimulationDuMot = () => {
    motADeviner.split('');
    for (const lettre of motADeviner) {
            motCache.push("_");
    }
}

let deroulementJeu = () => {
    dissimulationDuMot();

    console.log(motCache.join(''));
     
    let motADevSplit = motADeviner.split('');
    let vie = nbVie;
    let isWin = false;
    while (motCache != motADevSplit && isWin == false && vie > 0) {
        let choixLettre : string = read.question('Veuilez saisir une lettre : ');
        if (motADevSplit.includes(choixLettre)) {
            for (let i = 0; i < motADeviner.length; i++) { 
                if (choixLettre == motADeviner[i]) {
                    motCache[i] = choixLettre; 
                    if (motCache.join('') == motADeviner) {
                        console.log(`Bravo !`);
                        isWin = true;
                    } 
                } 
            }
            console.log(motCache.join(''));
        } else {
            vie--;
            console.log(`Votre nombre de vie est de ${vie}`);
            if (vie == 0) {
                console.log(`Vous avez épuisé toutes vos vie`);
                
            }
        } 
    }

    
   
    
}

deroulementJeu();


