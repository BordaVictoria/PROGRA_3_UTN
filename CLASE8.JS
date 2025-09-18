

// var xhttp = new XMLHttpRequest(); //Instancio el objeto
// xhttp.onreadystatechange = function() {
//     if (xhttp.readyState == 4 && xhttp.status == 200) {
//        //Acción a ejecutar cuando el estado es 200 ok y el readyState=4 (respuesta lista)
// xhttp.response
// 	}
// }; //Configúro manejador para cambio de estado
// xhttp.open("GET", "url recurso", true, "usuario", "pass"); //Inicializo la solicitud
// xhttp.setRequestHeader("encabezado", "valor");
// xhttp.send(); //Envio la solicitud


function    $(id){return document.getElementById(id)}

var url = "https://examenesutn.vercel.app/api/PersonasFutbolistasProfesionales"





function getInicialk(event){
    event.preventDefault
    let httpx = new XMLHttpRequest();
    httpx.onreadystatechange = function(){
        if(httpx.readyState == 4 && httpx.status==200){
            let respuesta = JSON.parse(httpx.responseText);
            console.log(respuesta);
        }
    }
    httpx.open("GET",url);
    httpx.send();
}


function funDelete(){
    let id = 1;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState==4 ){
            if(xhttp.status==200){
                console.log("eliminado correctamente"+xhttp.responseText)
            }
            if(xhttp.status ==500){
                console.log("no pibe");
            }

        }
    }
    xhttp.open("DELETE",url);   
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify({id:id}));
}



$("btnSubmit").addEventListener("submit");


function buscarCarta(event){
    event.preventDefault
    let url = "";
    let carta= $("txtCarta").ariaValueMax;
    let httpx = new XMLHttpRequest();
    httpx.onreadystatechange = function(){
        if(httpx.readyState == 4 && httpx.status==200){
            let respuesta = JSON.parse(httpx.responseText);
            let jpgSmall = respuesta.image_uris.small;
            let img = $("imagen");
            img.setAttribute("src",jpgSmall);

        }
    }
    httpx.open("GET",url+carta);
    httpx.send();
}

