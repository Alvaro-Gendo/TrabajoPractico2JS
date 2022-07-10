let numero = 50

numero = parseInt(prompt("Ingrese un número del 1 al 50"))
for(numero = 50; numero >= 1; numero--){
    for(repe = 0; repe < numero; repe++)
    document.write("<br>" + numero)
}
