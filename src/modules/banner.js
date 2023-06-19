function banner() {
    const header = document.querySelector('#header')
// Button

    const dropDownButton = document.getElementById('dropDownButton');
    const dropDownMenu = document.getElementById('dropDownMenu');
    dropDownButton.addEventListener("click", () => {
        dropDownMenu.style.display = "block";
      });
// Add options to the dropdown menu.
  for (let i = 0; i < 5; i++) {
    const option = document.createElement('option');
    option.value = 'color' + i;
    option.text = 'Option ' + (i + 1);
    dropDownMenu.appendChild(option);

// Randomize the background color of the option.
    var randomColor = Math.floor(Math.random() * 256);
    option.style.backgroundColor = "#" + randomColor.toString(16);
  }

// Close the dropdown menu when the user clicks on it or on an option in the dropdown menu.
    dropDownMenu.addEventListener("click", (e) => {
    if (e.target === dropDownMenu || e.target.tagName === "OPTION") {
        dropDownMenu.style.display = "none";
    }
        });
    
}

banner();