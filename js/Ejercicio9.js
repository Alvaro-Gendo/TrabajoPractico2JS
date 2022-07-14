let numero = 0

for(numero = 1; numero <= 500; numero++){

    if(numero % 4 === 0){
        document.write("(Múltiplo de 4) ")
    }else if(numero % 9 === 0){
        document.write("(Múltiplo de 9) ")
    }
    if(numero % 5 === 0){
        document.write("<hr>")
    }
    document.write(numero)
    document.write("<br>")
}




