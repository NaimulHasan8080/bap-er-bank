document.getElementById('submit-button').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const emailValue = emailField.value;
    const passwordField = document.getElementById('password-field');
    const passwordValue = passwordField.value;
    if (emailValue == 'naimul@hasan.com' && passwordValue == 'secret') {
        window.location.href = 'banking.html'
    }

})