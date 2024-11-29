function sendSpaceship(name, captain) {
    var spaceShip = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceShip.name, " comandada pelo capit\u00E3o ").concat(spaceShip.captain, " foi enviada em uma miss\u00E3o."));
    return spaceShip;
}
function accelerate(targetSpeed, spaceShip) {
    if (spaceShip.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceShip.name, " para ").concat(targetSpeed, "..."));
    }
    else if (spaceShip.speed < targetSpeed) {
        alert("Aumentando a velocidade da ".concat(spaceShip.name, " para ").concat(targetSpeed, "..."));
    }
    else {
        alert("Mantendo a velocidade da ".concat(spaceShip.name));
    }
}
var nameShip = prompt('Qual seria o nome de sua nave?');
var spaceshipCaptain = prompt("Insira o nome do capitão da nave:");
var currentShip = sendSpaceship(nameShip, spaceshipCaptain);
var speed = Number(prompt("Insira a velocidade para qual deseja acelerar:"));
accelerate(speed, currentShip);
