const email = document.getElementById("email");
const password = document.getElementById("password")

email.addEventListener("input", (e) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Enter a valid email address.");
    } else {
        email.setCustomValidity("");
    }
});

password.addEventListener("input", (e) => {
    if (password.validity.typeMismatch) {
        password.setCustomValidity("Enter a valid password.");
    } else {
        password.setCustomValidity("");
    }
});