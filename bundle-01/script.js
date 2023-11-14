/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// 1- stampare in console i;
// 3- non verrà stampato nulla perchè la condizione "i > 5" è false fin dal principio


// ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }
function addIfEven(num) {
    if (num % 2 == 0) {
        return num + 5;
    }
    return num;
}
// 1- se num è pari risulterà num + 5, se dispari risulterà num;
// 2- "num % 2 = 0" è assegnazione, "==" è l'eguaglianza

// ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
// 1- creare un loop che stampi in console da 1 a 5;
// 2- bisogna scrivere ";" e non "," tra inizializzazione consdizione e modifica del ciclo for


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//        if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers();
// 1- stampare i numeri pari contenuti nell'array numbers
// 2- ";" dopo la modfica del ciclo for, "=" nella condizione dell'istruzione if, ";" dopo la consdizione dell'istruzione if, la consizione del ciclo for dovrebbe eseere "i < numbers.lenght", "return" va inserito fuori dal ciclo for, nella consizione dell'istruzione if va inserito "numbers[i]", in evenNumbers va pushato numbers[i]