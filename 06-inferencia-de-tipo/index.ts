// Ao passar o mouse acime do nome do objeto, a IDE identificou o tipos das propriedades do objeto, 
// sem que fosse esplícito no código
 
const spaceship = {
    name: 'X-Wing',
    speed: 0
}

function acellerate(spaceship: { name: string; speed: number }, speed: number){
    spaceship.speed = speed
}

acellerate(spaceship, 50)