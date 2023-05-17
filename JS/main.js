let eta = parseInt(prompt("quanti anni hai?"))
console.log(eta)

let km = parseInt(prompt("quanti km devi percorrere?"))
console.log(km)

let prezzo = (km * 0.21)
console.log(prezzo)


if (eta<18) {
    (prezzo = (prezzo - (prezzo * 0.2)))
    console.log(prezzo)

    
} else if (eta>65) {
    (prezzo = prezzo - ( prezzo * 0.4))
    console.log(prezzo) 
    
} else {
    (prezzo)
    console.log(prezzo)
}



document.getElementById("Biglietto").innerHTML = prezzo