const { getInitials, createSlug, average, isPalindrome } = require('./snack.js');

// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

test('La funzione getInitials restituisce le iniziali di un nome completo', () => {
    expect(getInitials('Marco', 'Preti')).toBe('MP');
    expect(getInitials('Mario', 'Rossi')).toBe('MR');
    expect(getInitials('John', 'Doe')).toBe('JD');
});

// 🏆 Snack 2
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug restituisce una stringa in lowercase."

test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug('Marco')).toBe('marco');
    expect(createSlug('Tavolo')).toBe('tavolo');
    expect(createSlug('ARMADIO')).toBe('armadio');
});

// 🏆 Snack 3
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione average calcola la media aritmetica di un array di numeri."

test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([2, 4, 6, 8, 10])).toBe(6);
    expect(average([2, 4, 6])).toBe(4);
    expect(average([1, 3, 5, 7, 9])).toBe(5);
});

// 🏆 Snack 4
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug sostituisce gli spazi con -."
// 📌 Esempi:
//     createSlug("Questo è un test") → "questo-e-un-test"

test('La funzione createSlug sostituisce gli spazi con -.', () => {
    expect(createSlug("Questo è un test")).toBe("questo-è-un-test");
    expect(createSlug("Questo è un altro test")).toBe("questo-è-un-altro-test");
})

// 🏆 Snack 5
// Creare un test che verifichi la seguente descrizione:ù
// 👉 "La funzione isPalindrome verifica se una stringa è un palindromo."
// 📌 Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.

test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
    expect(isPalindrome('Anna')).toBeTruthy();
    expect(isPalindrome('Marco')).toBeFalsy();
})