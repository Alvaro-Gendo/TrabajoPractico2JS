let numero = 1
let incremento;
let repe;
numero = parseInt(prompt("Ingrese un número del 1 al 50"))

if(numero > 0 && numero <= 50){
    for(numero = 1; numero >= 50; numero--){
        for(repe = incremento; repe >= incremento; repe--)
        document.write(numero)
        document.write("<br>")
    }
}else{
    alert("Número incorrecto")
}

//Posible bucle inf. no logro arreglarlo...