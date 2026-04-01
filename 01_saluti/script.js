/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function saluto(name){ //Funzione saluto
    return (typeof(name) !== "string" || name === '') 
    ? "E' stato passato un valore che non è una stringa, o una stringa vuota alla funzione saluto()" 
    : `Ciao ${name}`;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(saluto(userName));


//Risultato atteso se si passa 'Mario': // ciao Mario
