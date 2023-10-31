function submitForm() {
    // Get form values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var gender = Array.from(document.querySelectorAll("input[name='gender']:checked")).map(input => input.value);
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    // Display values in the popup
    document.getElementById("popupFirstName").textContent = firstName;
    document.getElementById("popupLastName").textContent = lastName;
    document.getElementById("popupDob").textContent = dob;
    document.getElementById("popupCountry").textContent = country;
    document.getElementById("popupGender").textContent = gender.join(", ");
    document.getElementById("popupProfession").textContent = profession;
    document.getElementById("popupEmail").textContent = email;
    document.getElementById("popupMobile").textContent = mobile;

    // Show the popup
    document.getElementById("popup").style.display = "block";

    resetForm();
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}

function closePopup() {
    // Close the popup and reset the form
    document.getElementById("popup").style.display = "none";
    resetForm();
}
