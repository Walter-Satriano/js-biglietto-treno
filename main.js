/*Il programma dovrà chiedere all’utente il numero di chilometri e l’età
e dovrà calcolare il prezzo totale del viaggio.
Il prezzo del biglietto è definito in base ai km (0.21 €cent al km)
ma c’è uno sconto del 20% per i minorenni e del 40% per gli over 65.*/

// Definizione variabili
var elemento = document.getElementById("train-ticket");
var km, age, fullPriceticket, discount20, discount40, risultato;



// Chiedo all'utente il numero di km da percorrere
km = parseInt(prompt("Quanti km devi percorrere?"));
console.log(km);

// Chiedo l'eta dell'utente
age = parseInt(prompt("Quanti anni hai?"));
console.log(age);

// Costo biglietto intero (0.21€ per km)
fullPriceticket = 0.21 * km;
console.log(fullPriceticket);

// Prezzo biglietto con applicazione sconto 20%
discount20 = Math.round(fullPriceticket - (fullPriceticket * (20 / 100)));
console.log(discount20);

//Prezzo biglietto con applicazione sconto 40%
discount40 = Math.round(fullPriceticket - (fullPriceticket * (40 / 100)));
console.log(discount40);

// Verifico che le scontistiche vengano applicate correttamente
if (age < 18) {
  risultato = discount20;
}

if (age >= 18 && age <= 65) {
  risultato = fullPriceticket;
}

if (age > 65) {
  risultato = discount40;
}

// Stampo il prezzo finale del biglietto considerando le scontistiche
if (risultato === discount20) {
  elemento.innerHTML = "Il prezzo totale del biglietto è: " + discount20 + " €";
}

if (risultato === fullPriceticket) {
  elemento.innerHTML = "Il prezzo totale del biglietto è: " + fullPriceticket + " €";
}

if (risultato === discount40) {
  elemento.innerHTML = "Il prezzo totale del biglietto è: " + discount40 + " €";
}
