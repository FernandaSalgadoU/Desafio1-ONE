/*=0*/
let palabra_Usuario = "";
let palabra_Encriptada="";
let palabra_Desencriptada="";

function condicion_Inicial(){
    palabra_Usuario=document.getElementById('main_entrada_texto').value;
    palabra_Usuario = palabra_Usuario.toLowerCase();
    palabra_Usuario=quitar_Tildes(palabra_Usuario);
}

function boton_Encriptar(){
    condicion_Inicial();
    palabra_Encriptada=encriptar_Texto(palabra_Usuario);

    if(palabra_Usuario.trim()===""){
        return;
    }
    document.getElementById('main_salida_texto').value=palabra_Encriptada;
    document.getElementById('main_salida').style.display='flex';
    document.getElementById('main_salida_sin_texto').style.display='none';
    document.getElementById('main_salida_copia').style.display='none';
}

function boton_Desencriptar(){
    condicion_Inicial();
    palabra_Desencriptada=desencriptar_Texto(palabra_Usuario);
    
    if(palabra_Usuario.trim()===""){
        return;
    }

    document.getElementById('main_salida_texto').value=palabra_Desencriptada;
    document.getElementById('main_salida').style.display='flex';
    document.getElementById('main_salida_sin_texto').style.display='none';
    document.getElementById('main_salida_copia').style.display='none';
}


function boton_Copiar(){
    palabra_Copiada=document.getElementById('main_salida_texto').value;

    if(palabra_Copiada.trim()===""){
        return;
    }

    document.getElementById('main_entrada_texto').value=palabra_Copiada;
    document.getElementById('main_salida_texto').value="";
    document.getElementById('main_salida').style.display='none';
    document.getElementById('main_salida_sin_texto').style.display='none';
    document.getElementById('main_salida_copia').style.display='flex';
}

function boton_Resetear(){
    document.getElementById('main_entrada_texto').value="";
    document.getElementById('main_salida_texto').value="";
    document.getElementById('main_salida').style.display='none';
    document.getElementById('main_salida_sin_texto').style.display='flex';
    document.getElementById('main_salida_copia').style.display='none';
}


function quitar_Tildes(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
}

function encriptar_Texto(texto){
    texto= texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    return texto;    
}

function desencriptar_Texto(texto){
    texto = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    return texto;
}