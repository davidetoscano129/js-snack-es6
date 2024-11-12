// Array di squadre di calcio
const serieA = [
    {nome: "Milan", punti: 0, falliSubiti: 0},
    {nome: "Roma", punti: 0, falliSubiti: 0},
    {nome: "Lazio", punti: 0, falliSubiti: 0},
    {nome: "Atalanta", punti: 0, falliSubiti: 0}
]

// Funzione per generare numeri casuali
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Genero punti e falli subiti attraverso la precedente funzione
for (let i = 0; i < serieA.length; i++) {
    serieA[i].punti = getRandomNumber(1, 99);
    serieA[i].falliSubiti = getRandomNumber(1, 300);
}

// Creo un nuovo array di squadre con solo i nomi e i falli subiti
const serieAFalli = serieA.map(serieA => {
    return { nome: serieA.nome, falliSubiti: serieA.falliSubiti };
});

// Stampo i risultati
console.log(serieA);
console.log(serieAFalli);


