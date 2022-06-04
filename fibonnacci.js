/*
Ecrire l'algorithme de la suite de fibonacci:

C'est une suite définie par Un = Un-1 + Un-2

Si vous trouvez ça trop facile, passez par une fonction récursive
( c'est à dire fonction qui s'appelle elle meme)

ex: 
0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610
*/


const form = document.querySelector('form');

/**
 * Je crée un tableau avec les deux premières valeurs de la séquence de Fibonacci, puis j'additionne
 * les deux dernières valeurs du tableau et pousse le résultat dans le tableau, et je répète ce
 * processus jusqu'à ce que la dernière valeur du tableau soit supérieure à la valeur saisie par
 * l'utilisateur.
 * @param valeur - le nombre que vous voulez obtenir la suite de fibonacci jusqu'à
 */
const fibonacci = (valeur) => {
    
    // j'enregistre un tableau avec les 2 premieres valeurs
    const tableauI = [0,1]; 
    console.log(tableauI[0]);
    console.log(tableauI[1]);
    // tant que la derniere valeur du tableau ne depasse pas la valeur d'entrée
    for (let i = 2; tableauI[i-1] < valeur; i++) {

        // je recupere les 2 dernières valeurs du tableau
        const valeurUn = tableauI[i-1];
        const valeurDeux = tableauI[i-2];
        // je les addictionne
        const newPush = valeurUn + valeurDeux;

        // je push la nouvelle valeur dans le tableau
        tableauI.push(newPush);

        // j'affiche le tableau
        console.log(tableauI[i]);

    }
        
}

const PriseEnChargeDuFormulaire = (evenementSubmit) => {
    
    evenementSubmit.preventDefault();
    evenementSubmit.stopPropagation();
    
    if (evenementSubmit.target.entreeNb.value > 0) {
        fibonacci(evenementSubmit.target.entreeNb.value);
    }else {
        console.log("Le chiffre doit être positif");
    }

    evenementSubmit.target.entreeNb.value = null;

};


//2. ecoute d'evenement
form.addEventListener('submit', PriseEnChargeDuFormulaire)