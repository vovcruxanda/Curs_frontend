const firstName = document.getElementById('first-name').value;
const lastName = document.getElementById('last-name').value;
const email = document.getElementById('email').value;
const phoneNumber = document.getElementById('phone-number').value;
const country = document.getElementById('country').value;
const address = document.getElementById('address').value;
const subject = document.getElementById('subject').value;
const message = document.getElementById('message').value;

const submitButton = document.querySelector('#submit');

function nameValidation(input) {
    var value = input.value;
    const nameRegex = /^[a-zA-Z]+$/;
    if (value === '') {
        console.log('This field must be filled out');
        input.style.cssText = 'border: 2px solid red';
    }else {
        if(!nameRegex.test(value)){
            console.log('You must use only letters');
            input.style.cssText = 'border: 2px solid red';
        }else{
            console.log('All correct!');
            input.style.cssText = 'border: 2px solid green';
        }
    }
    
    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
        return 'Names should contain only letters.';
    }
    if (firstName.length < 2 || lastName.length < 2) {
        return 'Names should be at least 2 characters long.';
    }
    return true;

/*
if (x == ""){
        alert("Name must be written");
        return false;
    }
*/
}

function emailValidation(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input)) {
        return 'Invalid email format.';
    }
    return true;
}

function phoneNumberValidation(phoneNumber) {
    const phoneRegex = /^[0-9]{9}$/; // Assuming a 9-digit phone number
    if (!phoneRegex.test(phoneNumber)) {
        return 'Phone number should be 9 digits long and contain only numbers.';
    }
    return true;
}

//add checkmarks done green and x red

firstName.addEventListener('input', () => {
    nameValidation(firstName);
});

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const nameValid = nameValidation(firstName, lastName);
    const emailValid = emailValidation(email);
    const phoneValid = phoneNumberValidation(phoneNumber);

    if (nameValid !== true) {
        alert(nameValid);
    } else if (emailValid !== true) {
        alert(emailValid);
    } else if (phoneValid !== true) {
        alert(phoneValid);
    } else {
        alert('Form submitted successfully!');
    }
});