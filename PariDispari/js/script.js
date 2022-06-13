// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const userNumber = parseInt(prompt('Dimmi un numero'));

const userNumberEvenOrOdd  = isEvenOrOdd(userNumber);

const randomcomputer = getRandomComputer(1 , 5);

if(userNumberEvenOrOdd === 'even') {
    alert('Numero pari');
} else {
    alert('Numero dispari');
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function sommanumber(userNumber, getRandomComputer){
    const sum = userNumber + getRandomComputer ;
    return sum;
}

function isEvenOrOdd (number){
    let evenOrOdd;

    if(number % 2 === 0){
        evenOrOdd = 'even';
    }
    else{
        evenOrOdd = 'odd';
    }
    
    return evenOrOdd;
}