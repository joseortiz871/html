// 1. Generar número mágico (1-100)
const numeroMagico = Math.floor(Math.random() * 50) + 1;
let intentos = 0;
let adivinado = false;

// 2. Bucle de juego
while (!adivinado) {
    let intento = parseInt(prompt("Adivina el número (1-50):"));
    intentos++;

    if (intento === numeroMagico) {
        alert(`¡Felicidades! Adivinaste en ${intentos} intentos.`);
        adivinado = true;
    } else if (intento < numeroMagico) {
        alert("Demasiado bajo. Intenta de nuevo.");
    } else {
        alert("Demasiado alto. Intenta de nuevo.");
    }
}
