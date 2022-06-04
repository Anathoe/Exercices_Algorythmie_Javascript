/*
LeJustePrix !

But de l'exercice :
    
Votre programme génère un nombre aléatoire
entre 1 et 1 000.

Il demande ensuite à l'utilisateur de proposer
un nombre.

L'utilisateur entre un nombre dans la console :
    - Si celui-ci est plus petit que le nombre généré, le programme affiche :
    "C'est PLUS !" et demande un nouveau nombre.
    - Si celui-ci est plus grand que le nombre généré, le programme affiche :
    "C'est MOINS !" et demande un nouveau nombre.
    - Si celui-ci est le nombre généré aléatoirement, le programme affiche :
    "C'est GAGNÉ !" puis l'exécution du programme se termine.

Le nombre d'essaie de l'utilisateur est limité à 10 :
    - Chaque tour, le programme affiche le nombre de tours restants à
    l'utilisateur
    - Si au bout de 10 essais l'utilisateur n'a pas trouvé le nombre,
    le programme affiche : "C'est PERDU ! Le nombre était : nombreAleatoire"
    puis l'exécution du programme se termine.

En bonus : ajouter des inputs pour modifier la limit et le nombre de vie
mais desactiver ces input apres la premiere entrée !
*/


const form = document.querySelector('form');
const labelNombre = document.querySelectorAll('label')[0];
const inputPrixMax = document.querySelector('#prixmax');
const inputPtVie = document.querySelector('#pointsdevie');
 

let cptVie = 20;

    // on créer une valeur aléatoire positive allant de 1 à 10000.
    let randomPrixVirg = Math.random()*10000;
    let randomPrix = Math.floor(randomPrixVirg);


const justePrix = (propPrix) => {

    labelNombre.innerText = "Entrée un nombre en 1 et 10000";
    
    // on décrémente le compteur de points de vie
    cptVie--;

    if (cptVie == 0) {
        // si les points de vie tombent à 0, le jeu est terminé
        console.log("C'est PERDU ! Vous avez épuisé toutes vos vies !")
    } else {
        if (propPrix < randomPrix) {
                // si la proposition de prix est inférieure au prix recherché, on annonce "C'est PLUS !"
                console.log(propPrix,"? 🤔 C'est PLUS 👆 ! Il ne vous reste que", cptVie, "chances")
            } else if (propPrix > randomPrix) {
                // si la proposition de prix est supérieur au prix recherché, on annonce "C'est MOINS !"
                console.log(propPrix,"? 🤔 C'est MOINS 👇 ! Il ne vous reste que", cptVie, "chances")
            } else if (propPrix == randomPrix) {
                // si la proposition de prix est égale au prix recherché, on annonce "C'est GAGNE !"
                console.log(propPrix,"? C'est GAGNE ! BRAVO 🥳 !")
                return;
            }
    }
}



const PriseEnChargeDuFormulaire = (evenementSubmit) => {
    
    evenementSubmit.preventDefault();
    evenementSubmit.stopPropagation();
    
    if (evenementSubmit.target.nombre.value > 0) {
        justePrix(evenementSubmit.target.nombre.value);
    }else {
        console.log("Le chiffre doit être positif");
    }

    evenementSubmit.target.nombre.value = null;

};


//2. ecoute d'evenement
form.addEventListener('submit', PriseEnChargeDuFormulaire)