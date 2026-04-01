/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra", 32];



function initials(stringArray)  {
     //Vorrei prima controllare che sia effettivamente un array, ritornando -1 se non lo è
    if(!Array.isArray(stringArray)){
        throw new TypeError("Ciò che è stato passato alla funzione initials(stringArray) come argomento non è un array")
    }
    //Vorrei poi fare un controllo per vedere che i valori all'interno siano tutti di tipo string, ritornando un codice d'errore se c'è qualcosa che non è una stringa dentro
    for(let i = 0; i < stringArray.length; i++){ 
    const currentString = stringArray[i];
        if(typeof(currentString) !== "string"){
            throw new TypeError("E' stato passato un array alla funzione initials(stringArray) che non contiene solo stringhe"); //Ritorno -2 per comunicare che c'è un problemas
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
try{
    const initialsArray = initials(names); // Lo assegno alla variabile initialsArray
    console.log(initialsArray); // Loggo l'array
}catch(error){
    console.log(`Error:
${error.name} 
${error.message}`);
}


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]