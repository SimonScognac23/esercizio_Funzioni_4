


function controlloPalindroma(str) {

    // Rimuovi spazi, segni di punteggiatura 
    let cleanStr = str.replace(/\W/g, "");



    // Confronto di stringhe con la sua versione invertita 
    // split: trasforma stringa in un array 
    // join: converte un array in una stringa
    let reverseStr = cleanStr.split("").reverse().join("");



    // Verifico se sono uguali le stringhe se si mi restituisce true, altrimenti false
    return cleanStr == reverseStr;

}



let frase = "able was i,   ere    i  saw  elba";
console.log(controlloPalindroma(frase));






