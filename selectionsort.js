
/*
Ecrire un programme de tri par selection:

generer un tableau de nombre aleatoire.

Le tri par selection a pour principe de chercher l'element le plus petit
d'un tableau puis de le placer au debut du tableau

par exemple:
    tableau de depart: 8 , 5 , 1 , 7 , 6 , 4
    premiere iteration: 1 , 5 , 8 , 7 , 6 , 4
    deuxieme iteration: 1 , 4 , 8 , 7 , 6 , 5
    troisieme iteration: 1 , 4 , 5 , 7 , 6 , 8
    quatrieme iteration: 1 , 4 , 5 , 6 , 7 , 8
    cinquieme iteration: le tableau est dans l'ordre fin du tri
*/

const form = document.querySelector('form');



const selectionSort = (valeur) => {
    // on générer un tableau de nombre aléatoire (valeur = nombre d'entrée dans le tableau)
    const tableauAlea = [];

    for (let i = 0; i < valeur; i++) {
        tableauAlea.push(Math.floor(Math.random()*100));      
    } 
    

    console.log("tableau en entrée : ",tableauAlea)

    let petit = 0;

        
        for (let i = 0; i < tableauAlea.length; i++) {
            
            console.log(tableauAlea[i], petit)
            // on va chercher l'element le plus petit
            petit = Math.min(...tableauAlea.slice(i));
            // on recupere son index
            const indexPetit = tableauAlea.indexOf(petit);
    
            // on retire du tableau
            if (indexPetit !== -1) {
                tableauAlea.splice(indexPetit, 1);
            }
    
            //et on place l'element au debut du tableau
            tableauAlea.unshift(petit);   
        }

        tableauAlea.reverse();
        console.log("tableau en sortie : ",tableauAlea) 

};

    
    
    

    





const PriseEnChargeDuFormulaire = (evenementSubmit) => {
    
    evenementSubmit.preventDefault();
    evenementSubmit.stopPropagation();
    
    if (evenementSubmit.target.entreeNb.value > 0) {
        selectionSort(evenementSubmit.target.entreeNb.value);
    }else {
        console.log("Le chiffre doit être positif");
    }

    evenementSubmit.target.entreeNb.value = null;

};


//2. ecoute d'evenement
form.addEventListener('submit', PriseEnChargeDuFormulaire)