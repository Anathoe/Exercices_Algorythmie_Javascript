/*
Permier :

créer un script qui permet de définir si un nombre est premier ou non

Si il ne l'est pas, le script doit permetre de savoir combien de fois il peut se diviser

rappel : un nombre premier n'est divisible que par 1 et par lui même.
*/

// 1. recupere le ou les élements DOM pour travailler
const number = document.querySelector('input');
const button = document.querySelector('button');
const form = document.querySelector('form');


// 4. permier

/** Défini si le nombre est un entier ou non */



const premier = (unNombre) => {

    let cpt = 0; // mon compteur, nombre de diviseur
    let i = 2; //le plus petit diviseur possible de mon nombre
    let limite = unNombre/2 // limite de calcul du plus grand diviseur possible entier

    console.log("Diviseurs propres sans répétition de " + unNombre + " : ");

    // si le nombre est un entier
    while (i <= limit) {
        // verifie si 1 est un diviseur entier de mon nombre$
        if(unNombre%i == 0){
            cpt++;
            console.log(i);
        }
        
        i++
    }

    if (cpt == 0) {
        console.log("aucun diviseur ! C'est un nombre premier");
    }else{
        console.log("(soit", cpt, "diviseurs propres" )
    }

    console.log(premier(unNombre))
}

// 3. definir la fonction de prise en charge du formaulaire

/** Prise en charge du formulaire par un Submit */
const PriseEnChargeDuFormulaire = (evenementSubmit) => {
    
    evenementSubmit.preventDefault();
    evenementSubmit.stopPropagation();
    

    if (evenementSubmit.target.entreeDeNombre.value > 0) {
        premier(evenementSubmit.target.entreeDeNombre.value);
    }else {
        console.log("Le chiffre doit être positif");
    }

    evenementSubmit.target.entreeDeNombre.value = null;
};

//2. ecoute d'evenement
/** event submit du formulaire */
form.addEventListener('submit', PriseEnChargeDuFormulaire)