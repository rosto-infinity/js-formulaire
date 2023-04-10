//la recuperation des éléments
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
// console.log(password2);

//Evénements
form.addEventListener('submit',
    (e) => {
        e.preventDefault();

        form_verify();

    });
//Fonctions
function form_verify() {
    //Obtenir toutes les valeurs des inputs

    const userValue = username.value.trim();
    const emailValue = email.value.trim();
    const pwdValue = password.value.trim();
    const pwd2Value = password2.value.trim();

    //Username verify
    if (userValue === "") {
        let message = "Username ne peut être vide";
        setError(username, message);
    } else if (!userValue.match(/^[a-zA-Z]/)) {
        let message = "Username doit commencer par une lettre";
        setError(username, message);
    } else {
        let letterNumber = userValue.length;
        if (letterNumber < 3) {
            let message = "Username doit avoir au moins trois caractères";
            setError(username, message);
        } else {
            setSuccess(username);
        }
    }

    //Email verify
    if (emailValue === "") {

        let message = "Email ne peut être vide";
        setError(email, message);
    } else if (!email_verify(emailValue)) {

        let message = "Email non valide";
        setError(email, message);
    } else {
        setSuccess(email);
    }


    // Password verify
    if (pwdValue === "") {

        let message = "Le password ne peut être vide";
        setError(password, message);
    } else if (!password_verify(pwdValue)) {

        let message = "Le password est faible (8 à 12) caratère ";
        setError(password, message);
    } else {
        setSuccess(password);
    }


    // Password verify
    if (pwd2Value === "") {
        let message = "Le password confirm ne peut être vide";
        setError(password2, message);
    } else if (pwdValue !== pwd2Value) {
        let message = "les passsword ne correspond pas ";
        setError(password2, message);
    } else {
        setSuccess(password2);
    }
}

function setError(elt, message) {
    const formControl = elt.parentElement;
    const small = formControl.querySelector('small');
    //    console.log(small);
    //Ajout du message d'erreur
    small.innerText = message;
    // Ajout de la class error
    formControl.className = "form-control error ";
}

function setSuccess(elt) {
    const formControl = elt.parentElement;
    // Ajout de la class success
    formControl.className = "form-control success ";
}

function email_verify(email) {
    passRegex = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
    return passRegex;
}

function password_verify(password) {
    return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/.test(password);
};