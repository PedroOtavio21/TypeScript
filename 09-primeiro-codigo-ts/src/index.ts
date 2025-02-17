function sendSpaceship(name: string, captain: string){
    const spaceShip = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    }

    alert(`A nave ${spaceShip.name} comandada pelo capitão ${spaceShip.captain} foi enviada em uma missão.`)

    return spaceShip
}

function accelerate(targetSpeed: number, spaceShip: { name: string, speed: number}){
    if (spaceShip.speed > targetSpeed) {
        alert(`Reduzindo a velocidade da ${spaceShip.name} para ${targetSpeed}...`)
    } else if (spaceShip.speed < targetSpeed){
        alert(`Aumentando a velocidade da ${spaceShip.name} para ${targetSpeed}...`)
    } else {
        alert(`Mantendo a velocidade da ${spaceShip.name}`)
    }
}

const nameShip = prompt('Qual seria o nome de sua nave?')
const spaceshipCaptain = prompt("Insira o nome do capitão da nave:")

const currentShip = sendSpaceship(nameShip, spaceshipCaptain)

const speed = Number(prompt("Insira a velocidade para qual deseja acelerar:"))

accelerate(speed, currentShip)