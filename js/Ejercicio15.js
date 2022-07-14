let cadena = prompt("Introduce una frase");
let caracter = cadena.length;
let contador = 0;
let letras= ""

for(let incremento = 0; incremento < caracter; incremento++){
    letras = cadena.charAt(incremento);
    if(letras == "a" || letras == "e" || letras == "i" || letras == "o" || letras == "u"){
        contador++;
    }
}
document.write("Número de vocales " + contador)
