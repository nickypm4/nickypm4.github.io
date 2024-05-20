let cocos = document.querySelector('.cocos')
let cocosParsed = parseFloat(cocos.innerHTML)

let kibbleCost = document.querySelector('.kibblecost')
let parsedKibbleCost = parseFloat(kibbleCost.innerHTML)
let kibbleLvl = document.querySelector('.kibble-lvl')
let kibbleAmount = document.querySelector('.kibble-amount')
let parsedKibbleAmount = parseFloat(kibbleAmount.innerHTML)

let wetCost = document.querySelector('.wetcost')
let parsedWetCost = parseFloat(wetCost.innerHTML)
let wetLvl = document.querySelector('.wet-lvl')
let wetAmount = document.querySelector('.wet-amount')
let parsedWetAmount = parseFloat(wetAmount.innerHTML)

let bluebCost = document.querySelector('.bluebcost')
let parsedBluebCost = parseFloat(bluebCost.innerHTML)
let bluebLvl = document.querySelector('.blueb-lvl')
let bluebAmount = document.querySelector('.blueb-amount')
let parsedBluebAmount = parseFloat(bluebAmount.innerHTML)

let click = 1
let cps = 0
let cpsSpeed = 1000

function cocoUp() {
    cocosParsed += click
    cocos.innerHTML = Math.round(cocosParsed * 100) / 100
}

function kibbleBuy() {
    if (cocosParsed >= parsedKibbleCost) {
        cocosParsed -= parsedKibbleCost
        cocos.innerHTML = Math.round(cocosParsed * 100) / 100

        kibbleLvl.innerHTML ++

        cps += parsedKibbleAmount

        parsedKibbleAmount = parsedKibbleAmount * 1.05
        kibbleAmount.innerHTML = Math.round(parsedKibbleAmount * 100) / 100

        parsedKibbleCost *= 1.15
        kibbleCost.innerHTML = Math.round(parsedKibbleCost)
    }
}

function wetBuy() {
    if (cocosParsed >= parsedWetCost) {
        cocosParsed -= parsedWetCost
        cocos.innerHTML = Math.round(cocosParsed * 100) / 100

        wetLvl.innerHTML ++

        parsedWetAmount = parsedWetAmount * 1.05
        wetAmount.innerHTML = Math.round(parsedWetAmount * 100) / 100

        click ++

        parsedWetCost *= 1.15
        wetCost.innerHTML = Math.round(parsedWetCost)
    }
}

function bluebBuy() {
    if (cocosParsed >= parsedBluebCost) {
        cocosParsed -= parsedBluebCost
        cocos.innerHTML = Math.round(cocosParsed * 100) / 100

        bluebLvl.innerHTML ++

        parsedBluebAmount = parsedBluebAmount * 1.05
        bluebAmount.innerHTML = Math.round(parsedBluebAmount * 100) / 100

        cpsSpeed *= 1.25
        clearInterval(interval)
        var interval = setInterval(() => {
            cocosParsed += cps
            cocos.innerHTML = Math.round(cocosParsed * 100) / 100
        }, cpsSpeed)

        parsedBluebCost *= 1.15
        bluebCost.innerHTML = Math.round(parsedBluebCost)
    }
}

var interval = setInterval(() => {
    cocosParsed += cps
    cocos.innerHTML = Math.round(cocosParsed * 100) / 100
}, cpsSpeed)
