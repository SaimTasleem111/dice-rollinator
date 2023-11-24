function rollDice() {
    var diceValue = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice').textContent = diceValue;
}
