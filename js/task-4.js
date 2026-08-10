const form = document.querySelector(".login-form");
const filledForm = {};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    !event.currentTarget.elements.email.value.trim() ||
    !event.currentTarget.elements.password.value.trim()
  ) {
    alert("All form fields must be filled in");
    return;
  } else {
    filledForm.password = event.currentTarget.elements.password.value.trim();
    filledForm.email = event.currentTarget.elements.email.value.trim();
  }
  console.log(filledForm);
  event.currentTarget.reset();
});
