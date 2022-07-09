let cadena = ""

do{
    let texto = prompt("Ingrese una palabra")
    if(cadena == ""){
        cadena = cadena + texto
    }else{
        cadena = cadena + "-" + texto
    }

}while(confirm("Continuar?"))

document.write(cadena)
