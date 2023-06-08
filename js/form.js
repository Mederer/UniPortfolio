window.onload = () => {
    alert("Welcome to Super Duper Ultra Mega Gaming Corporation/Ltd. - Newsletter Signup")
}

function validateForm(event) {
    const firstName = document.querySelector("#firstname");
    const lastName = document.querySelector("#lastname");

    let errorMessage = "The following errors occured:\n\n";
    const initialErrorMessageLength = errorMessage.length;

    if (firstName.value === "") {
        firstName.classList.add("form-page__error")
        errorMessage += "* Firstname is required\n";
    }

    if (lastName.value === "") {
        lastName.classList.add("form-page__error")
        errorMessage += "* Lastname is required\n";
    }

    if (errorMessage.length !== initialErrorMessageLength) {
        errorMessage += "\nThe missing fields have been highlighed in red."
        alert(errorMessage);
        event.preventDefault();
    }
}