document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registroForm");
    const inputPw = document.getElementById("inputPw");
    const errorElement = document.getElementById("error");
    const emailSpan = document.getElementById("emailSpan");
    const inputEmail = document.get
1
    // Recupera el correo electronico almacenado en localStorage
    const email = localStorage.getItem("email");

    // Muestra el correo electronico en la pagina de registro
    if (email) {
        emailSpan.textContent = email;
    }

    registroForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitamos que se envie el formulario

        // Obtenemos el valor del correo electronico

        // Redirige a la pagina de registro
        const createdPw = inputPw.value;

        
        if (createdPw.length < 5) {
            errorElement.textContent = "La contraseña debe tener al menos 5 caracteres.";
            event.preventDefault();
        } else {
            event.preventDefault();
            console.log(createdPw);
            
        }
    });
});
