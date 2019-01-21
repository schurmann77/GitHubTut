var canContinue;
var broke;
var rolls;

function play() {
    money = Number(prompt("How much money do you want to start with?"));
    betMoney = money
    if (betMoney <= 0 || isNaN(betMoney)) {
        alert("You must enter a valid, positive amount to play.")       
        return play();
    } else {
        betMoney = canPlay();
    }   if (betMoney > 0) {
        playAgain();
    } else{
        return betMoney;
    }
}

function canPlay() {
    betMoney;
    if (betMoney <= 0)
{
    document.write("You have run out of money.")
    displayResults();
    return false;
} else {
    var roll = rollDice();
}
if(roll == 7){
    return Number(betMoney + 4);
} else {
    return Number(betMoney - 1);
} 
}

function rollDice() {
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);

    return die1 + die2;
    }

function displayResults() {
    document.getElementById("results").innerText = broke;
}


function playAgain() {
    
   do {
       betMoney;
       canContinue;

   if (betMoney <= 0 || isNaN(betMoney || canContinue == false)) {
       alert("You do not have any money. Game over!")       
       return broke = rolls;
   } else if (betMoney > 0){
    var again = prompt("Would you like to play again?")
    canContinue = again;
    if (canContinue == "yes" || "YES" || "Yes" || "YEs" || "YeS" || "yES" || "yeS") {
        betMoney = canPlay();

    } else {
        betMoney = 0;
        alert("You have run out of money!")
        return broke = rolls;      
    } 
}
} while (betMoney > 0)
}