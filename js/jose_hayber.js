

function validar() {

    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();

    if (username.length >= 6 && password.length > 4) {
        if (isgmail(username)) {
            alert("Login exitoso");
            document.forms[0].submit();
        } else {
            alert("El nombre de usuario debe ser un correo de Gmail");
        }

    } else {
        if (username.length < 6) {
            alert("El nombre de usuario debe tener al menos 6 caracteres");
        }

        else if (password.length < 4) {
            alert("La contraseña debe tener más de 4 caracteres");
        }
    }

}

function isgmail(email) {
    var pos = email.indexOf("@gmail.com");
    return pos != -1 && email.length >= 16;
}


