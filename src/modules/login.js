const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const password = document.getElementById("password")
const passError = document.querySelector("#password + span.error");
const form = document.querySelector("login");

email.addEventListener("input", (e) => {
    if (email.validity.valid && password.validity.valid) {
        emailError.textContent = "";
        emailError.className = "hidden";
        passError.textContent = "";
        passError.className = "hidden";
      } else {
        showError()
    }
});


function showError() {
    if (password.validity.valueMissing) {
        passError.textContent = "Enter a password";
    } else if (password.validity.typeMismatch) {
        passError.textContent = "Please enter a valid password"
    } else if (password.validity.tooShort) {
        passError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
    }
}