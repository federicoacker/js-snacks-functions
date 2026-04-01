/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function initials(stringArray){ //Funzione initials
    //Vorrei prima controllare che sia effettivamente un array, ritornando -1 se non lo è
    if(!Array.isArray(stringArray)){
        return -1;
    }
    //Vorrei poi fare un controllo per vedere che i valori all'interno siano tutti di tipo string, rimuovendo quelli che non sono stringhe
    for(let i = 0; i < stringArray.length; i++){
        const currentString = stringArray[i];
        if(typeof(currentString) !== "string"){
            stringArray.splice(i,1);
        }
    }
    //Adesso l'array è sanificato e ci sono solo stringhe, a questo punto, creo un nuovo array che andrà ad avere al suo interno le iniziali
    const initialsArray = [];
    for(let i = 0; i < stringArray.length; i++){
        const currentString = stringArray[i];
        initialsArray.push(currentString[0]);
    }
    return initialsArray;
}


// Invoca la funzione qui e stampa il risultato in console
const initialsArray = initials(names); // Lo assegno alla variabile initialsArray
if (initialsArray !== -1){ //Controllo che non mi abbia restituito -1
    console.log(initialsArray); // Loggo l'array
}else{
    console.error("E' stato passato un argomento alla funzone initials() che non è un array");
}


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]