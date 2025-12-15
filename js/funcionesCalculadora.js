var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");

function calcular() {
    var num1 = parseInt(n1.value);
    var num2 = parseInt(n2.value);
    var resultado = 0;
    var operacion = document.getElementById("operaciones").value;
    switch (operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        case "!":
            resultado = 1;
            for (var i = 1; i <= num1; i++) {
                resultado = resultado * i;
            }
    }

    document.getElementById("resultado").innerText = resultado;

}

function separarPalabras(frase) {
    return frase.replace(",","").replace(".","").split(" ");
}