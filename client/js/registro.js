const registroForm = document.getElementById("registroForm");
const inputPw = document.getElementById("inputPw");
const errorMessage = document.getElementById("error-message");
const emailSpan = document.getElementById("emailSpan");

// Recupera el correo electrónico almacenado en localStorage
const email = localStorage.getItem("email");

// Muestra el correo electrónico en la página de registro
emailSpan.textContent = email;

registroForm.addEventListener("submit", async function (event) {
    event.preventDefault(); // Evita que se envíe el formulario

    const createdPw = inputPw.value;
    
    if (createdPw.length < 5) {
        errorMessage.textContent = "La contraseña debe tener al menos 5 caracteres.";
        return; // Detiene la ejecución si hay un error
    }

    // Si llegamos aquí, la contraseña es válida, así que eliminamos cualquier mensaje de error anterior
    errorMessage.textContent = "";

    try {
        const data = { email, password: createdPw };
        const response = await fetch("/api/registro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            // Si la solicitud fue exitosa, puedes realizar acciones adicionales, como redirigir al usuario a una página de inicio de sesión.
            window.location.href = "/login.html";
        } else {
            // Si la solicitud no fue exitosa, maneja el error
            const responseBody = await response.json();
            errorMessage.textContent = responseBody.message || "Error en el registro. Inténtalo de nuevo más tarde.";
        }
    } catch (error) {
        console.error("Error de red:", error);
        errorMessage.textContent = "Error de red. Por favor, verifica tu conexión e inténtalo de nuevo.";
    }
});
