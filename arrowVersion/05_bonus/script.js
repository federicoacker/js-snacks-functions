/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
const hourlyGreeting = name => {//Funzione hourlyGreeting
    //Controllo della validità di name come stringa come al solito
    if(typeof(name) !== "string" || name === ''){ //Controlla se ciò che gli è stato passato è effettivamente una stringa
        //Restituisce codice d'errore -1 se non lo è
        return -1;
    }
    let saluto = ""; //Stringa vuota per il saluto iniziale
    const currentDate = new Date(); // Creiamo un nuovo oggetto Date
    const currentTime = Number(currentDate.getHours().toString()); // Recuperiamo che ora è da currentDate e trasformiamolo in una stringa, 
    // dopodiché lo trasformiamo in un number, tanto sappiamo sempre che sarà un number
    if(currentTime < 13 && currentTime > 3){ // Se l'ora corrente è tra 3 e 13 allora è giorno
        saluto = `Buongiorno ${name}`; // Buongiorno
    }
    else if(currentTime < 17){ //Se l'ora corrente è sotto le 17 ma è sopra le 13 (garantito dalla funzionalità esclusiva di else if) allora è pomeriggio
        saluto = `Buon pomeriggio ${name}`; //Buon pomeriggio
    }
    else { //Altrimenti è sera
        saluto = `Buona sera ${name}`; //Buona sera
    }
    return saluto; //Ritorno il saluto
}

// Invoca la funzione qui e stampa il risultato in console
const saluto = hourlyGreeting(name);
if(saluto === -1){
    console.error(`Error:
        Hai passato alla funzione hourlyGreeting(name):
        - Qualcosa che non è una stringa o è una stringa vuota`);
}
else{
    console.log(saluto);
}


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.