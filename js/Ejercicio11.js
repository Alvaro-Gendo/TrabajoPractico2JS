let nombre1 = prompt("Escribe un nombre");
let edad1 = parseInt(prompt("Escribe su edad"));

let nombre2 = prompt("Escribe un nombre");
let edad2 = parseInt(prompt("Escribe su edad"));

let nombre3 = prompt("Escribe un nombre");
let edad3 = parseInt(prompt("Escribe su edad"));

let maximo = Math.max(edad1, edad2, edad3)

if(maximo === edad1){
    document.write("El mayor es " + nombre1)
}else if(maximo === edad2){
    document.write("El mayor es " + nombre2)
}else if(maximo === edad3){
    document.write("El mayor es " + nombre3)
}
