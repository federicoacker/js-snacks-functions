/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterByFirstLetter(stringArray, controlChar){ // Funzione filterByFirstLetter
    // Voglio innanzitutto controllare che stringArray sia un array e che controlChar sia una stringa, se non lo è farò il toString di controlChar o restituirò -1 per l'array.
    if(!Array.isArray(stringArray)){
        return -1;
    }
    if(typeof(controlChar) !== "string"){
        controlChar = controlChar.toString(); // Questo non dovrebbe causare problemi, perché se mi viene passata 
        // un tipo semplice, non vado a toccare la variabile che mi è stata passata come argomento perché tanto c'è stata la riassegnazione
        // un tipo complesso, beh, controlChar sta semplicemente cambiando dall'essere assegnata al riferimento dell'indirizzo di memoria
        // all'avere un tipo semplice come valore, quindi non vado a modificare nulla della variabile iniziale.
    }
    else{
        // Aggiungo un controllo extra che si assicuri che controlChar abbia length esclusivamente di 1
        if(controlChar.length !== 1){ 
            return -2; //Se è diverso da 1, ritorno -2
        }
    }
    
    const filteredArray = []; //Array dove conterremo le parole filtrate secondo la controlChar

    for(let i = 0; i < stringArray.length; i++){
        let currentString = stringArray[i];
        if(currentString[0].toLowerCase() === controlChar.toLowerCase()){ //Qui in realtà avremmo potuto usare "startsWith" che avrebbe concesso di controllare 
        // anche se la controlChar era una stringa di più valori. Ma io voglio che funzioni solo con char singoli.
            filteredArray.push(currentString); // Lo metto nell'array nuovo
        }
    }

    return filteredArray; //Ritorno l'array nuovo
}

// Invoca la funzione qui e stampa il risultato in console
const filteredArray = filterByFirstLetter(names, "a");
if(filteredArray === -1){
    console.error(`Error:
        Hai provato a passare come primo argomento di 
        filterByFirstLetter(stringArray, controlChar): 
        - Qualcosa che non è un'array`);
}
else if(filteredArray === -2){
    console.error(`Error:
        Hai provato a passare come secondo argomento di 
        filterByFirstLetter(stringArray, controlChar):
        - Una stringa con più di una lettera, 
        - Qualcos altro che è stato convertito in una stringa con più di una lettera`);
}
else{
    console.log(filteredArray);
}

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]