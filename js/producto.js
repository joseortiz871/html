function cargarProductos() {
    var carga = new XMLHttpRequest();
    carga.open("GET", "productos.txt", true);
    carga.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("productos").innerHTML = "<option>seleccione una producto </option>" + getOpciones(this.responseText);
        }
    }
    carga.send();
}

function getOpciones(cadena) {
    var opciones = "";
    var productos = cadena.split("\n");
    for (let i = 0; i < productos.length; i++) {
        let producto = productos[i].split(":");
        opciones += "<option value='" + producto[1] + "'>" + producto[0] + "</option>";
    }
    return opciones;
}

function calcularPago() {
    var productoSeleccionado = document.getElementById("productos").value;
    var cantidad = document.getElementById("cantidad").value;
    var pagoTotal = productoSeleccionado * cantidad;
    if (cantidad <0) {
        alert("La cantidad no puede ser negativa");
        document.getElementById("resultado").innerText = "$0";
        return
    }
    document.getElementById("resultado").innerText = "$" + pagoTotal.toFixed(2);
}



