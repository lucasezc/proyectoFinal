const registroForm = document.getElementById("registroForm");
const inputPw = document.getElementById("inputPw");
const errorElement = document.getElementById("error");
const emailSpan = document.getElementById("emailSpan");

// Recupera el correo electronico almacenado en localStorage
const email = localStorage.getItem("email");

// Muestra el correo electronico en la pagina de registro
emailSpan.textContent = email;

registroForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitamos que se envie el formulario
    // Redirige a la pagina de registro
    const createdPw = inputPw.value;
    if (createdPw.length < 5) {
        errorElement.textContent = "La contraseña debe tener al menos 5 caracteres.";
    } else {
        console.log(createdPw);
        const data = { email, password: createdPw };
        fetch("/api/registro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }
});