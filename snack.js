// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."
const getInitials = (name, surname) => {
    return name.charAt(0).toUpperCase() + surname.charAt(0).toUpperCase();
};

// 🏆 Snack 2
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug restituisce una stringa in lowercase."

// const createSlug = str => str.toLowerCase();

// 🏆 Snack 3
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione average calcola la media aritmetica di un array di numeri."

const average = arr => arr.reduce((acc, num) => {
    return (acc + num);
}) / arr.length;

// 🏆 Snack 4
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug sostituisce gli spazi con -."
// 📌 Esempi:
//     createSlug("Questo è un test") → "questo-e-un-test"

const createSlug = str => str.split(' ').join('-').toLowerCase().trim();

// 🏆 Snack 5
// Creare un test che verifichi la seguente descrizione:ù
// 👉 "La funzione isPalindrome verifica se una stringa è un palindromo."
// 📌 Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.

const isPalindrome = str => str.toLowerCase() === str.split('').reverse().join('').toLowerCase();

module.exports = { getInitials, createSlug, average, isPalindrome }