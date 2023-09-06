document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registroForm");
    const emailInput = document.getElementById("email");

    registroForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitamos que se envie el formulario

        // Obtenemos el valor del correo electronico
        const email = emailInput.value;

        localStorage.removeItem("email");
        // Almacena el correo electronico en localStorage
        localStorage.setItem("email", email);

        // Redirige a la pagina de registro
        window.location.href = "registro.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const emailSpan = document.getElementById("emailSpan");

    // Recupera el correo electronico almacenado en localStorage
    const email = localStorage.getItem("email");

    // Muestra el correo electronico en la pagina de registro
    if (email) {
        emailSpan.textContent = email;
    }
});




