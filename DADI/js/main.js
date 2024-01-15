const resultUserElement = document.getElementById('resultUser');
const resultPcElement = document.getElementById('resultPc');
const winners = document.getElementById('winners');
const startButtonElement = document.getElementById('startButton');
const plauButtonElement = document.getElementById('playButton');
const screenGameElement = document.getElementById('screenGame');
// Bottone per avviare Schermata Gioco
startButtonElement.addEventListener('click', function () {
    screenGameElement.classList.remove('d-none');
    containerStartButton.classList.add('d-none');
    document.getElementById('resultUser').classList.add('d-none');
    document.getElementById('resultPc').classList.add('d-none');
    document.getElementById('containerUser').classList.add('d-none');
    document.getElementById('containerPC').classList.add('d-none');
    document.getElementById('winners').classList.add('d-none');
});

// Bottone per Gettare Dadi
plauButtonElement.addEventListener('click', function () {

    document.getElementById('resultUser').classList.remove('d-none');
    document.getElementById('resultPc').classList.remove('d-none');
    document.getElementById('containerUser').classList.remove('d-none');
    document.getElementById('containerPC').classList.remove('d-none');
    document.getElementById('winners').classList.remove('d-none');

    // - Genero un numero rondom da 1 a 6 per l'user.
    //     - Salvo in una variabile il numero 
    let userNumber = Math.floor(Math.random() * 6 + 1);
    resultUserElement.innerHTML = (`Al Giocatore è uscito il n° <div class="styleNumber">${userNumber}</div>`);

    // - Genero un numero random da 1 a 6 per il computer.
    //     - Salvo in una variabile il numero 
    let pcNumber = Math.floor(Math.random() * 6 + 1);
    resultPcElement.innerHTML = (`Al PC è uscito il n° <div class="styleNumber">${pcNumber}</div>`);


    //  SE il numero generato per l'user è minore del numero del computer
    if (userNumber < pcNumber) {
        //  - Stampo Lose
        winners.innerHTML = (`Vince il PC`);
        // ALTRIMENTI SE il numero generato per l'user è maggiore del numero del computer
    } else if (userNumber > pcNumber) {
        //  - Stampo Win
        winners.innerHTML = (`Vince il Giocatore`);
        // ALTRIMENTI
    } else if (userNumber == pcNumber) {
        // - Stampo Drow
        winners.innerHTML = (`Pareggio`);
    }


});