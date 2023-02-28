// La barra de Navegacion esta hecha con Bootstrap como dijo el profe Daniel Rinaldi que podiamos usar ese Framework

// Enfocar campos

function enfocar(x) {
    x.style.background = "aqua";
}

// Funciones sobre las imagenes
function bigImg(x) {
    x.style.height = "240px";
    x.style.width = "410px";
}
  
function normalImg(x) {
    x.style.height = "200px";
    x.style.width = "100%";
}

// Mostrar y ocultar seccion: Sobre Mi

document.getElementById("ocultar").addEventListener("click",function(){
    document.getElementById("sobreMi").style.display="none";
});

document.getElementById("mostrar").addEventListener("click",function(){
    document.getElementById("sobreMi").style.display="block";
});


// validacion de formulario
function validarFormulario(){
    var nombre,correo,contraseña;
    nombre=document.getElementById("nombre").value;
    correo=document.getElementById("Email").value;
    contraseña=document.getElementById("Password").value;
    expresion_correo=/\w+@\w+\.+[a-z]/;
    expresion_contraseña=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/
    lista_vacia1=[];
    lista_vacia2=[];

    if(nombre===""||correo===""||contraseña===""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(nombre.length>10){
        alert("Nombre muy largo");
        return false;
    }
    else if(!expresion_correo.test(correo)){
        lista_vacia.push("El correo debe contener @ y un dominio. Ejemplo: hola@mail.com");
        aviso2.innerHTML=lista_vacia;
        return false;
    }
    else if(contraseña.length<6 && !expresion_contraseña.test(contraseña)){
        lista_vacia2.push("La contraseña debe contener entre 6 y 8 caracteres, incluyendo numeros y letras");
        aviso3.innerHTML=lista_vacia2;
        return false;
    }
}

