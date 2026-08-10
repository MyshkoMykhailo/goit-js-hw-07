const input = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
input.addEventListener("input", enterName);

function enterName(event) {
  const markup = event.currentTarget.value.trim();
  if (markup) {
    nameOutput.textContent = markup;
  } else {
    nameOutput.textContent = "Anonymous";
  }
}
