function saveState() {
  // Get a reference to the localStorage object.
  const localStorage = window.localStorage;

  // Iterate over all the form fields.
  for (const field of document.querySelectorAll("input")) {
    // Get the value of the field.
    const value = field.value;

    // Store the value in the localStorage object.
    localStorage.setItem(field.id, value);
  }
}

function loadState() {
  // Get a reference to the localStorage object.
  const localStorage = window.localStorage;

  // Iterate over all the keys in the localStorage object.
  for (const key of Object.keys(localStorage)) {
    // Get the value associated with the key.
    const value = localStorage.getItem(key);

    // Set the value of the form field with the same id.
    const field = document.getElementById(key);
    if (field) {
      field.value = value;
    }
  }
}