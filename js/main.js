window.onload = function () {
    let contactForm = document.mainForm;
    let name = document.mainForm.name;
    let nameError = document.querySelector('.nameError');
    let email = document.mainForm.email;
    let emailError = document.querySelector('.emailError');
    let msg = document.mainForm.msg;
    let msgError = document.querySelector('.msgError');
    let msgSuccess = document.querySelector('.msgSuccess');

    function validateForm(e) {
        e.preventDefault();

        if (name.value.trim() === '') {
            name.style.borderColor = 'red';
            nameError.textContent = 'This field is required';
            return false;
        } else {
            name.style.borderColor = '#319966';
            nameError.textContent = '';

        }

        if (email.value.trim() === '') {
            email.style.borderColor = 'red';
            emailError.textContent = 'This field is required';
            return false;
        } else {
            email.style.borderColor = '#319966';
            emailError.textContent = '';
        }

        if (msg.value.trim().length < 10 && msg.value.trim().length > 0) {
            msg.style.borderColor = 'red';
            msgError.textContent = 'Your massage is too short';
            return false;
        } else {
            msg.style.borderColor = '#319966';
            msgError.textContent = '';
        }


        contactForm.style.display = 'none';
        msgSuccess.style.display = 'block';

        return true;
    }

    contactForm.addEventListener('submit', validateForm)


};