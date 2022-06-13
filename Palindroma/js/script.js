// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const word = prompt('Inserisci una parola').toLowerCase();
console.log(word);

palindromWord(word);

let final = palindromWord(word);
if(final === true){
 alert('Il nome è Palindromo');
}else{
    alert('Il nome non è palindromo');
}

//funzione
function palindromWord (userWordtoCheck){

    userWord = false;
    let checkword ='';

    for(let i = userWordtoCheck.length-1; i>=0; i--){
        checkword += userWordtoCheck[i];
        console.log(checkword);
    }

    if(userWordtoCheck === checkword ){
        userWord = true;
    }

    console.log(userWord);
   
    return userWord;
}
