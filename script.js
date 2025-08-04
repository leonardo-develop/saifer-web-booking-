function validateForm() {
    const email = document.forms["signupForm"]["email"].value;
    const password = document.forms["signupForm"]["password"].value;
    const phoneNumber = document.forms["signupForm"]["phone-number"].value;
    const errorMessage = document.getElementById("error-message");

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return false;
    }

    
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{5,}/.test(password)) {
        errorMessage.textContent = "Password must be at least 5 characters long and include uppercase letters, lowercase letters, numbers, and symbols.";
        return  false;
    }

    
    if (!/^07\d{8}$/.test(phoneNumber)) {
        errorMessage.textContent = "Phone number must start with '07' and be 10 digits long.";
        return false;
    }

    return true;
}

