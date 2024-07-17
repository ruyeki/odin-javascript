document.addEventListener("DOMContentLoaded", () => {
    let current_num = ""; 
    let stored_num = ""; 
    let result = 0;
    let operator_value = "";

    let numButton = document.querySelectorAll("#numButton");
    let operator = document.querySelectorAll("#operatorButton");

    numButton.forEach(button => {
        button.addEventListener("click", function(){
            current_num += (button.textContent);
            console.log("This is: ", current_num);
            document.getElementById("display").textContent = `${current_num}`;

        });
    });

    operator.forEach(symbol => {
        symbol.addEventListener("click", function(){
            operator_value=String(symbol.textContent);
            console.log(operator_value);
            
            if(operator_value == "clear"){
                result = 0;
                current_num = "";
                stored_num = "";
                console.log(result);
                document.getElementById("display").textContent = `${result}`;
                
            } else{
                stored_num = current_num;
                current_num = "";
                console.log(`Stored: ${stored_num} Operator: ${operator_value}`);
            }

            //console.log("This is: ", operator_value);
            //document.getElementById("display").textContent = `${operator_value}`;
        })
    });

    document.getElementById("solveButton").addEventListener("click", function(){
        operate(current_num, stored_num, operator_value);
        current_num = result;
    });


    function operate(current_num, stored_num, operator_value){
        if(operator_value === "-"){
            result = parseInt(stored_num) - parseInt(current_num);
            console.log(result);
            document.getElementById("display").textContent = `${result}`;
            
        }       

        if(operator_value === "+"){
            result =  parseInt(stored_num) + parseInt(current_num);
            console.log(result);
            document.getElementById("display").textContent = `${result}`;
        }

        if(operator_value === "*"){
            result = parseInt(current_num) * parseInt(stored_num);
            console.log(result);
            document.getElementById("display").textContent = `${result}`;
        }

        if(operator_value === "/"){
            result = parseInt(stored_num) /  parseInt(current_num);
            console.log(result);
            document.getElementById("display").textContent = `${result}`;
        }

    }

});