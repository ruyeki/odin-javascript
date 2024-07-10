console.log("Hello World");

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
    let handsign = prompt('Choose your handsign');

    console.log(handsign);

    return handsign;
}



function playRound(computer, human){
    if(computer == human){
        console.log("No one wins.");
    }

    if((computer == "paper" && human == "rock" || computer == "rock" && human == "scissors" || computer == "scissors" && human == "paper")) {
        console.log("You lose! Paper beats rock.");
        computerScore++;
        console.log("Computer Score: ", computerScore);
    }else{
        console.log("You win!");
        humanScore++;
        console.log("Human Score: ", humanScore);
    }
}

function playFiveRound(){
    //you lose scenarios
    for(i = 1; i<6; i++){
        console.log("Round ", i);
        let humanChoice = humanGame();
        let computerChoice = getComputerChoice();
        playRound(computerChoice, humanChoice);
    }

    console.log("Game Over!");
    if(humanScore > computerScore){
        console.log("Congrats, you win!");
    }else{
        console.log("Refresh to try again.");
    }
}

//let humanChoice = humanGame();
//let computerChoice = getComputerChoice();

//playRound(computerChoice, humanChoice);

playFiveRound();
