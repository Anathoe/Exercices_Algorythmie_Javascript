import read from 'readline-sync';

let tableauVide : string[] = ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  "];


/**
 * Fonction qui vérifie les conditions de victoire
 * soit en ligne, soit en diagonale
 * si la condition est vérifiée, la fonction retourne "True"
 * sinon elle retourne "False"
 * @returns true / false
 */
let conditionsDeVictoire = () => {
      
    if (tableauVide[0] == "❎" && tableauVide[1] == "❎" && tableauVide[2] == "❎") {       // | X | X | X |
        console.log(`Le joueur 1 a gagne`);
        return true;
    } else if (tableauVide[0] == "0️⃣ " && tableauVide[1] == "0️⃣ " && tableauVide[2] == "0️⃣ "){ // | O | O | O |
        console.log(`Le joueur 2 a gagne`);
        return true;
    } else if (tableauVide[3] == "❎" && tableauVide[4] == "❎" && tableauVide[5] == "❎") { // | X | X | X |
        console.log(`Le joueur 1 a gagne`);
        return true;
    } else if (tableauVide[3] == "0️⃣ " && tableauVide[4] == "0️⃣ " && tableauVide[5] == "0️⃣ "){ // | O | O | O |
        console.log(`Le joueur 2 a gagne`);
        return true;
    } else if (tableauVide[6] == "❎" && tableauVide[7] == "❎" && tableauVide[8] == "❎"){ // | X | X | X |
        console.log(`Le joueur 1 a gagne`);
        return true;
    } else if (tableauVide[6] == "0️⃣ " && tableauVide[7] == "0️⃣ " && tableauVide[8] == "0️⃣ "){ // | O | O | O |
        console.log(`Le joueur 2 a gagne`);
        return true;
    } else if (tableauVide[0] == "❎" && tableauVide[3] == "❎" && tableauVide[6] == "❎"){ // | X | X | X |
        console.log(`Le joueur 1 a gagne`);
        return true;
    } else if (tableauVide[0] == "0️⃣ " && tableauVide[3] == "0️⃣ " && tableauVide[6] == "0️⃣ "){ // | O | O | O |
        console.log(`Le joueur 2 a gagne`);
        return true;
    } else if (tableauVide[1] == "❎" && tableauVide[4] == "❎" && tableauVide[7] == "❎"){ // | X | X | X |
        console.log(`Le joueur 1 a gagne`);
        return true;
    } else if (tableauVide[1] == "0️⃣ " && tableauVide[4] == "0️⃣ " && tableauVide[7] == "0️⃣ "){ // | O | O | O |
        console.log(`Le joueur 2 a gagne`);
        return true;
    } else if (tableauVide[2] == "❎" && tableauVide[5] == "❎" && tableauVide[8] == "❎"){ // | X | X | X |
        console.log(`Le joueur 1 a gagne`);
        return true;
    } else if (tableauVide[2] == "0️⃣ " && tableauVide[5] == "0️⃣ " && tableauVide[8] == "0️⃣ "){ // | O | O | O |
        console.log(`Le joueur 2 a gagne`);
        return true;
    } else if (tableauVide[0] == "❎" && tableauVide[4] == "❎" && tableauVide[8] == "❎"){ // | X | X | X |
        console.log(`Le joueur 1 a gagne`);
        return true;
    } else if (tableauVide[0] == "0️⃣ " && tableauVide[4] == "0️⃣ " && tableauVide[8] == "0️⃣ "){ // | O | O | O |
        console.log(`Le joueur 2 a gagne`);
        return true;
    } else if (tableauVide[2] == "❎" && tableauVide[4] == "❎" && tableauVide[6] == "❎"){ // | X | X | X |
        console.log(`Le joueur 1 a gagne`);
        return true;
    } else if ((tableauVide[2] == "0️⃣ " && tableauVide[4] == "0️⃣ " && tableauVide[6]) == "0️⃣ "){ // | O | O | O |
        console.log(`Le joueur 2 a gagne`);
        return true;
    } else {
        return false;
    }

}

/**
 * Affichage du morpion dans la console
 */
 let affichageTicTacToe = () => {
    console.log(`

    --------------------            -----------------  
   |  ${tableauVide[0]}  |  ${tableauVide[1]}  |  ${tableauVide[2]}  |          |  1  |  2  |  3  | 
    --------------------            -----------------
   |  ${tableauVide[3]}  |  ${tableauVide[4]}  |  ${tableauVide[5]}  |          |  4  |  5  |  6  | 
    --------------------            -----------------
   |  ${tableauVide[6]}  |  ${tableauVide[7]}  |  ${tableauVide[8]}  |          |  7  |  8  |  9  |
    --------------------            -----------------

`)
}


/**
 * Tant qu'aucune condition de victoire n'est validée, les joueurs jouent chacun leur tour
 * en utilisant un modulo de 2. Le joueur 1 place des croix en remplacant les espace dans le tableau.
 * le joueur 2 fait la même chose avec les ronds.
 * A chaque tour, si la condition de victoire n'est pas validée, on passe au joueur suivant.
 * Si une condition de victoire est validée, la partie s'arrete.
 */
let deroulementDeLaPartie = () => {

    
    //Tant que la condition de victoire n'est pas validé, on continue de jouer
    while (conditionsDeVictoire() != true) {
        
        //Passage d'un joueur à l'autre, si le modulo de i == 0
        for (let i = 0; conditionsDeVictoire() != true ; i++) {
            if (i%2 != 0) {
                affichageTicTacToe();
                let tour : number = read.questionInt(`Joueur 2, veuillez choisir une case : `);
                tableauVide.splice((tour-1),1,"0️⃣ ");//recupere l'index du tableau et remplace l'espace par un "O"
                conditionsDeVictoire();
                console.clear();
                
            } else {
                affichageTicTacToe();
                let tour : number = read.questionInt(`Joueur 1, veuillez choisir une case : `);
                tableauVide.splice((tour-1),1,"❎");//recupere l'index du tableau et remplace l'espace par un "X"
                conditionsDeVictoire();
                console.clear();
            }
            
        }
    }

}

deroulementDeLaPartie();
