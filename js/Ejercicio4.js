let suma = (0)

do{
    let numero = parseInt(prompt("Ingrese un número"))
    if(numero == numero){
        suma = suma + numero
    }else{
        alert(numero + " no es un número")
    }

}while(confirm("Continue?"))

document.write(suma)