/*
Train :

Un train est parti de la gare du Nord à 9 h
(il y a 170 km entre la gare du Nord et Arras).

Écrire un script qui affiche un tableau me permettant de connaître
l'heure à laquelle le train passe à Arras.

Le tableau prédira les différentes heures possibles:
pour toutes les vitesses de 100 km/h à 300 km/h, par pas de 10 km/h,
les résultats étant arrondis à la minute inférieure.

Écrire une fonction tchoutchou qui reçoit la vitesse du train et
qui affiche l'heure du passage;

Écrire le programme principal qui affiche le tableau demandé.
*/

const form = document.querySelector('form');



/**
 * Il prend une vitesse en paramètre et renvoie l'heure d'arrivée à Arras pour chaque vitesse comprise
 * entre 100 et la vitesse donnée.
 * @param vitesse - la vitesse maximale du train
 */
const tchoutchou = (vitesse) => {

    
    const gareArras = 170 //km/h;
    const heureDepart = 9 //heures;

    // on boucle pour incrementer la vitesse de 10km/h a chaque boucle
    for (let i = 100; i <= vitesse; i+=10) {

        // calcul du temps mis en fonction de la vitesse : temps = distance / vitesse
        let tempsDeTrajet = (gareArras/i)*60;
        
        const minute = Math.floor((tempsDeTrajet%60))

        tempsDeTrajet = tempsDeTrajet/60;
        
        // on calcul l'heure d'arrivé en fonction de l'heure de départ et du temps de trajet : heure de départ + temps de trajet
        //let heureArrivee = ;
        const heureArrivee = heureDepart+tempsDeTrajet

        console.log("A", i ,"km/h, \n 🚋🚋🚋🚋🚋🚋 \n le train arrivera à Arras à", Math.trunc(heureArrivee), "h",minute )
    }
}



// 3. definir la fonction de prise en charge du formaulaire

/** Prise en charge du formulaire par un Submit */
const PriseEnChargeDuFormulaire = (evenementSubmit) => {
    
    evenementSubmit.preventDefault();
    evenementSubmit.stopPropagation();
    

    if (evenementSubmit.target.vitesse.value > 0) {
        tchoutchou(evenementSubmit.target.vitesse.value);
    }else {
        console.log("Le chiffre doit être positif");
    }

    evenementSubmit.target.vitesse.value = null;
};

//2. ecoute d'evenement
/** event submit du formulaire */
form.addEventListener('submit', PriseEnChargeDuFormulaire)