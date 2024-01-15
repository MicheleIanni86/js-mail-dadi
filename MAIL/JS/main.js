const emailOk = ['michele@gmail.com', 'tiziano@gmail.com', 'mattia@gmail.com', 'luigi@gmail.com'];
let foundMail = false;

const emailLogin = document.getElementById('emailLogin');
const buttonSendElement = document.getElementById('buttonSend');



console.log(emailOk);

let result = document.getElementById('result');


buttonSendElement.addEventListener('click', function () {

    for (let i = 0; i < emailOk.length; i++) {

        currentEmail = emailOk[i];

        if (emailLogin.value == '') {
            alert('Inserire mail per continuare');
            break;
        } else if (emailLogin.value == currentEmail) {

            result.innerHTML = `<div class="colorOk"> Accesso Consentito </div>`;

            break;

        } else {
            foundMail = false;
            result.innerHTML = `<div class="colorKo"> Accesso Negato </div>`;

        }

    }
});

