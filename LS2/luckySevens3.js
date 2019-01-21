var money;
var rollCount = 0;
function check() {
     money = money;
    if(money = isNaN(money) || money <= 0) {
        var money = Number(prompt("How much money will you bet?"));
    } if(money >= 1){
       
        play();
    } else {
        return false;
    }
}

function play() {
    if(money >= 1) {
        money = rollDice();
    } else {
        alert("You are out of money!");
    }
}   document.getElementById("currentAmount").innerHTML = "$" + money + ".00";

function rollDice() {
    rollCount + 1;  
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    var roll = die1 + die2;
    if(roll == 7){
        return Number(money + 4);
    } else {
        return Number(money - 1);
        } 
    }