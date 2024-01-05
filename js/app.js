function getRandomNumber(min = 1, max = 6) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function numberToDicePosition(number) {
    return (number - 1) * 100 * -1
}


function createDice() {

    var diceElm = document.createElement('div')

    diceElm.classList.add('dice')
    var diceNumber = getRandomNumber()
    var backgroundPositionXDice = numberToDicePosition(diceNumber)

    diceElm.style.backgroundPositionX = `${backgroundPositionXDice}px`

    return diceElm;
}



var nbDices = Number(prompt('Nombre de dés'))
var playerElm = document.getElementById('player')
var dealerElm = document.getElementById('dealer')

for (let nbDice = 0; nbDice < nbDices; nbDice++) {

    var dicePlayerElm = createDice()
    playerElm.append(dicePlayerElm)
    var diceDealerElm = createDice()
    dealerElm.append(diceDealerElm)

}







