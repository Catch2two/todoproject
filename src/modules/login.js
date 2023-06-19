const email = document.getElementById("email");

email.addEventListener("input", (e) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Enter a valid email address.");
    } else {
        email.setCustomValidity("");
    }
});