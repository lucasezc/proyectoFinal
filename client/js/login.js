const registroForm = document.getElementById("registroForm");
const inputEmail = document.getElementById("email");
const inputPw = document.getElementById("password");
const errorElement = document.getElementById("error-message");

registroForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const email = inputEmail.value;
    const password = inputPw.value;
    const data = { email, password };

    try {
        const response = await fetch("./api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            // Si las credenciales son correctas, puedes redirigir al usuario a una página HTML
            // Por ejemplo, si tienes una página de inicio llamada "home.html":
            window.location.href = "/pelisFree.html";
        } else {
            // Si las credenciales son incorrectas, muestra un mensaje de error
            errorElement.textContent = "Email o contraseña incorrectos.";
        }
    } catch (error) {
        console.error("Error de red:", error);
        errorElement.textContent = "Error de red. Por favor, verifica tu conexión e inténtalo de nuevo.";
    }
});
