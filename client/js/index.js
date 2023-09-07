const FORM = document.querySelector("#registroForm");
const EMAIL_INPUT = document.querySelector("#email");


FORM.addEventListener("submit", function(event){
    event.preventDefault();
    localStorage.setItem("email", EMAIL_INPUT.value);
    window.location = "/registro";
});