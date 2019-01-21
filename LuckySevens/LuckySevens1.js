var rollCount;
var bettedMoney = [];

function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["luckySevens"].elements.length; 
        loopCounter++) {
        if (document.forms["luckySevens"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["luckySevens"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 

function resetForm() {
    clearErrors();
    document.forms["luckySevens"]["bet"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Play";
    document.forms["luckySevens"]["bet"].focus();
}

function validateItems() {
    clearErrors();
    var num1 = document.forms["luckySevens"]["bet"].value;
    if (num1 == "" || isNaN(num1) || num1 <= 0) {
        alert("You have to have money to play Lucky Sevens!");
        document.forms["luckySevens"]["bet"].parentElement.className = "form-group has-error";
        document.forms["luckySevens"]["bet"].focus();
        return false;
    } else {
        var num2 = rollDice();
        bettedMoney = [num2];
    }
}

function rollDice() {
    rollCount+1;  
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

function displayResult() {
document.getElementById("submitButton").innerText = "Play Again?";
document.getElementById("results").style.display = "block";
document.getElementById("startingBet").innerText = startingBet;
document.getElementById("broke").innerText = ranOut;
document.getElementById("maxCash").innerText = findMax(bettedMoney);
document.getElementById("maxCashRollCount").innerText = findMax(bettedMoney);
}