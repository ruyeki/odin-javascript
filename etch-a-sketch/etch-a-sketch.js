//wait for the DOM to be loaded
document.addEventListener("DOMContentLoaded", () => {
    let size = 0;

    const btn = document.getElementById("specific-board");

    btn.addEventListener("click", () => {
        let new_size = prompt("Select a new board size");
        size = parseInt(new_size);
        resetBoard();
        gameBoard(size);
    })

    function resetBoard(size){
        let container = document.getElementById("container");
        container.innerHTML = '';
        size = 0;
    }

    function gameBoard(size){
            //create game board 
            for(let i = 0; i<size; i++){
                let newDiv = document.createElement("div");
                newDiv.id = "gridDiv";
                document.getElementById("container").appendChild(newDiv);
                newDiv.addEventListener("mouseover", function() {
                    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                    newDiv.style.backgroundColor = randomColor; 
                });
            }

    }


    gameBoard();


});