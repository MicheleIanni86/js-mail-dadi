// const resultElement = document.getElementById('result');
const emailLogin = prompt('Inserisci la tua mail');

const emailOk = ['michele@gmail.com', 'tiziano@gmail.com', 'mattia@gmail.com', 'luigi@gmail.com'];

let result = document.getElementById('result');


for (let i = 0; i < emailOk.length; i++) {

    if (emailLogin == emailOk[i]) {
        result.innerHTML = "Accesso Consentito";
        break;
    } else {
        result.innerHTML = "Accesso Negato";
    }

}

