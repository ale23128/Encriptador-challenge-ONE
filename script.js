
// Funcion para permitir solo letras minusculas //
function validarMinusculas(textarea) {
    textarea.value = textarea.value.toLowerCase().replace(/[^a-z\s]/g, '');
}

// ENCRIPTAR Y DESENCRIPTAR //

function procesarTexto(operacion) {

    // Tomar los valores del textArea Original // 
    var textoAModificar = document.getElementById("texto-a-modificar").value;
    
    // Definir y cambiar el texto original a un texto modificado //
    var textoModificado = "";
    
    if (operacion === "encriptar") {
        textoModificado = textoAModificar.replaceAll("e", "enter")
        textoModificado = textoModificado.replaceAll("i", "imes")
        textoModificado = textoModificado.replaceAll("a", "ai")
        textoModificado = textoModificado.replaceAll("o", "ober")
        textoModificado = textoModificado.replaceAll("u", "ufat")
      
    } else if (operacion === "desencriptar") {
        textoModificado = textoAModificar.replaceAll("enter", "e")
        textoModificado = textoModificado.replaceAll("imes", "i")
        textoModificado = textoModificado.replaceAll("ai", "a")
        textoModificado = textoModificado.replaceAll("ober", "o")
        textoModificado = textoModificado.replaceAll("ufat", "u")
    }
    
    // Ocultar mensaje-estatico //
    document.querySelector(".mensaje-estatico").style.display = "none";
    
    // Mostrar TextArea de la zona modificada //
    document.querySelector(".area-modificado").style.display = "block";
    
    // Acomodar botón COPIAR al estilo original //
    document.getElementById("boton-copiar").style = "";
    document.getElementById("boton-copiar").value = "Copiar";
    
    // Pegar en AreaModificado el texto Encriptado o Desencriptado //
    var areaModificado = document.getElementById("texto-modificado");
    areaModificado.value = textoModificado;
}
  
// Asignar funciones a los botones correspondientes //
  
var botonEncriptar = document.getElementById("boton-encriptar");
botonEncriptar.onclick = function() {
    procesarTexto("encriptar");
}
  
var botonDesencriptar = document.getElementById("boton-desencriptar");
botonDesencriptar.onclick = function() {
    procesarTexto("desencriptar");
}


// BOTON COPIAR DEL MODIFICADO //

var botonCopiar = document.getElementById("boton-copiar");
  
function copiarTexto() {
    var textoACopiar = document.getElementById("texto-modificado");
        
    textoACopiar.select();
    navigator.clipboard.writeText(textoACopiar.value);
        
    // cambios de estilos boton copiar //
    botonCopiar.value = "Copiado";
    botonCopiar.style.color = "#34788c";
    botonCopiar.style.background = "#FFFFFF";
    botonCopiar.style.border = "4px solid #34788c";
    botonCopiar.style.pointerEvents = "none";

    // cursor focus en area original y limpiarla //
    document.getElementById("texto-a-modificar").focus();
    document.getElementById("texto-a-modificar").value = "";
   
}

// definir funcion al boton COPIAR //         
var botonCopiar = document.getElementById("boton-copiar");
botonCopiar.onclick = copiarTexto;