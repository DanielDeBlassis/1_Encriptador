//----------------------VARIABLES--------------------------//
//obtengo el texto introducido
var textoIntroducido = document.getElementById("areaTexto");

//obtengo los botones
var encriptado = document.getElementById("encriptar");
var desencriptado = document.getElementById("desencriptar");

//contenedor resultado y texto
var contenedorResultado = document.getElementById("contenedor-resultado");

//botones de copiado y borrado
var botonCopiar = document.getElementById("copy");
var botonBorrar = document.getElementById("reset");


////////////ENCRIPTAR////////////
encriptado.onclick = encriptar;
//encripta texto
function encriptar() {
    console.log("El texto introducido es: " + textoIntroducido.value);
    console.log("Encriptando...");
    var texto = textoIntroducido.value.toLowerCase();

    //ejecuto comprobación
    if (texto != "") {//si el campo no está vacío

        var a = /a/g;
        var e = /e/g;
        var i = /i/g;
        var o = /o/g;
        var u = /u/g;

        var resultado = texto.replace(e, "enter");
        resultado = resultado.replace(i, "imes");
        resultado = resultado.replace(a, "ai");
        resultado = resultado.replace(o, "ober");
        resultado = resultado.replace(u, "ufat");

        console.log("Resultado: " + resultado);

        //muestro el resultado en el contenedor
        contenedorResultado.innerText = "";
        contenedorResultado.innerHTML = `<textarea id="areaTexto2" class="text-area2" placeholder="Texto Resultado" disabled="disabled">${resultado}</textarea><div class="contenedor-botones-lateral">
    <button onclick="copiarClick()" id="copy2" class="boton-copiar" type="button" title="Copiar"><i
                    class="fas fa-copy"></i> Copiar</button>
    </div>`;
    } else {//si el campo está vacío se ejecuta lo siguiente
        console.log("Error al encriptar. Campos vacíos.");
        var falla = document.getElementById("fail");
        encriptado.style.backgroundColor = "red";
        falla.show();
        setTimeout(function () {
            falla.close();
            // remuevo la propiedad añadida (porque es css en línea y se interpone con mis estilos)
            encriptado.style.backgroundColor = "#0A3871";
        }, 2000);
    }
}

////////////DESENCRIPTAR////////////
desencriptado.onclick = desencriptar;
//desencripta el texto
function desencriptar() {
    console.log("El texto introducido es: " + textoIntroducido.value);
    console.log("Desencriptando...");
    var texto = textoIntroducido.value.toLowerCase();

    //ejecuto comprobación
    if (texto != "") {//si el campo no está vacío
        var a = /ai/g;
        var e = /enter/g;
        var i = /imes/g;
        var o = /ober/g;
        var u = /ufat/g;
        var resultado = texto.replace(a, 'a');

        var a = /ai/g;
        var e = /enter/g;
        var i = /imes/g;
        var o = /ober/g;
        var u = /ufat/g;

        var resultado = texto.replace(e, "e");
        resultado = resultado.replace(i, "i");
        resultado = resultado.replace(a, "a");
        resultado = resultado.replace(o, "o");
        resultado = resultado.replace(u, "u");

        console.log(resultado);

        //muestro el resultado en el contenedor
        contenedorResultado.innerText = "";
        contenedorResultado.innerHTML = `<textarea id="areaTexto2" class="text-area2" placeholder="Texto Resultado" disabled="disabled">${resultado}</textarea><div class="contenedor-botones-lateral">
    <button onclick="copiarClick()" id="copy2" class="boton-copiar" type="button" title="Copiar"><i
                    class="fas fa-copy"></i> Copiar</button>
    </div>`;
    } else {//si el campo está vacío se ejecuta lo siguiente
        console.log("Error al desencriptar. Campos vacíos.");
        var falla = document.getElementById("fail");
        desencriptado.style.backgroundColor = "red";
        falla.show();
        setTimeout(function () {
            falla.close();
            // remuevo la propiedad añadida (porque es css en línea y se interpone con mis estilos)
            desencriptado.style.backgroundColor = "#D8DFE8";
        }, 2000);
    }
}

////////////COPIAR////////////
//copia el texto introducido originalmente
botonCopiar.onclick = copiar;
function copiar(evento) {
    if (textoIntroducido.value != "") {
        console.log("Copiado: " + textoIntroducido.value);
        textoIntroducido.select();
        document.execCommand("copy");
        botonCopiar.style.backgroundColor = "green";
        botonCopiar.innerHTML = `<a><i
        class="fas fa-check-circle" id="icono-copiar"></i></a> Copiado!`;
        //función de espera para que se note que el texto se copió
        setTimeout(function () {
            // remuevo la propiedad añadida (porque es css en línea y se interpone con mis estilos)
            botonCopiar.style.removeProperty("background-color");
            //restablezco el valor del botón
            botonCopiar.innerHTML = `<a><i
            class="fas fa-copy" id="icono-copiar"></i></a> Copiar`;
        }, 1000);
    } else {
        botonCopiar.style.backgroundColor = "red";
        botonCopiar.style.color = "white";
        botonCopiar.innerHTML = `<a><i
        class="fas fa-times" id="icono-copiar"></i></a> Error!`;
        //función de espera para que se note que el texto NO se copió y ocurrió un error
        setTimeout(function () {
            // remuevo las propiedades añadidas (porque es css en línea y se interpone con mis estilos)
            botonCopiar.style.removeProperty("background-color");
            botonCopiar.style.removeProperty("color");
            //restablezco el valor del botón
            botonCopiar.innerHTML = `<a><i
            class="fas fa-copy" id="icono-copiar"></i></a> Copiar`;
        }, 1000);
    }
}

//copia el texto encriptado
//función onclick directamente en el botón
function copiarClick() {
    //obtengo el boton de copiado del área de resultado
    var botonCopiar2 = document.getElementById("copy2");

    var textArea2 = document.querySelector("#areaTexto2");
    textArea2.removeAttribute("disabled");//habilito el textarea para poder copiarlo
    textArea2.select();
    document.execCommand("copy");
    botonCopiar2.style.backgroundColor = "green";
    botonCopiar2.innerHTML = `<i class="fas fa-check-circle"></i> Copiado!`;
    //función de espera para que se note que el texto se copió
    setTimeout(function () {
        // remuevo la propiedad añadida (porque es css en línea y se interpone con mis estilos)
        botonCopiar2.style.removeProperty("background-color");
        botonCopiar2.innerHTML = `<i class="fas fa-copy"></i> Copiar`;
    }, 1000);
    textArea2.setAttribute("disabled", "disabled");//lo vuelvo a deshabilitar para que no pueda ser modificado por el usuario
}

////////////BORRAR////////////
//resetea la página (en español)
botonBorrar.onclick = borrar;
function borrar(evento) {
    textoIntroducido.value = "";
    contenedorResultado.innerText = "";
    contenedorResultado.innerHTML = `<div class="contenedor-munieco"><img src="img/muñeco-gif.gif" alt="Figura persona con lupa"></div>
    <div class="contenedor-texto-munieco">
        <p id="texto-p1">Ningún mensaje fue encontrado</p>
        <p id="texto-p2">Ingresa el texto que desees encriptar o desencriptar.</p>
    </div>`;
    console.log("Campos reseteados.");

}
//resetea la página (en portugués)
function borrarClick(evento) {
    textoIntroducido.value = "";
    contenedorResultado.innerText = "";
    contenedorResultado.innerHTML = `<div class="contenedor-munieco"><img src="img/muñeco-gif.gif" alt="Figura persona con lupa"></div>
    <div class="contenedor-texto-munieco">
    <p id="texto-p1">Nenhuma mensagem foi encontrada</p>
    <p id="texto-p2">Digite o texto que você deseja criptografar ou descriptografar.</p>
    </div>`;
}


///////////EXTRAS/////////////
//bandera de españa
var banderaEspania = document.querySelector("#spain");

//bandera de brasil
var banderaBrasil = document.querySelector("#brasil");


//activo el botón de español ya que la página está así por defecto
banderaEspania.style.filter = "drop-shadow(0px 0px 10px black)";

//Función para cambiar el idioma
function cambiarEspaniol() {
    banderaEspania.style.filter = "drop-shadow(0px 0px 10px black)";
    banderaBrasil.style.removeProperty("filter");
    location.reload();
}

function cambiarPortugues() {
    banderaBrasil.style.filter = "drop-shadow(0px 0px 10px black)";
    banderaEspania.style.removeProperty("filter");

    //cambiando el placeholder
    var area1 = document.getElementById("areaTexto");
    area1.placeholder = "Digite o texto para criptografar";

    //aclaración
    var advert = document.getElementById("cont-advert");
    advert.innerText = "";
    advert.innerHTML = `<p class="texto-advertencia"><i id="exclamacion" class="fa fa-exclamation-circle"
    aria-hidden="true"></i> Apenas letras minúsculas e sem acentos</p>`;

    //texto botones
    //encriptado
    var encript = document.getElementById("encriptar");
    encript.innerText = "";
    encript.innerHTML = `<p class="texto-boton-encriptado">Criptografar</p>`;
    //desencriptado
    var desencript = document.getElementById("desencriptar");
    desencript.innerText = "";
    desencript.innerHTML = `<p class="texto-boton-desencriptado">Descriptografar</p>`;

    //texto pie imagen
    var textoMunieco = document.getElementById("cont-texto-munieco");
    textoMunieco.innerText = "";
    textoMunieco.innerHTML = `<p id="texto-p1">Nenhuma mensagem foi encontrada</p>
    <p id="texto-p2">Digite o texto que você deseja criptografar ou descriptografar.</p>`;

    //boton borrado cambia a su función para portugués
    var botonQueBorra = document.getElementById("reset");//obtengo el botón
    //le cambio el id
    botonQueBorra.id = "reset2";
    //al clickear llama a la función borrado para la versión en portugués
    botonQueBorra.onclick = borrarClick;

    //traduzco el footer
    var footer = document.getElementById("footer");
    footer.innerHTML = `<p id="creditos">&copy Ícones da Espanha e do Brasil criados por Freepik - <a href="https://www.flaticon.com/" target="_blank" rel="nofollow noreferrer noopener"><em>Flaticon</em></a></p>`;

    //traduzco las reglas
    var reglas = document.getElementById("rules-dialog");
    reglas.innerHTML = `    <div class="contenedor-close-info"><i onclick="closeWindow()" class="fas fa-window-close" id="close-reglas"></i></div>
    <div class="cont-text-dialog-rules">
        <h2>As "chaves" de criptografia que usaremos são as seguintes:</h2><br>
        <ul class="lista">
            <li>A letra "e" é convertida em "enter"</li>
            <li>A letra "i" é convertida em "imes"</li>
            <li>A letra "a" é convertida em "ai"</li>
            <li>A letra "o" é convertida em "ober"</li>
            <li>A letra "u" é convertida em "ufat"</li>
        </ul>
    </div>`;

    //traduzco el acerca de
    var acercaDe = document.getElementById("info-dialog");
    acercaDe.innerHTML = `<div class="contenedor-close-info"><i onclick="closeWindow()" class="fas fa-window-close" id="close-info"></i></div>
    <div class="cont-text-dialog-info"><p class="t-dialog-info">Olá! Meu nome é Daniel De Blassis e criei este aplicativo que corresponde ao desafio nº 1 do programa Alura ONE.</p><br>
    <p class="t-dialog-info"><a href="https://github.com/DanielDeBlassis" target="_blank"
            rel="nofollow noreferrer noopener">Aqui</a> você pode encontrar o repositório do projeto.
    </p></div>`;


    //traduzco el mensaje de error al encriptar y desencriptar
    var failMessage = document.getElementById("fail");
    failMessage.innerHTML = `<i class="fas fa-exclamation-triangle"></i><span id="fail-text">&nbsp; Digite o texto</span>`;

}


//Abre la ventana de Reglas
//defino la variable
var ventana;
var contDialogo;
var contDialogInfo = document.getElementById('contenedor-dialogo-info');
var contDialogRules = document.getElementById('contenedor-dialogo-rules');

//Abre la ventana de Reglas
function showRules() {
    ventana = document.getElementById("rules-dialog");
    contDialogo = document.getElementById('contenedor-dialogo-rules');
    contDialogo.style.removeProperty("display");
    contDialogo.style.display = "block";
    ventana.show();
}

//Abre la ventana de información
function showInfo() {
    ventana = document.getElementById("info-dialog");
    contDialogo = document.getElementById('contenedor-dialogo-info');
    contDialogo.style.removeProperty("display");
    contDialogo.style.display = "block";
    ventana.show();
}

//Cierra la ventana que se encuentre abierta
function closeWindow() {
    contDialogo.style.removeProperty("display");
    contDialogo.style.display = "none";
    ventana.close();
}