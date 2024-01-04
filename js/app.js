console.log('toto')




function createDice1() {
    var divElm = document.createElement('div')
    divElm.classList.add('dice')

    var playerId = document.querySelector('#player')
    playerId.appendChild(divElm)
    var random = getRandomIntInclusive(6)



    newPosition = (random - 1) * -100

    divElm.style.backgroundPosition = `${newPosition}px`

}

function createDice2() {
    var divElm = document.createElement('div')
    divElm.classList.add('dice')

    var dealerId = document.querySelector('#dealer')
    dealerId.appendChild(divElm)
    var random = getRandomIntInclusive(6)

    

    newPosition = (random - 1) * -100

    divElm.style.backgroundPosition = `${newPosition}px`

}






function getRandomIntInclusive(max, min = 1) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function askUser(){
    var user = Number(prompt('Combien de dé veux-tu lancer ?'))
    for (let index = 0; index < user; index++) {
        createDice1()* index
        createDice2()*index
        
    }
   
}

askUser()




