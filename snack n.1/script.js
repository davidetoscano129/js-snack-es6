// Creo un array di oggetti, dove ogni oggetto rappresenta una bici con prorpietà nome e peso
const bici = [
    {nome: "Mountain bike", peso: 10},
    {nome: "Graziella", peso: 12},
    {nome: "BMX", peso: 5}
];

// Inizialmente assumo che la bici più leggera sia la prima, per poi scorrere tra le altre (tramite for) e trovarne una, eventualmente, con il valore peso minore
let biciLeggera = bici[0]; 

for (let i = 1; i < bici.length; i++) {
    if (bici[i].peso < biciLeggera.peso) {
        biciLeggera = bici[i];
    }
}

// Stampo il risultato
console.log(biciLeggera);
