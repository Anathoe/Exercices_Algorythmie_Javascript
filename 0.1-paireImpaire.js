/*

paire ou impaire

créer in script qui demande un nombre

le script doit afficher si le nombre est paire ou impaire
*/

// 1. recupere le ou les élements DOM pour travailler
const number = document.querySelector('input');
const button = document.querySelector('button');
const form = document.querySelector('form');

//1.2. si ca existe pas, créer les elements dont j'ai besoin

// 4. paire ou impaire
const paireImpaire = (unNombre) => {
    if (unNombre%2 == 0) {
        console.log(unNombre, " c'est paire");
    } else {
        console.log(unNombre, " c'est impaire");
    };
    
}

// 3. definir la fonction de prise en charge du formaulaire


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