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

let chickenCost = document.querySelector('.chickencost')
let parsedChickenCost = parseFloat(chickenCost.innerHTML)
let chickenLvl = document.querySelector('.chicken-lvl')
let chickenAmount = document.querySelector('.chicken-amount')
let parsedChickenAmount = parseFloat(chickenAmount.innerHTML)

let cheeseCost = document.querySelector('.cheesecost')
let parsedCheeseCost = parseFloat(cheeseCost.innerHTML)
let cheeseLvl = document.querySelector('.cheese-lvl')
let cheeseAmount = document.querySelector('.cheese-amount')
let parsedCheeseAmount = parseFloat(cheeseAmount.innerHTML)

let cppcStat = document.getElementById("cppc-text")
let cppiStat = document.getElementById("cppi-text")
let intervalStat = document.getElementById("interval-text")

let cocoSize = document.getElementById("cocosize")

const cocoSong = new Audio('./assets/deedeesong.wav')
cocoSong.loop = true
cocoSong.play()

window.onload = setInterval(sizeLoop, 1000 / 10)

let click = 1
let cps = 0
let cpsSpeed = 1000

function sizeLoop() {
    cocoSize.style.width = size(cocosParsed) + '%'
}

function size(x) {
    if (x <= 0) {
        return 17
    } else {
        let s = (2.5189 * (Math.log(1.487352 * x))) + 17
        return s
    }
}

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
        cppiStat.innerHTML = Math.round(cps * 100) / 100

        parsedKibbleAmount = parsedKibbleAmount * 1.05
        kibbleAmount.innerHTML = Math.round(parsedKibbleAmount * 100) / 100

        parsedKibbleCost *= 1.2
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
        cppcStat.innerHTML = Math.round(click * 100) / 100

        parsedWetCost *= 1.2
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

        cpsSpeed *= 0.98
        clearInterval(interval)
        interval = setInterval(() => {
            cocosParsed += cps
            cocos.innerHTML = Math.round(cocosParsed * 100) / 100
        }, cpsSpeed)
        intervalStat.innerHTML = Math.round(cpsSpeed * 100) / 100

        parsedBluebCost *= 1.2
        bluebCost.innerHTML = Math.round(parsedBluebCost)
    }
}

function chickenBuy() {
    if (cocosParsed >= parsedChickenCost) {
        cocosParsed -= parsedChickenCost
        cocos.innerHTML = Math.round(cocosParsed * 100) / 100

        chickenLvl.innerHTML ++

        cps += parsedChickenAmount
        cppiStat.innerHTML = Math.round(cps * 100) / 100

        parsedChickenAmount = parsedChickenAmount * 1.05
        chickenAmount.innerHTML = Math.round(parsedChickenAmount * 100) / 100

        parsedChickenCost *= 1.2
        chickenCost.innerHTML = Math.round(parsedChickenCost)
    }
}

function cheeseBuy() {
    if (cocosParsed >= parsedCheeseCost) {
        cocosParsed -= parsedCheeseCost
        cocos.innerHTML = Math.round(cocosParsed * 100) / 100

        cheeseLvl.innerHTML ++

        cps += parsedCheeseAmount
        cppiStat.innerHTML = Math.round(cps * 100) / 100

        parsedCheeseAmount = parsedCheeseAmount * 1.05
        cheeseAmount.innerHTML = Math.round(parsedCheeseAmount * 100) / 100

        parsedCheeseCost *= 1.2
        cheeseCost.innerHTML = Math.round(parsedCheeseCost)
    }
}

var interval = setInterval(() => {
    cocosParsed += cps
    cocos.innerHTML = Math.round(cocosParsed * 100) / 100
}, cpsSpeed)
