const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const password = document.getElementById("password")
const passwordError = document.querySelector("#password + span.error");

function showError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "Enter an email";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Please enter a valid Email"
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    } else if (password.validity.tooShort) {
        passwordError.textContent = "Password should be at least 8 characters";
      }
}

email.addEventListener("input", (e) => {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error"
    } else {
        showError()
    }
});

password.addEventListener("input", (e) => {
    if (password.validity.valid) {
        passwordError.textContent = "";
        passwordError.className = "error"
    } else {
        showError()
    }
});