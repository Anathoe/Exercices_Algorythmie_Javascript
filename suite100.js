/* 
créer un script qui demande une suite de nombres positifs ou nuls.

Calculez la somme de cette suite à chaque nombre ajouté.
Comptez combien il y avait de données et combien étaient supérieur à 100

Affichez le résultat et continuez
*/

const form = document.querySelector('form');


let nbsuite = 0;
let tableauDeDonnées =[];
const suite = (numero) => {

    //recuperer le nombre, stocker et l'afficher
    
    
    //recuperer le nombre suivant l'additionner au nombre precedent et l'afficher
    nbsuite += parseInt(numero);
    console.log(nbsuite);

    //stocher le nouveau résultat de la suite dans un tableau

    tableauDeDonnées.push(nbsuite);


    // on recherche les résultat supérieur à 100 dans le tableau

    tableauDeDonnées.forEach(element => {
        if (element >= 100) {
            console.log(element);
        }
    });

    //remise à zero

}






// prise en charge du formulaire pour récupérer la valeur de l'input positif
const PriseEnChargeDuFormulaire = (evenementSubmit) => {
    
    evenementSubmit.preventDefault();
    evenementSubmit.stopPropagation();
    

    if (evenementSubmit.target.nombre.value > 0) {
        suite(evenementSubmit.target.nombre.value);
    }else {
        console.log("Le chiffre doit être positif");
    }

    evenementSubmit.target.nombre.value = null;

};


//2. ecoute d'evenement
form.addEventListener('submit', PriseEnChargeDuFormulaire)