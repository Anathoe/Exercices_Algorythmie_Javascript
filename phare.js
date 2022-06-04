/*
Phare :

Un gardien de phare doit se rendre au toillette 5 fois par jour.
Malheuresement, elle se trouve au rez-de-chaussé.

Creer un script qui permet calculer pour x marche(s) de y cm
la distance parcourue par semaine de se gardien de phare.

astuce : une fois terminé il doit remonter

bonus : afficher une tour qui à la largeur des marches en *
et un nombre d'etage correspondant au nombre de marches
*/

const form = document.querySelector('form');
const hauteurMarche = document.querySelector('#hauteurmarche').value;
const nbMarche = document.querySelector('#entreeDeNombre').value;


//4

const hauteurPhare = (nbMarche, hauteurMarche) => {
    let distTotal = ((nbMarche*10)*7)*hauteurMarche;
    console.log("Pour parcourir",((nbMarche*10)*7),"marches de",hauteurMarche,"cm");
    console.log("le gardien doit parcourir :", (distTotal/100), "m, soit :", (distTotal/100000), "km");
}

const dessinPhare = (nbMarche, hauteurMarche) => {

    console.log(nbMarche,hauteurMarche)

    nbEtage = nbMarche/hauteurMarche;

    let ligne = "";
    
for (let j = 0; j < nbEtage; j++) {
    
    console.log("+")

    for (let i = 1; i <= hauteurMarche; i++) {
        let espace = " ".repeat(i);
        ligne += espace +  " *"+"\n";
    }

    
   
}
console.log(ligne)


}
// 3. definir la fonction de prise en charge du formaulaire

/** Prise en charge du formulaire par un Submit */
const PriseEnChargeDuFormulaire = (evenementSubmit) => {
    
    evenementSubmit.preventDefault();
    evenementSubmit.stopPropagation();
    

    if (evenementSubmit.target.entreeDeNombre.value > 0) {
        hauteurPhare(evenementSubmit.target.entreeDeNombre.value, evenementSubmit.target.hauteurmarche.value);
        dessinPhare(evenementSubmit.target.entreeDeNombre.value, evenementSubmit.target.hauteurmarche.value);
    }else {
        console.log("Le chiffre doit être positif");
    }

    evenementSubmit.target.entreeDeNombre.value = null;
};

//2. ecoute d'evenement
/** event submit du formulaire */
form.addEventListener('submit', PriseEnChargeDuFormulaire)