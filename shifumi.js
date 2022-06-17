const buttons = document.querySelectorAll("button");// recupere tout les bouttons
const username = "you"; // je declare mon username
let pst_player = 0;
let pst_app = 0

for (let i = 0; i < buttons.length; i++){  /// bouble sur la longeur de buttons
    buttons[i].addEventListener("click", function() { // listenner au click
        var player = buttons[i].innerHTML; //recupere la valeur html du button ou le joueur a appuyer
        var robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
        // fonction qui parmis tout les boutton en choisi un random
        var result; // declaration de la variable result

        //si le robot et le joueur on la même valeur
        if (player === robot) {
            result = "EQUALITY !";
            document.getElementById("result").style.color = "blue"
        }
        //sinon si le joueur a une solution gagnante
        else if ((player === "Rock" && robot === "Scissors") || (player === "Paper" && robot === "Rock") || (player  === "Scissors" && robot === "Paper")) {
            result = "YOU WIN !!";
            document.getElementById("result").style.color = "green";
            pst_player++;

        }
        //sinon dans les autre cas l'application gagne
        else {
            result = "YOU LOOSE !";
            document.getElementById("result").style.color = "red"
            pst_app++;

        }
        //je selectionne ma div result pour lui inserer le resultat
        document.querySelector(".result").innerHTML = `
            <p class="m-2">${username} : ${player}</br></p>
            <p>The application has chosen : ${robot}</br></p>
            <p   class="text-center result-text"><strong>${result}</strong></p>
            <p><strong>Score</strong> : ${username} ${pst_player} - App ${pst_app}</p>
          `;
    })
}