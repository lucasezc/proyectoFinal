document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registroForm");
    const emailInput = document.getElementById("email");

    registroForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que se envíe el formulario

        // Obtén el valor del correo electrónico
        const email = emailInput.value;

        localStorage.removeItem("email");
        // Almacena el correo electrónico en localStorage
        localStorage.setItem("email", email);

        // Redirige a la página de registro
        window.location.href = "registro.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const emailSpan = document.getElementById("emailSpan");

    // Recupera el correo electrónico almacenado en localStorage
    const email = localStorage.getItem("email");

    // Muestra el correo electrónico en la página de registro
    if (email) {
        emailSpan.textContent = email;
    }
});




