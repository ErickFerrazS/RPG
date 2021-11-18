//function test(quantity) {
//    for(var q=0; q<quantity; q++){
//        console.log(randomNumber(4))
//    }
//}

function rollDice(max, idTitle) {
    document.getElementById(idTitle).textContent = randomNumber(max)
}

function randomNumber(max) {
    var number = 0
    while (number <= 0 || number > max) {
        number = Math.round(Math.random() * (max + 1))
    }
    return number
}