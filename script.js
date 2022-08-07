/*
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también 
devolver una palabra encriptada para su versión original.

Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

La página debe tener campos para
inserción del texto que será encriptado o desencriptado, 
y el usuario debe poder escoger entre as dos opciones.
El resultado debe ser mostrado en la pantalla.
Extras:
- Un botón que copie el texto encriptado/desencriptado
para la sección de transferencia, o sea que tenga la misma
funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.
 */

//Elementos 
var textoIngresado = document.getElementById("areaTexto");
var encriptar = document.getElementById("encriptar");
var desencriptar = document.getElementById("desencriptar");

//texto p1 y texto p2
var textoParrafo1 = document.getElementById("texto-p1");
var textoParrafo2 = document.getElementById("texto-p2");

//botones
var botonCopiar = document.getElementById("copy");
var botonBorrar = document.getElementById("reset");

encriptar.onclick = encriptado;
desencriptar.onclick = desencriptado;
botonCopiar.onclick = copiar;
botonBorrar.onclick = borrar;

var arrayEncriptado;

function encriptado(evento) {
    console.log("Encriptando texto");
    var resultado = [];
    var oracionEncriptada = "";

    for (let i = 0; i < textoIngresado.value.length; i++) {
        var caracter = textoIngresado.value[i];

        //console.log(textoIngresado.value[i]);
        console.log(caracter);
        if (caracter == "e") {
            resultado.push("enter");
            oracionEncriptada += "enter";
        } else if (caracter == "i") {
            resultado.push("imes");
            oracionEncriptada += "imes";
        } else if (caracter == "a") {
            resultado.push("ai");
            oracionEncriptada += "ai";
        } else if (caracter == "o") {
            resultado.push("ober");
            oracionEncriptada += "ober";
        } else if (caracter == "u") {
            resultado.push("ufat");
            oracionEncriptada += "ufat";
        } else {
            resultado.push(caracter);
            oracionEncriptada += caracter;
        }

    }
    arrayEncriptado = resultado;

    //cambiando mensaje
    var mensaje1 = "Mensaje Encriptado!";
    var mensaje2 = "Puedes copiarlo facilmente!";
    textoParrafo1.innerText = mensaje1;
    textoParrafo2.innerText = mensaje2;

    textoIngresado.value = oracionEncriptada;
}

function desencriptado(evento) {
    console.log("Desencriptando texto");

    var arrayTexto = arrayEncriptado;
    var resultado = [];
    var oracionDesencriptada = "";

    for (let i = 0; i < arrayTexto.length; i++) {
        if (arrayTexto[i] == "enter") {
            resultado.push("e");
            oracionDesencriptada += "e";
        } else if (arrayTexto[i] == "imes") {
            resultado.push("i");
            oracionDesencriptada += "i";
        } else if (arrayTexto[i] == "ai") {
            resultado.push("a");
            oracionDesencriptada += "a";
        } else if (arrayTexto[i] == "ober") {
            resultado.push("o");
            oracionDesencriptada += "o";
        } else if (arrayTexto[i] == "ufat") {
            resultado.push("u");
            oracionDesencriptada += "u";
        } else {
            resultado.push(arrayTexto[i]);
            oracionDesencriptada += arrayTexto[i];
        }
    }

    //cambiando mensaje
    var mensaje1 = "Mensaje Desencriptado!";
    var mensaje2 = "Puedes copiarlo facilmente!";
    textoParrafo1.innerText = mensaje1;
    textoParrafo2.innerText = mensaje2;

    textoIngresado.value = oracionDesencriptada;
}


function copiar(evento) {
    textoIngresado.select();
    document.execCommand("copy")
}

function borrar(evento) {
    //restaurando mensaje
    var mensaje1 = "Ningún mensaje fue encontrado";
    var mensaje2 = "Ingresa el texto que desees encriptar o desencriptar.";
    textoParrafo1.innerText = mensaje1;
    textoParrafo2.innerText = mensaje2;

}
