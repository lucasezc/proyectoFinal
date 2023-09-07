const registroForm = document.getElementById("form-login");
const inputEmail = document.getElementById("email");
const inputPw = document.getElementById("password");

registroForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = inputEmail.value;
    const password = inputPw.value;
    const data = { email, password };
    fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
});