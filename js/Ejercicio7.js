let numero = 1

numero = parseInt(prompt("Ingrese un número del 1 al 50"))

if(numero >= 0 && numero <= 50){
    for(numero = 50; numero >= 1; numero--){
        for(repe = 0; repe < numero; repe++)
        document.write(numero)
        document.write("<br>")
    }
}else{
    alert("Número incorrecto")
}
