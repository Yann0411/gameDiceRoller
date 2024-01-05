
var playerElm = document.getElementById('player')
var dealerElm = document.getElementById('dealer')


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
    diceElm.addEventListener('click',makeDiceBeautiful)

    return diceElm;
}

function makeDiceBeautiful(event){

    var diceElm= event.target
    console.log(event)
    diceElm.style.border ='2px solid #F0F'
}

function createAndAddDiceToDOM(gameZone) {
    var diceElm = createDice()
    gameZone.append(diceElm)
}


function reset() {
    playerElm.textContent = '';
    dealerElm.textContent = '';
}


function play(event) {



    console.log(event)
    console.log(event.target)

    var nbDices=6

    reset()


    for (let nbDice = 0; nbDice < nbDices; nbDice++) {

        createAndAddDiceToDOM(playerElm)
        createAndAddDiceToDOM(dealerElm)


    }
}


var playBtnElm = document.querySelector('#play')
playBtnElm.addEventListener('click',play)






