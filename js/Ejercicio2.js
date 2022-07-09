let numero = parseInt(prompt("Ingrese un número del 0 al 10"))

if(numero <= 2){
    alert("Muy deficiente")
}else if(numero <= 4){
    alert("Insuficiente")
}else if(numero <= 6){
    alert("Suficiente")
}else if(numero === 7){
    alert("Bien")
}else if(numero <= 9){
    alert("Notable")
}else if(numero === 10){
    alert("Sobresaliente")
}else if(numero >= 11){
    alert("Número erróneo")
}else{
    alert("Introduce un número válido")
}