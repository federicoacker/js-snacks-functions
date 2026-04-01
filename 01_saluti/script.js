/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function saluto(name){
    if(typeof(name) !== "string" || name === ''){
        console.error("E' stato passato un valore che non è una stringa, o una stringa vuota alla funzione saluto()");
    }
    else{
        console.log(`Ciao ${name}`);
    }
}

// Invoca la funzione qui e stampa il risultato in console
saluto(userName);


//Risultato atteso se si passa 'Mario': // ciao Mario
