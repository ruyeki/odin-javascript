document.addEventListener("DOMContentLoaded", () => {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice(){
        let rock = "rock";
        let scissors = "scissors";
        let paper = "paper";

        const choices = [rock, scissors, paper];

        const randomIndex = Math.floor(Math.random() * choices.length); //gives us random choice from choices

        const randomChoice = choices[randomIndex];

        console.log(randomChoice);

        return randomChoice;
    }


    function humanGame(){

        const rock_btn = document.querySelector("#rock-btn");
        const scissors_btn = document.querySelector("#scissors-btn");
        const paper_btn = document.querySelector("#paper-btn");

        function handleClick(handsign){
            let humanChoice = handsign;
            let computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        }

        rock_btn.addEventListener("click", ()=>{
            handleClick("rock");
        })

        scissors_btn.addEventListener("click", ()=>{
            handleClick("scissors");
        })

        paper_btn.addEventListener("click", ()=>{
            handleClick("paper");
        })

    }

    function updateScore(humanScore, computerScore){
        document.getElementById("computerScore").textContent = `Computer Score: ${computerScore}`;
        document.getElementById("humanScore").textContent = `Human Score: ${humanScore}`;

    }

    function updateWinnerMessage(){
        if(humanScore == 5){
            document.getElementById("winner-message").textContent = "Congratulations, you win!";
            humanScore = 0;
            computerScore = 0;
        }

        if(computerScore == 5){
            document.getElementById("winner-message").textContent = "Try again, you lose.";
            humanScore = 0;
            computerScore = 0;
        }
    }


    function playRound(computer, human){
        if(computer == human){
            console.log("No one wins.");
        }

        if((computer == "paper" && human == "rock" || computer == "rock" && human == "scissors" || computer == "scissors" && human == "paper")) {
            computerScore++;
            updateScore(humanScore, computerScore);
            updateWinnerMessage();

        }else if((computer == "rock" && human == "paper" || computer == "scissors" && human == "rock" || computer == "paper" && human == "scissors")){
            humanScore++;
            updateScore(humanScore, computerScore);
            updateWinnerMessage();
        }
    }

    let humanChoice = humanGame();
    let computerChoice = getComputerChoice();

    playRound(computerChoice, humanChoice);
});
