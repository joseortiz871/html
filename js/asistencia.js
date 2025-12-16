var registroasistencia = [];

function resgistrarasistencia() {
    var ficha = document.getElementById("fichas").value.substring(0, 7).trim();
    var checkboxes = document.getElementsByName("aprendiz[]");
    asistentes = [];
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            asistentes.push(checkboxes[i].value);
        }
        
    }   
registroasistencia[ficha]=(asistentes);
console.log(registroasistencia);
}

function cargaraprendicez() {
    var option = document.getElementById("fichas").value;
    var ficha = option.substring(0, 7).trim();
    var carga = new XMLHttpRequest();
    carga.open("GET", ficha + ".txt", true);
    carga.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("listaaprendicez").innerHTML = getfilasaprendicez(this.responseText);
        } else if (this.readyState == 4 && this.status == 404) {
            alert("No hay aprendicez registrados en esta ficha");
            document.getElementById("listaaprendicez").innerHTML = "";
        }
    }
    carga.send();
}

function getfilasaprendicez(cadena) {
    var filas = "";
    var aprendicez = cadena.split("\n");
    for (let i = 0; i < aprendicez.length; i++) {
        filas += "<tr><td>" + aprendicez[i] + "</td><td><input type='checkbox' name='aprendiz[]' value='" + aprendicez[i] + "'></td></tr>";
    }
    return filas;
}


function cargarfichas() {
    var carga = new XMLHttpRequest();
    carga.open("GET", "fichas.txt", true);
    carga.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("fichas").innerHTML = "<option>seleccione una ficha </option>" + this.responseText;
        }
    }
    carga.send();
}