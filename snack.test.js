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