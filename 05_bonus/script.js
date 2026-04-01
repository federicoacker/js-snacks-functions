/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function hourlyGreeting(name){//Funzione hourlyGreeting
    //Controllo della validità di name come stringa come al solito
    if(typeof(name) !== "string" || name === ''){ //Controlla se ciò che gli è stato passato è effettivamente una stringa
        //Restituisce codice d'errore -1 se non lo è
        return -1;
    }
    const currentDate = new Date(); // Creiamo un nuovo oggetto Date
    const currentTime = currentDate.getHours().toString(); // Recuperiamo che ora è da currentDate e trasformiamolo in una stringa.
}

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.