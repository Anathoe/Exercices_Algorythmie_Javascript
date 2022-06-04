/*
Permis

Un permis de chasse à point possede au départ
un capital de 100 pts

Si le chasseur tire sur (on sait pas si la cible à survecue) :
    - une poule, il perd 1 point
    - un chien, il perd 3 points
    - une vache, il perd 5 points
    - un chasseur, il perd 25 points

Ecrire un script qui permet de calculer le nombre de points perdus.
Sachant qu'un permis coute 200€
Caluclerr en fonction de son tableau de chasse
le cout déboursé par ce chasseur
*/

const form = document.querySelector('form');




/**
 * Il prend 4 nombres comme arguments, calcule le total des points, calcule le coût et calcule les
 * points restants
 * @param nbPoulet - nombre de poulets
 * @param nbChien - nombre de chiens
 * @param nbVache - nombre de vaches
 * @param nbChasseur - nombre de chasseurs
 */ 
const calculPoint = (nbPoulet, nbChien, nbVache, nbChasseur) => {
    
    let poulet = 1;
    let chien = 3;
    let vache = 5;
    let chasseur = 25;

    let pointPoulet = nbPoulet*poulet;
    let pointChien = nbChien*chien;
    let pointVache = nbVache*vache;
    let pointChasseur = nbChasseur*chasseur;

    let totalPoints = pointPoulet+pointChien+pointVache+pointChasseur;

    let cout = (Math.floor(totalPoints/100))*200;

    let restePoint = 100-(totalPoints%100);

    console.log("le chasseur a perdu : ", totalPoints, "points");
    console.log("le coût lui reviens à : ", cout, "euros");
    console.log("Et il lui reste : ", restePoint, "points")

}




const PriseEnChargeDuFormulaire = (evenementSubmit) => {
    
    evenementSubmit.preventDefault();
    evenementSubmit.stopPropagation();
    
    let nbPoulet = evenementSubmit.target.poulet.value;
    let nbChien = evenementSubmit.target.chien.value;
    let nbVache = evenementSubmit.target.vache.value;
    let nbChasseur = evenementSubmit.target.chasseur.value;

    if ( nbPoulet >= 0 && nbChien >= 0 && nbVache >= 0 && nbChasseur >= 0) {
        calculPoint(nbPoulet, nbChien, nbVache, nbChasseur);
    }else {
        console.log("Le chiffre doit être positif");
    }

    nbPoulet = null;
    nbChien = null;
    nbVache = null;
    nbChasseur = null;

};


//2. ecoute d'evenement
form.addEventListener('submit', PriseEnChargeDuFormulaire)