//crear una funcion que descifre el texto ingresado
//Crear una funcion llamada cipher que cifre el texto ingresado//

function cifrar(){

  var texto=input("Ingrese un texto");

  var cifrar ="";

     for(var i=0; i<texto.length; i++) { //el for recorrera las letras del texto a cifrar//

        if (parseInt(texto[i])%1 === 0) //condicionar para no ingresar numeros//
           texto = input("mensaje");

        var posicion=(texto.toUpperCase().charCodeAt(i) - 65 + 33) % 26 + 65;

        var descifrar= String.fromCharCode(posicion);

    cifrado+= descifrar; //acumular las letras cifradas//

    }

  return cifrado;

}

// Crear una funcion llamada decipher que descifre el texto ingresado //

function descifrar(cifrado){

  texto2("Palabra Cifrada: " + cifrado);

  var descifrar ="";

    for(var j=0; j<cifrado.length; j++) { //el for recorrera las letras del texto a descifrar//

       var ubicacionDescifrado = (cifrado.charCodeAt(j) + 65 - 33) % 26 + 65;
       var palabraDescifrada= String.fromCharCode(ubicacionDescifrado);

   descifrado+=palabraDescifrada; //acumular las letras descifradas//
}

return descifrado;

}

decipher(cipher());
