// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const userEvenorOdd = prompt ('Pari o Dispari');

const userNumber = parseInt(prompt('Dimmi un numero'));

const computer = getRndInteger(1, 5);

let somma = sommainumeri(userNumber, getRndInteger(1, 5))

const result = isEvenOrOdd(somma) ;

//Genero un numero Random da 1 a 5 per il computer 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Sommo i due numeri
function sommainumeri(num1, num2){
    const sum = num1 + num2;
    return sum;
}

//Funzione per vedere se il numero è pari o dispari
function isEvenOrOdd (number){
    let evenOrOdd;

    if(number % 2 === 0){
        evenOrOdd = 'Pari';
    }
    else{
        evenOrOdd = 'Dispari';
    }
    
    return evenOrOdd;
}

//Controllo se ho vinto o perso
if(result === userEvenorOdd) {
    alert('Hai Vinto');
} else {
    alert('Hai Perso');
}

