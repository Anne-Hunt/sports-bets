let bank = 100

const players = [
    {
        name: "D'Marcus Williums",
        teamNumber: 0,
        emoji: '🏃‍♂️',
        skill: 10
    },
    {
        name: "Tyroil Smoochie-Wallace",
        teamNumber: 0,
        emoji: '🤾‍♂️',
        skill: 30
    },
    {
        name: "Jackmerius Tacktheratrix",
        teamNumber: 0,
        emoji: '🏇',
        skill: 88
    },
    {
        name: "Javaris Jamar Javarison-Lamar",
        teamNumber: 0,
        emoji: '🏌️‍♀️',
        skill: 15
    },
    {
        name: "D'Pez Poopsie",
        teamNumber: 0,
        emoji: '🏋️‍♂️',
        skill: 77
    },
    {
        name: "D'Jasper Probincrux III",
        teamNumber: 0,
        emoji: '🏌️‍♂️',
        skill: 21
    },
    {
        name: "Leoz Maxwell Jilliumz",
        teamNumber: 0,
        emoji: '🤾',
        skill: 5
    },
    {
        name: "Hingle McCringleberry",
        teamNumber: 0,
        emoji: '🏂',
        skill: 99
    },
    {
        name: "L'Carpetron Dookmarriot",
        teamNumber: 0,
        emoji: '🧘‍♀️',
        skill: 50
    },
    {
        name: "Xmus Jaxon Flaxon-Waxon",
        teamNumber: 0,
        emoji: '🚶‍♀️',
        skill: 1
    },
    {
        name: "Saggitariutt Jefferspin",
        teamNumber: 0,
        emoji: '🏋️‍♀️',
        skill: 61
    },
    {
        name: "Quatro Quatro",
        teamNumber: 0,
        emoji: '🤺',
        skill: 34
    },
    {
        name: "X-Wing @Aliciousness",
        teamNumber: 0,
        emoji: '🏄',
        skill: 71
    },
    {
        name: "Bisquiteen Trisket",
        teamNumber: 0,
        emoji: '🧜‍♂️',
        skill: 76
    },
    {
        name: "Scoish Velociraptor Maloish",
        teamNumber: 0,
        emoji: '🤸',
        skill: 47
    },
    {
        name: "Donkey Teeth",
        teamNumber: 0,
        emoji: '⛹️‍♀️',
        skill: 23
    },
    {
        name: "T.J. A.J. R.J. Backslashinfourth V",
        teamNumber: 0,
        emoji: '🕴️',
        skill: 58
    },
    {
        name: "Firstname Lastname",
        teamNumber: 0,
        emoji: '💃',
        skill: 99
    },
    {
        name: "Dan Smith",
        teamNumber: 0,
        emoji: '🧍‍♂️',
        skill: 3
    },
    {
        name: "Tiger",
        teamNumber: 0,
        emoji: '🐅',
        skill: 100
    },
]

const hooligans = []
const ruffians = []

let hooligansScore = 0
let ruffiansScore = 0

let kitty = 0

goBroke()
drawGamePlayersBank()

function draftPlayers() {

    for (let i = 0; i < players.length; i++) {
        players[i].teamNumber = Math.floor(Math.random() * 2)
    }
    console.log(players)

    let hooligansDraft = players.filter((player) => player.teamNumber == 0)
    let ruffiansDraft = players.filter((player) => player.teamNumber == 1)

    hooligans.push(...hooligansDraft)
    ruffians.push(...ruffiansDraft)

    console.log(hooligans)
    console.log(ruffians)

    drawGamePlayersBank()
    checkSkill()
}

function checkSkill() {
    let hooligansSum = 0
    let ruffiansSum = 0

    for (let i = 0; i < hooligans.length; i++) {
        hooligansSum += hooligans[i].skill
    }

    for (let i = 0; i < ruffians.length; i++) {
        ruffiansSum += ruffians[i].skill
    }

    hooligansScore = hooligansSum
    ruffiansScore = ruffiansSum

    console.log(hooligansSum)
    console.log(ruffiansSum)

    drawGamePlayersBank()
}
function drawGamePlayersBank() {
    let bankElem = document.getElementById('bank')
    let ruffiansPlayersElem = document.getElementById('ruffiansPlayers')
    let hooligansPlayersElem = document.getElementById('hooligansPlayers')

    let hooligansHTML = ``
    let ruffiansHTML = ``
    hooligans.forEach(hooligan.name => { hooligansHTML = + `${hooligan.picture}` })

    ruffiansPlayersElem.innerHTML = ruffiansHTML
    hooligansPlayersElem.innerHTML = hooligansHTML
    bankElem.innerHTML = `<h2>${bank}</h2>`
}

function betMoney(team, amount) {
    let kitty = 0
    let teamBet = team

    kitty += amount
    bank -= amount

    checkOutcomes(teamBet, kitty)
}

function checkOutcomes(teamBet, kitty) {
    let winner

    if (teamBet == winner) {
        console.log('You won!')
        bank += (kitty * 2)
    } else {
        console.log('You lose!')
        kitty = 0
    }
    goBroke()
}

function goBroke(bank) {
    if (bank <= 0) {
        console.log('You are broke!')
        window.alert('You are broke, time to quit!')
    } else {
        draftPlayers()
    }
}