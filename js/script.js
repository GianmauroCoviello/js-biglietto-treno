
// Dichiaro una variabile che chiede l' età all' utente
let eta = parseInt(prompt("quanti anni hai?"))

// Dichiaro una variabile che chiede i km da percorrere all' utente
let km = parseInt(prompt("quanti km devi percorrere?"))

// Dichiaro una variabile calcolandomi il prezzo del biglietto
let prezzo = (km * 0.21)




// SE l' eta è minore di 18
if (eta<18) {
    prezzo -= (prezzo * 0.2)
    console.log(prezzo)
    message = (`il prezzo scontato è di: ${prezzo.toFixed(2)}€`)

// SE l' eta è maggiore di 65   
} else if (eta>65) {
    prezzo -= (prezzo * 0.4)
    console.log(prezzo)
    message = (`il prezzo scontato è di: ${prezzo.toFixed(2)}€`) 

// ALTRIMENTI se l'età non rientra in nessuno di queste due fasce si paghera il prezzo pieno
} else {
    (prezzo)
    console.log(prezzo)
    message = (`il prezzo è di: ${prezzo.toFixed(2)}€`)
}



document.getElementById("Biglietto").innerHTML = message