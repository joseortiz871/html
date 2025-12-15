var total = 0;
var numProductos = 0;
var ids = 1;

function addfila() {
    var tabla = document.getElementById("tblfactura").getElementsByTagName('tbody')[0];
    var fila = tabla.insertRow(-1);
    //console.log(tabla);
    var celda1 = fila.insertCell(0);
    var celda2 = fila.insertCell(1);
    var celda3 = fila.insertCell(2);
    var celda4 = fila.insertCell(3);
    var celda5 = fila.insertCell(4);
    var celda6 = fila.insertCell(5);

    var botonEliminar = document.createElement("button");
    botonEliminar.innerHTML = "-";
    botonEliminar.onclick = function () {
        var row = this.parentNode.parentNode;
        row.remove();
        calcularTotal();
        numProductos--;
        var contador = document.getElementById("numProductos");
        contador.innerHTML = "<b>" + numProductos + "</b>";
    }
    celda1.appendChild(botonEliminar);


    var caja1 = addInput("codigo", "text");
    celda2.appendChild(caja1);

    var caja2 = addInput("producto", "text");
    celda3.appendChild(caja2);

    var caja3 = addInput("cantidad", "number");
    caja3.value = 0;
    caja3.onblur = function () {
        var cantidad = document.getElementById(this.id).value;
        var numeroId = this.id.substring(8);
        if (cantidad == "" || isNaN(cantidad)) {
            cantidad = 0;
            document.getElementById(this.id).value = 0;
            document.getElementById("subtotal" + numeroId).value = 0;
        } else {
            var valorUnitario = document.getElementById("Valorunitario" + numeroId).value;
            if (valorUnitario == "" || isNaN(valorUnitario)) {
                valorUnitario = 0;
                document.getElementById("Valorunitario" + numeroId).value = 0;
                document.getElementById("subTotal" + numeroId).value = 0;
            } else {
                var subTotal = parseInt(cantidad) * parseInt(valorUnitario);
                document.getElementById("subtotal" + numeroId).value = subTotal;
            }
        }
        calcularTotal();

    }
    celda4.appendChild(caja3);

    var caja4 = addInput("Valorunitario", "number");
    caja4.value = 0;
    caja4.onblur = function () {
        var valorUnitario = document.getElementById(this.id).value;
        var numeroId = this.id.substring(13);
        if (valorUnitario == "" || isNaN(valorUnitario)) {
            valorUnitario = 0;
            document.getElementById(this.id).value = 0;
            document.getElementById("subtotal" + numeroId).value = 0;
        } else {
            var cantidad = document.getElementById("cantidad" + numeroId).value;
            if (cantidad == "" || isNaN(cantidad)) {
                cantidad = 0;
                document.getElementById("cantidad" + numeroId).value = 0;
                document.getElementById("subtotal" + numeroId).value = 0;
            } else {
                var subTotal = parseInt(cantidad) * parseInt(valorUnitario);
                document.getElementById("subtotal" + numeroId).value = subTotal;


            }
        } calcularTotal();
    }
    celda5.appendChild(caja4);

    var caja5 = addInput("subtotal", "number", true);
    caja5.oncuechange = function () {
        alert("el valor cambio");
    }
    celda6.appendChild(caja5);

    numProductos++;
    ids++;

    var contador = document.getElementById("numProductos");
    contador.innerHTML = "<b>" + numProductos + "</b>";

}

function addInput(valorId, typeInput, readOnly = false) {
    var caja = document.createElement("input");
    caja.id = valorId + ids;
    caja.type = typeInput;
    if (readOnly == true) {
        caja.readOnly = true;
    }
    return caja;

}

function calcularTotal() {
    var tabla = document.getElementById("tblfactura").getElementsByTagName('tbody')[0];
    var filas = tabla.getElementsByTagName('tr');
    total = 0;
    for (var i = 0; i < filas.length; i++) {
        var caja = filas[i].getElementsByTagName("input")[4].value;
        if (caja == "" || isNaN(caja)) {
            caja = 0;
        }   
        total = total + parseInt(caja);
    }
    document.getElementById("totalfactura").innerHTML =  total;
}