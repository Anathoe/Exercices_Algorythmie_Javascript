
/*
Ecrire un programme de tri a bulle:

generer un tableau de nombre aleatoire.

Le principe du tri a bulle est de comparer un element d'un tableau 
avec son voisin suivant,
si l'element est plus grand que son voisin, on inverse les positions
sinon passe à l'élément suivant.

Le script doit permettre de trier le tableau du plus petit au plus grand.
*/


const form = document.querySelector('form');

/**
 * Il génère un tableau de nombres aléatoires, puis compare chaque nombre au suivant, et si le premier
 * nombre est supérieur au second, il les échange. La fonction est appelée avec un nombre, qui est la
 * longueur du tableau. La fonction renvoie le tableau trié. 
 * @param valeur - le nombre de valeurs dans le tableau
 */
const bubbleSort = (valeur) => {
    // generer un tableau de valeur (valeur = nombre d'entrée dans le tableau)
    const tableauAlea = [];

    for (let i = 0; i < valeur; i++) {
        tableauAlea.push(Math.floor(Math.random()*100));      
    } 


    console.log("tableau en entrée : ",tableauAlea)
    
     // on compare un element d'un tableau avec son voisin suivant
     for (let i = 0; i < tableauAlea.length; i++) {
            while (tableauAlea[i] > tableauAlea[i+1]) {
                if (tableauAlea[i] > tableauAlea[i+1]){
                 //si l'element est plus grand que son voisin, on inverse leur position
                 const valeurSuivante = tableauAlea[i+1];
                 tableauAlea[i+1] = tableauAlea[i];
                 tableauAlea[i] = valeurSuivante;
                 // a cause de la réattribution de l'index, je décremente i pour qu'au prochain tour je sois sur le bon index
                 i--;
                 };   
             }
        }            
          console.log("tableau en sortie : ",tableauAlea)             
};
    

const PriseEnChargeDuFormulaire = (evenementSubmit) => {
    
    evenementSubmit.preventDefault();
    evenementSubmit.stopPropagation();
    
    if (evenementSubmit.target.entreeNb.value > 0) {
        bubbleSort(evenementSubmit.target.entreeNb.value);
    }else {
        console.log("Le chiffre doit être positif");
    }

    evenementSubmit.target.entreeNb.value = null;

};


//2. ecoute d'evenement
form.addEventListener('submit', PriseEnChargeDuFormulaire)