// 1. recupere le ou les élements DOM pour travailler
const score = document.querySelector('.score');
const cliquezIci = document.querySelector('.enfant');
const clicBlocParent = document.querySelector('.parent');
const ScoreTitle = document.querySelector('title');
const btnReset = document.querySelector('button');

/** Variable qui enregistre le score Enfant */
let ScoreEnfant = 0;

/** Variable qui enregistre le score Parent */
let ScoreParent = 0;

//1.2. si ca existe pas, créer les elements dont j'ai besoin

// 3. Fonction clicParent et clicEnfant

/**  Fonction qui incremente le score Enfant et l'insere dans un paragraphe */
const clicEnfant = (event) => {
    event.preventDefault();
    event.stopPropagation();
    ScoreEnfant++;
    console.log("Parent : " + ScoreParent + " Enfant : " + ScoreEnfant);
    score.textContent = "Parent : " + ScoreParent + " Enfant : " + ScoreEnfant;
}

/**  Fonction qui incremente le score Parent et l'insere dans un paragraphe */
const clicParent = () => {
    ScoreParent++;
    console.log("Parent : " + ScoreParent + " Enfant : " + ScoreEnfant);
    ScoreTitle.textContent = "Parent : " + ScoreParent + " Enfant : " + ScoreEnfant;
    score.textContent = "Parent : " + ScoreParent + " Enfant : " + ScoreEnfant;
}

/**  Fonction qui remet les compteurs à 0 */
const reset = () => {
    ScoreEnfant = 0;
    ScoreParent = 0;

    score.textContent = "Parent : " + ScoreParent + " Enfant : " + ScoreEnfant;
}

//2. ecoute d'evenement

cliquezIci.addEventListener('click', clicEnfant);
clicBlocParent.addEventListener('click', clicParent);
btnReset.addEventListener('click', reset);