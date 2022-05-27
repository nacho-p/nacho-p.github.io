let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let nombre = id("nombre"), apellido = id("apellido"), email = id("email"), mensaje = id("mensaje"), form = id("form"), errorMsg = classes("error");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let nombreValido = check(nombre, 0, "El nombre no puede estar vacio."),
        apellidoValido = check(apellido, 1, "El apellido no puede estar vacio."),
        emailValido = check(email, 2, "El email no puede estar vacio."),
        mensajeValido = check(mensaje, 3, "El mensaje no puede estar vacio.");

    let formValido = nombreValido && apellidoValido && emailValido && mensajeValido;

    if (formValido) {
        window.location.href = 'gracias.html';
    }
});

let check = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
        valido = false;
    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        valido = true;
    } return valido;
};