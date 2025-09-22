const { getInitials, createSlug } = require('./snack.js');

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

const average = arr => arr.reduce((acc, num) => {
    return (acc + num);
}) / arr.length;

test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([2, 4, 6, 8, 10])).toBe(6);
    expect(average([2, 4, 6])).toBe(4);
    expect(average([1, 3, 5, 7, 9])).toBe(5);
});