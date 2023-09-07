document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registroForm");
    const inputPw = document.getElementById("inputPw");
    const errorElement = document.getElementById("error");
    const emailSpan = document.getElementById("emailSpan");
    const inputEmail = document.getElementById("email");
1
    // Recupera el correo electronico almacenado en localStorage
    const email = localStorage.getItem("email");

    // Muestra el correo electronico en la pagina de registro
        emailSpan.textContent = inputEmail.value;


    registroForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitamos que se envie el formulario

        // Redirige a la pagina de registro
        const createdPw = inputPw.value;

        const email = emailInput.value;
        
        if (createdPw.length < 5) {
            errorElement.textContent = "La contraseña debe tener al menos 5 caracteres.";
            event.preventDefault();
        } else {
            event.preventDefault();
            console.log(createdPw);
            
        }
    });
});
