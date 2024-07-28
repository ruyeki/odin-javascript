class GameBoard {
    constructor(size, xTurn, yTurn) {
        this.size = size;
        this.xTurn = xTurn;
        this.yTurn = yTurn;
    }

    handleReset(newDiv, resetBtn, textBanner) {
        resetBtn.addEventListener("click", () => {
            newDiv.textContent = "";
            textBanner.textContent = "";
        });
    }

    winConditions(board, textBanner) {
            const winningCombinations = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
                [0, 4, 8], [2, 4, 6]             // Diagonals
            ];

            console.log("This is working");

            for(let combination of winningCombinations){
                const[a, b, c] = combination;

                if(board[a].textContent && board[a].textContent === board[b].textContent && board[a].textContent === board[c].textContent){
                    if(board[a].textContent==="X"){
                        textBanner.textContent = "You Lose";
                        console.log("You Lose");
                        return;
                    }else if(board[a].textContent === "O"){
                        textBanner.textContent = "You Win";
                        console.log("You Win");
                        return;
                    }
                }
            }

    }

    handleClick(newDiv, board, textBanner) {
        newDiv.addEventListener("click", () => {
            if (newDiv.textContent === "") {
                if (this.xTurn === true) {
                    newDiv.textContent = "X";
                    this.xTurn = false;
                    this.yTurn = true;
                } else {
                    newDiv.textContent = "O";
                    this.xTurn = true;
                    this.yTurn = false;
                }
            }
            this.winConditions(board, textBanner);

        });
    }

    // CREATE BOARD
    initBoard() {
        const container = document.getElementById("container");
        const resetBtn = document.getElementById("reset");
        const textBanner = document.getElementById("text-banner");
        let board = [];

        for (let i = 0; i < this.size; i++) {
            const newDiv = document.createElement("div");
            newDiv.className = "newDiv";
            board[i] = newDiv;
            console.log(board[i]);
            container.appendChild(newDiv);
            this.handleClick(newDiv, board, textBanner);
            this.handleReset(newDiv, resetBtn, textBanner);
        }

        //console.log("This works");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const game = new GameBoard(9, true, false);
    game.initBoard();
});
