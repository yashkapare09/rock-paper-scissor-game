let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
  
    const options = ["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random() * options.length);
    return options[ranIdx];
};


const drawGame = () => {
    msg.innerText = "Game Draw 😐";
    msg.style.backgroundColor = "#333";
};


const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win 😍 ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose ☹️ ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin;

        if (userChoice === "rock") {
       
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
        
            userWin = compChoice === "scissor" ? false : true;
        } else if (userChoice === "scissor") {
            
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;   
        playGame(userChoice);
    });
});
