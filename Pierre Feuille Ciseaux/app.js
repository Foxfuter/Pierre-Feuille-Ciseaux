const pierreBtn = document.querySelector(".pierre-btn");
const feuilleBtn = document.querySelector(".feuille-btn");
const ciseauxBtn = document.querySelector(".ciseaux-btn");
const resultElement = document.querySelector(".resultat")

let playerChoice;
let computerChoice;

function generateComputerChoice() {
  const tableau = ['Pierre', 'Feuille', 'Ciseaux'];
  return tableau[Math.floor(Math.random() * tableau.length)];
}

function onClick(event) {
  playerChoice = event.target.dataset.option;
  computerChoice = generateComputerChoice();
  
  console.log(`Joueur : ${playerChoice}`);
  console.log(`Ordinateur : ${computerChoice}`);

  console.log(check_win(playerChoice , computerChoice))

  const result = check_win(playerChoice, computerChoice)
  resultElement.innerHTML = `${playerChoice} vs ${computerChoice} = ${result}` 
}

pierreBtn.addEventListener('click', onClick);
feuilleBtn.addEventListener('click', onClick);
ciseauxBtn.addEventListener('click', onClick);


function check_win(choixUtilisateur , choixOrdinateur){
    if(choixUtilisateur === choixOrdinateur){
        return "Egalité !"

    } else if (choixUtilisateur === "Pierre" && choixOrdinateur === "Ciseaux"){
        return "La Pierre écrase les Ciseaux ! Tu as gagné !"

    } else if (choixUtilisateur === "Pierre" && choixOrdinateur === "Feuille"){
        return "La Feuille recouvre la Pierre ! Tu as perdu !"

    } else if (choixUtilisateur === "Ciseaux" && choixOrdinateur === "Feuille"){
        return "Les Ciseau coupe la Feuille ! Tu as gagné !"

    } else if (choixUtilisateur === "Ciseaux" && choixOrdinateur === "Pierre"){
        return "La Pierre écrase les Ciseaux ! Tu as perdu !"

    } else if (choixUtilisateur === "Feuille" && choixOrdinateur === "Pierre"){
        return "La Feuille recouvre la Pierre ! Tu as gagné !"

    } else if (choixUtilisateur === "Feuille" && choixOrdinateur === "Ciseaux"){
        return "Les Ciseau coupe la Feuille ! Tu as perdu !"
    }
}

