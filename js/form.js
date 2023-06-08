window.onload = () => {
  alert(
    "Welcome to Super Duper Ultra Mega Gaming Corporation/Ltd. - Newsletter Signup"
  );
};

/**
 * This form validates the supplied inputs from form.html
 * Will call event.preventDefault() to cancel the HTTP request if the inputs are invalid
 * As per the assessment requirements, only firstname and lastname are validated
 *
 * @param {Event} event The HTML form submission event.
 */
function validateForm(event) {
  const firstName = document.getElementById("firstname");
  const lastName = document.getElementById("lastname");

  let errorMessage = "The following errors occured:\n\n";
  const initialErrorMessageLength = errorMessage.length;

  if (firstName.value === "") {
    firstName.classList.add("form-page__error");
    errorMessage += "* Firstname is required\n";
  }

  if (lastName.value === "") {
    lastName.classList.add("form-page__error");
    errorMessage += "* Lastname is required\n";
  }

  if (errorMessage.length !== initialErrorMessageLength) {
    errorMessage += "\nThe missing fields have been highlighed in red.";
    alert(errorMessage);
    event.preventDefault();
  }
}

/**
 * This functions removes all values that have been filled in on form.html
 */
function resetForm() {
  const firstName = document.getElementById("firstname");
  const lastName = document.getElementById("lastname");
  const email = document.getElementById("email");
  const ageGroups = document.getElementsByName("age-group");
  const preferences = document.getElementsByName("preferences");

  firstName.value = "";
  lastName.value = "";
  email.value = "";

  firstName.classList.remove("form-page__error");
  lastName.classList.remove("form-page__error");

  ageGroups.forEach((radioBtn) => (radioBtn.checked = false));
  preferences.forEach((pref) => (pref.checked = false));
}
