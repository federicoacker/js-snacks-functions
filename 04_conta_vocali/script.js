/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function howManyVocals(stringToCount){//Funzione che conta il numero di vocali in una stringa, se non è una stringa restituisce -1
    if(typeof(stringToCount) !== "string"){
        return -1;
    }
    const vocals = ['a','e','i','o','u']; // Array di vocali
    let sumVocals = 0; //Somma di quante vocali ci sono nella parola

    for(let i = 0; i<stringToCount.length; i++){ // Iteriamo nella stringa
        const currentLetter = stringToCount[i]; // Assegnamo currentLetter alla lettera corrente
        if(vocals.includes(currentLetter.toLowerCase())){ //Vediamo se vocals include la currentLetter (in lowercase così siamo sicuri che sia A sia a vengano contati);
            sumVocals++; //Incrememntiamo sumVocals;
        }
    }

    return sumVocals; //Restituiamo sumVocals
}


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)