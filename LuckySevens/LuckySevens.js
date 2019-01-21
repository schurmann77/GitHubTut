var rollCount;
var bettedMoney = [];

function clearErrors() {
    for (var i = 0; i < document.forms["betMoney"].elements.length; i++) {
        if (document.forms["betMoney"].elements[i]
            .parentElement.className.indexOf("has-") != -1) {

            document.forms["betMoney"].elements[i]
            .parentElement.className = "form-group";
        }
    }
}

function reset() {
    clearErrors();
    document.forms["betMoney"]["bet"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Play";
    document.forms["betMoney"]["bet"].focus();
}

function loseMoney() {
    clearErrors();
    var num1 = document.forms["betMoney"]["bet"].value;
    if (num1 == "" || isNaN(num1) || num1 <= 0) {
        alert("You have to have money to play Lucky Sevens!");
        document.forms["betMoney"]["bet"].parentElement.className = "form-group has-error";
        document.forms["betMoney"]["bet"].focus();
        return false;
    } else num2 = rollDice();
        rollCount+=1;

    function rollDice() {
          
        var die1 = Math.ceil(Math.random() * 6);
        var die2 = Math.ceil(Math.random() * 6);
        var roll = die1 + die2;
        if(roll == 7){
            return Number(num1 + 4);
        } else {
            return Number(num1 - 1);
        } 
    }

    function findMax(myArray) {
        bettedMoney;
    
        for(i = 0;i < myArray.length;i++) {
             var currentNumber = myArray[i];
             if (currentNumber > maxNumber) {
                  maxNumber = currentNumber;
             } else {
                  maxNumber = maxNumber;
             }
        } return maxNumber;
    }

    var startingBet = "$" + num1 + ".00";
    var ranOut;
    var maxCash = findMax(bettedMoney);
    var amountOfRolls;
    var money;

    var maxNumber = startingBet;

     

    document.getElementById("submitButton").innerText = "Play Again?";
    document.getElementById("results").style.display = "block";
    document.getElementById("startingBet").innerText = startingBet;
    document.getElementById("ranOut").innerText = rollCount;
    document.getElementById("maxCash").innerText = maxCash;
    document.getElementById("amountOfRolls").innerText = rollCount;

    return false;
}