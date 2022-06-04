/*
Conjecture de Syracuse !

Introduction :
    
On appelle suite de Syracuse une suite d'entiers naturels définie de la
manière suivante : 
    On part d'un nombre entier plus grand que zéro :
    - s’il est pair, on le divise par 2
    - s’il est impair, on le multiplie par 3 et
     on ajoute 1.

La conjecture de Syracuse est l'hypothèse
mathématique selon laquelle
la suite de Syracuse de n'importe quel
entier strictement positif atteint 1.

But de l'exercice :

Le but de l'exercice est d'implémenter un programme qui part d'un nombre
donné par l'utilisateur et qui renvoie le nombre d'étapes pour atteindre 1
en utilisant la suite de Syracuse.
*/

const form = document.querySelector('form');



/**
 * La fonction prend un nombre comme argument, puis vérifie si le nombre est pair ou impair. 
 * S'il est pair, il divise le nombre par 2. S'il est impair, il multiplie le nombre par 3 et ajoute 1. 
 * Il répète ensuite ce processus jusqu'à ce que le nombre soit égal à 1.
 * @param nombre - le numéro avec lequel vous voulez commencer
 */
const syracuse = (nombre) => {
    let cpt = 0;
    while (nombre > 1) {
            
            // on defini si le nombre est paire ou impaire
            if (nombre%2 === 0) {
                // si paire, on le divise par 2
                nombre = nombre/2;
            } else {
                // si impaire, on le multiplie par 3 et on ajoute 1
                nombre = (nombre*3)+1;
            }
            console.log(nombre);
            cpt++;
    }

    console.log("il a fallu", cpt, "etapes pour atteindre 1")
}


const PriseEnChargeDuFormulaire = (evenementSubmit) => {
    
    evenementSubmit.preventDefault();
    evenementSubmit.stopPropagation();
    
    let nombre = evenementSubmit.target.nombre.value;
   

    if ( nombre > 0 ) {
        syracuse(nombre);
    }else {
        console.log("Le chiffre doit être positif");
    }

    nombre = null;
};


//2. ecoute d'evenement
form.addEventListener('submit', PriseEnChargeDuFormulaire)