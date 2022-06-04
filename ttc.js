/* 
Calcul d'un prix TTC

créer un script qui demande le prix hors taxe d'un article.
Puis qui demande si l'article est de la nourriture ou non.

Le script doit calculer le prix TTC selon si c'est de la nourriture ou non.

Rappel, pour les bien communs la TVA est de 20.0% sinon c'est 5.5% pour de la nourriture

*/

// 1. recupere le ou les élements DOM pour travailler

const form = document.querySelector('form');



//4 calcul du prix TTC

const calculPrixTtc = (prixHt) => {

    let prixTtc = 0;

    // je verifie que la checkbox nourriture est coché
    if (document.getElementById("nourriture").checked === true) {
        prixTtc = prixHt*1.055;
        console.log("Votre prix HT :", prixHt, "€ est taxé à 5.5%");
        console.log("Le prix TTC est de", prixTtc.toFixed(2), "€");
    } else {
        prixTtc = prixHt*1.20;
        console.log("Votre prix HT :", prixHt, "€ est taxé à 20%");
        console.log("Le prix TTC est de", prixTtc.toFixed(2), "€");
    }

    
 
}



// 3 prise en charge du formulaire
const PriseEnChargeDuFormulaire = (evenementSubmit) => {
    
    evenementSubmit.preventDefault();
    evenementSubmit.stopPropagation();
    

    if (evenementSubmit.target.entreeDeNombre.value > 0) {
        calculPrixTtc(evenementSubmit.target.entreeDeNombre.value);
    }else {
        console.log("Le chiffre doit être positif");
    }

    evenementSubmit.target.entreeDeNombre.value = null;

};


//2. ecoute d'evenement
form.addEventListener('submit', PriseEnChargeDuFormulaire)