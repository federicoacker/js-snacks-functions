/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function saluto(name){ //Funzione saluto
    if(typeof(name) !== "string" || name === ''){ //Controlla se ciò che gli è stato passato è effettivamente una stringa, restituisce errore se non lo è
        console.error("E' stato passato un valore che non è una stringa, o una stringa vuota alla funzione saluto()");
    }
    else{ // Altrimenti restituisce un log con Ciao name
        console.log(`Ciao ${name}`);
    }
}

// Invoca la funzione qui e stampa il risultato in console
saluto(userName);


//Risultato atteso se si passa 'Mario': // ciao Mario
