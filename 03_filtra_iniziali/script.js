/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterByFirstLetter(stringArray, controlString){ // Funzione filterByFirstLetter
    // Voglio innanzitutto controllare che stringArray sia un array e che controlString sia una stringa, se non lo è farò il toString di controlString o restituirò -1 per l'array.
    if(!Array.isArray(stringArray)){
        return -1;
    }
    if(typeof(controlString) !== "string"){
        controlString = controlString.toString(); // Questo non dovrebbe causare problemi, perché se mi viene passata 
        // un tipo semplice, non vado a toccare la variabile che mi è stata passata come argomento perché tanto c'è stata la riassegnazione
        // un tipo complesso, beh, controlString sta semplicemente cambiando dall'essere assegnata al riferimento dell'indirizzo di memoria
        // all'avere un tipo semplice come valore, quindi non vado a modificare nulla della variabile iniziale.
    }   
}

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]