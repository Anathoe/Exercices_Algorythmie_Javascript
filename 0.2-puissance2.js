/*
Puissance 2

Ecrire un script qui determine le nombrede fois
qu'un nombre est divisible par 2

*/

// 1. recupere le ou les élements DOM pour travailler
const number = document.querySelector('input');
const button = document.querySelector('button');
const form = document.querySelector('form');

//1.2. si ca existe pas, créer les elements dont j'ai besoin

// 3. definir la fonction de prise en charge du formaulaire

const puissance2 = (valeur) => {

    let cpt = 0;
    const save = valeur;

    while (valeur%2 == 0) {
        cpt+=1;
        valeur /= 2;
    }
}



const PriseEnChargeDuFormulaire = (evenementSubmit) => {
    
        evenementSubmit.preventDefault();
        evenementSubmit.stopPropagation();
        
    
        if (evenementSubmit.target.entreeDeNombre.value > 0) {
            paireImpaire();
        }else {
            console.log("Le chiffre doit être positif");
        }
    
        evenementSubmit.target.entreeDeNombre.value = null;
    
};


//2. ecoute d'evenement
form.addEventListener('submit', PriseEnChargeDuFormulaire)