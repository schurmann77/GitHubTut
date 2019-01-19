function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

    for(i = 0; i < 3; i++) {
        console.log(rollDice());
    }
