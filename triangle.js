// 1. recupere le ou les élements DOM pour travailler

const form = document.querySelector('form');


//4 triangle



const triangle = (nombre) =>{

    let ligne = "";
    

        for (let i = 1; i <= nombre; i++) {
            let espace = " ".repeat(nombre - i);

            ligne += espace +  " *".repeat(i)+"\n";

        }
    
        console.log(ligne)
    
}





// 3 prise en charge du formulaire
const PriseEnChargeDuFormulaire = (evenementSubmit) => {
    
    evenementSubmit.preventDefault();
    evenementSubmit.stopPropagation();
    

    if (evenementSubmit.target.entreeDeNombre.value > 0) {
        triangle(evenementSubmit.target.entreeDeNombre.value);
    }else {
        console.log("Le chiffre doit être positif");
    }

    evenementSubmit.target.entreeDeNombre.value = null;

};


//2. ecoute d'evenement
form.addEventListener('submit', PriseEnChargeDuFormulaire)