import {Persona} from "./clases.js";
import {Futbolista} from "./clases.js";
import {Profesional} from "./clases.js";

const API_URL = "https://examenesutn.vercel.app/api/PersonasFutbolistasProfesionales";

let respuesta = [];
let jugadores =[];
let profesionanles= [];
function $(id){
    return document.getElementById(id);
}

function mostrar(id,valor){
    if(valor){
        $(id).classList.remove("hidden");
    }else{
        $(id).classList.add("hidden");
        }
}
// function ActualizarTabla(){
//     fetch(API_URL)
//     .then((response)=>response.json())
//     .then((data)=>{
//         data.forEach(element => {
//                 if(element.equipo){
//                     let jugador = Futbolista.createObjfromJson(element);
//                     jugadores.push(jugador);
//                     let fila = jugador.createHTML();
//                     $("tblBody").appendChild(fila);
//                 }else if (element.titulo){
//                     let prof = Profesional.createObjfromJson(element);
//                     profesionanles.push(prof);
//                     let fila = prof.createHTML();
//                     $("tblBody").appendChild(fila);
                    
//                 }
//             });
//         })
//         .catch((error)=>console.error(error));
//     }
    

function getInicialk(event){
    let httpx = new XMLHttpRequest();
    httpx.onreadystatechange = function(){
        if(httpx.readyState == 4 && httpx.status==200){
            respuesta = JSON.parse(httpx.responseText);
            console.log(respuesta);
            respuesta.forEach(element => {
            if(element.equipo){
                let jugador = Futbolista.createObjfromJson(element);
                jugadores.push(jugador);
                let fila = jugador.createHTML();
                $("tblBody").appendChild(fila);
            }else if (element.titulo){
                let prof = Profesional.createObjfromJson(element);
                profesionanles.push(prof);
                let fila = prof.createHTML();
                $("tblBody").appendChild(fila);
                
            }})            
        }
    }
    httpx.open("GET",API_URL);
    httpx.send();
}

getInicialk();

$("btnAgregar").addEventListener("click",(e)=>{  
    $("id").readOnly=true;
    mostrar("divABM",true);
    $("tipo").addEventListener("change",modificarInputs)
})


$("btnAMBCancelar").addEventListener("click",(e)=>{
    mostrar("divABM",false);
})

$("btnAMBAceptar").addEventListener("click",(e)=>{
let personaNueva = agregarPersona();
respuesta.push(personaNueva);
console.log(respuesta);
mostrar("divABM",false);
})

document.addEventListener("click", (e) => {
if (e.target.classList.contains("btnEliminar")) {
    const personita = e.target.persona;
    console.log("Eliminando:", personita);
    eliminar(personita.id);
}
});
function modificarInputs(){
    if($("tipo").value == "jugadorSelec" ){
        mostrar("lblEquipo",true);
        mostrar("lblPosicion",true);
        mostrar("lblCantGoles",true);
        mostrar("lblTitulo",false);
        mostrar("lblUni",false);
        mostrar("lblAniograd",false);
    }else if($("tipo").value == "profesionalSelec"){
        mostrar("lblTitulo",true);
        mostrar("lblUni",true);
        mostrar("lblAniograd",true);
        mostrar("lblEquipo",false);
        mostrar("lblPosicion",false);
        mostrar("lblCantGoles",false);
    }
}

function agregarPersona(){
    let personaNueva = null;
    let id = respuesta.length+1;
    let nombre = $("txtnombre").value;
    let apellido =$("txtApellido").value;
    let edad = parseInt($("txtEdad").value);    
    if($("tipo").value == "jugadorSelec" ){
        let equipo =$("txtEquipo").value;
        let pos =$("txtPosicion").value;
        let cantidadGoles =parseInt($("txtCantGoles").value);
        personaNueva = new Futbolista(id,nombre,apellido,edad,equipo,pos,cantidadGoles);
    }else if($("tipo").value == "profesionalSelec"){
        let titulo = $("txtTitulo").value;
        let facultad = $("txtUniversidad").value;
        let anioGraduacion = parseInt($("txtAnioGrad").value);
        personaNueva = new Profesional(id, nombre, apellido, edad, titulo, facultad, anioGraduacion);
    }
    
    return personaNueva;
}

function agregarAlServ(){

}

function eliminar(personaID){
    let httpx = new XMLHttpRequest();
    httpx.onreadystatechange = function(){
        if(httpx.readyState == 4 && httpx.status==200){
            console.log("SEEEEE")
        }
    }
    httpx.open("DELETE",API_URL);
    httpx.setRequestHeader('Content-type','application/json');
    httpx.send(JSON.stringify({id:personaID}));
}