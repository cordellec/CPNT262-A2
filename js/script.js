// Variables
const form = document.getElementById("form");
const output = document.getElementById("output");
const input = document.getElementById("word");

// Functions
function capitalize(event) {
  event.preventDefault();
  let string = input.value;
  output.innerHTML = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Run the code
form.addEventListener("submit", capitalize);

