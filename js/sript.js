let form = document.querySelector('#purchase')
let email = document.getElementById('mail')
let tel = document.getElementById('tel')

email.addEventListener('change', function (e) {
    validEmail(this)
})

tel.addEventListener('change', function (e) {
    validPhone(this)
})

// Validation email
const validEmail = (inputEmail) => {
    let regexEmail = new RegExp(
        '[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}]$', 'g'
    );

    let testMail = regexEmail.test(inputEmail.value);
    let small = inputEmail.nextElementSibling;

    if (testMail) {
        small.innerHTML = 'Adresse valide'
    } else {
        small.innerHTML = 'Adresse non valide'
    }
}

// Validation Telephone
const validPhone = (inputTel) => {
    let regexPhone = new RegExp("^(0[1-68])(?:[ _.-]?(\d{2})){4}$")

    let testPhone = regexPhone.test(inputTel.value)
    let small = inputTel.nextElementSibling

    if (testPhone) {
        small.innerHTML = 'Numéro de téléphone valide'
    } else {
        small.innerHTML = 'Numéro de téléphone non valide'
    }
}