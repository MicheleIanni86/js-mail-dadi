// const resultElement = document.getElementById('result');
const emailLogin = document.getElementById('emailLogin');
const buttonSendElement = document.getElementById('buttonSend');



const emailOk = ['michele@gmail.com', 'tiziano@gmail.com', 'mattia@gmail.com', 'luigi@gmail.com'];
console.log(emailOk);

let result = document.getElementById('result');


buttonSendElement.addEventListener('click', function () {

    for (let i = 0; i < emailOk.length; i++) {

        if (emailLogin.value == '') {
            alert('Inserire mail per continuare');
            break;

        } else if (emailLogin.value == emailOk[i]) {
            result.innerHTML = "Accesso Consentito";

            break;

        } else {
            result.innerHTML = "Accesso Negato";

        }

    }
});

