function play(playerChoice) {
    const options = ['piedra', 'papel', 'tijera'];
    const computerChoice = options[Math.floor(Math.random() * 3)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = `Empate. Ambos eligieron ${playerChoice}.`;
    } else if (
        (playerChoice === 'piedra' && computerChoice === 'tijera') ||
        (playerChoice === 'papel' && computerChoice === 'piedra') ||
        (playerChoice === 'tijera' && computerChoice === 'papel')
    ) {
        result = `¡Ganaste!  ${playerChoice} vence a ${computerChoice}.`;
    } else {
        result = `Perdiste.  ${computerChoice} vence a ${playerChoice}.`;
    }

    document.getElementById('result').innerText = result;
}
