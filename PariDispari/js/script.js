// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
const userEvenorOdd = prompt ('Pari o Dispari');
const userNumber = parseInt(prompt('Dimmi un numero'));
const userNumberselect = isEvenOrOdd(userNumber);

//Funzione per vedere se il numero dell'utente è pari
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

if(userNumberselect === 'even') {
    alert('Numero pari');
} else {
    alert('Numero dispari');
}

//Genero un numero Random da 1 a 5 per il computer 
for(let i = 0; i <= 1 ; i++) {
    const random = getRndInteger(1, 5);
    console.log(random);
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Sommo i due numeri
function sommainumeri(userNumber, random){
    const sum = userNumber + random;
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