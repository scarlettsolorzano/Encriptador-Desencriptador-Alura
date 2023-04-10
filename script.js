// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
var txtcifrado;
var area = document.getElementById("box");


function btnEncriptar(){ 
    txtcifrado = document.getElementById("lado_encriptador_mensaje").value; 
    //i ejecute tanto minusculas como mayusculas
    //g es para toda linea u oracion
    //m afecta multiples lineas o parrafos
    
    txtcifrado = txtcifrado.replaceAll("e", "enter"); //para que sea global
    txtcifrado = txtcifrado.replaceAll("i", "imes"); 
    txtcifrado = txtcifrado.replaceAll("a", "ai");
    txtcifrado = txtcifrado.replaceAll("o", "ober");
    txtcifrado = txtcifrado.replaceAll("u", "ufat");
    
    insertar(txtcifrado); //llama a la funcion insertar

}

function btnDesencriptar(){ 
    txtcifrado = document.getElementById("lado_encriptador_mensaje").value;
    //i ejecute tanto minusculas como mayusculas
    //g es para toda linea u oracion
    //m afecta multiples lineas o parrafos
    txtcifrado = txtcifrado.replaceAll("enter", "e"); //para que sea global
    txtcifrado = txtcifrado.replaceAll("imes", "i"); 
    txtcifrado = txtcifrado.replaceAll("ai", "a");
    txtcifrado = txtcifrado.replaceAll("ober", "o");
    txtcifrado = txtcifrado.replaceAll("ufat", "u");

    insertar(txtcifrado);
}

function insertar(txt){ //funcion para insertar el texto en el textarea o poner la imagen si no hay texto
    if(txt == null || txt == ""){
        area.innerHTML = "<textarea id='lado_desencriptador_img' cols='50' rows='20'>No se ha encontrado texto</textarea> <br>";
    } else{
        
        area.innerHTML = "<textarea id='lado_desencriptador_mensaje' cols='50' rows='20'></textarea> <br>"
                    + "<div>"
                    + "<button class='btn_copiarMsj' id='copiar' onclick='copiarMensaje()'>Copiar</button>"
                    + "</div>";

        document.getElementById("lado_desencriptador_mensaje").innerHTML = txt;
        document.getElementById("lado_encriptador_mensaje").value = "";
    }
}

function copiarMensaje(){ //funcion para copiar el texto del textarea al portapapeles
    var copyTexto = document.getElementById("lado_desencriptador_mensaje").value; //selecciona el textarea
    navigator.clipboard.writeText(copyTexto); //escribe el texto en el portapapeles
    alert("Texto copiado al portapapeles: " + copyTexto); //muestra un mensaje de que se copio el texto
}
