/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function initials(arrayDiStringhe){ //Funzione initials
    //Vorrei prima controllare che sia effettivamente un array, ritornando -1 se non lo è
    if(!Array.isArray(arrayDiStringhe)){
        return -1;
    }
    //Vorrei poi fare un controllo per vedere che i valori all'interno siano tutti di tipo string, rimuovendo quelli che non sono stringhe
    for(let i = 0; i < arrayDiStringhe.length; i++){
        const stringaCorrente = arrayDiStringhe[i];
        if(typeof(stringaCorrente) !== "string"){
            arrayDiStringhe.splice(i,1);
        }
    }
    //Adesso l'array è sanificato e ci sono solo stringhe, a questo punto, creo un nuovo array che andrà ad avere al suo interno le iniziali
    
}


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]