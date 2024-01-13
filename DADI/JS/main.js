// - Genero un numero rondom da 1 a 6 per l'user.
//     - Salvo in una variabile il numero 
// - Genero un numero random da 1 a 6 per il computer.
//     - Salvo in una variabile il numero 

//  SE il numero generato per l'user è minore del numero del computer
//  - Stampo Lose

// ALTRIMENTI SE il numero generato per l'user è maggiore del numero del computer
//  - Stampo Win

// ALTRIMENTI
// - Stampo Drow


let userNumber = Math.floor(Math.random() * 6 + 1);
console.log(userNumber);



let pcNumber = Math.floor(Math.random() * 6 + 1);
console.log(pcNumber);


if (userNumber < pcNumber) {
    console.log("Vince il PC");
} else if (userNumber > pcNumber) {
    console.log("Vince il Giocatore");
} else if (userNumber == pcNumber) {
    console.log("Pareggio");
}