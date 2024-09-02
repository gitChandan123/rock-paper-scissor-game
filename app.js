
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const rIdx = Math.floor(Math.random() * 3);
    return options[rIdx];
}

const playGame = (userChoice) => {
    console.log("user choice was ", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice was ", compChoice);
    return compChoice;
    
    
}
const userScoreB = document.querySelector("#user-score");
const compScoreB = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");
const showWinner = (winner,userChoice,compChoice) => {
    if (winner === true) {
        userScore++;
        console.log("You win!");
        userScoreB.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
        
    } else {
        compScore++;
        console.log("You lose!");
        compScoreB.innerText = compScore;
        msg.innerText = ` You lose! ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const drawGame = () => {
    console.log("Game was draw!");
    msg.innerText = "Game was Draw! Play again.";
    msg.style.backgroundColor= "#081b31";
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        const compChoice = genCompChoice();
        if (userChoice === compChoice) {
            drawGame();
        } else {
                let userWin = true;
                if (userChoice === "rock") {
                    userWin = compChoice === "paper" ? false : true;
                } else if (userChoice === "paper") {
                    userWin = compChoice === "scissors" ? false : true;
                } else {
                    userWin = compChoice === "rock" ? false : true;
                }
            showWinner(userWin,userChoice,compChoice);
        }
        
    });
});