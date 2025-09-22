// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."
const getInitials = (name, surname) => {
    return name.charAt(0).toUpperCase() + surname.charAt(0).toUpperCase();
};

// 🏆 Snack 2
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug restituisce una stringa in lowercase."

const createSlug = str => str.toLowerCase();

module.exports = { getInitials, createSlug }