let respuesta = '[{"nombre":"Horacio","apellido":"dfd","dni":23456 },{"nombre":"Hio","apellido":"dfd","dni":2444456 },{"nombre":"maria","apellido":"dfd","dni":23456 }]';

// JSON.parse(j);
// JSON.stringify;
// tip para agregar rapido 
function $(id){
    return document.getElementById(id);
}



let boton = document.getElementById("btncargar");

boton.addEventListener("click",ActualizarTabla);
// va sin parentesis porque en js cuando declaras una funcoin crea refa 
//objeto funcion je y addeventlistener pide el objeto no ejecutarla 

function ActualizarTabla(){
    let tbody = $("files");
    tbody.innerHTML="";// aca le borro todo
    let personas = JSON.parse(respuesta);
    // let filas="";
    // personas.forEach(e => {
    //     filas=filas+`<tr><td>${e.nombre}</td><td>${e.apellido}</td><td>${e.dni}</td><button>borrar</button></tr>`
    // });
    // tbody.innerHTML=filas;
    // personas.forEach(e=>{
    //     let boton = $(`borrar_${e.dni}`)
    // }) esto es una verga

    personas.forEach(p => {
        let fila=document.createElement("tr");
        let celda= document.createElement("td");
        celda.appendChild(document.createTextNode(p.nombre));
        fila.appendChild(celda);
        celda= document.createElement("td");
        celda.appendChild(document.createTextNode(p.apellido));
        fila.appendChild(celda);
        celda= document.createElement("td");
        celda.appendChild(document.createTextNode(p.dni.toString()));
        fila.appendChild(celda);
        // ver ckase porque hizo algo raro 

        // con los objetos en js podemos modificalos 
        celda= document.createElement("td");
        let boton = document.createElement("button");
        boton.persona=p
        boton.appendChild(document.createTextNode("borrar"));
        boton.addEventListener("click",
            (e)=>{
                        let personita = e.target.persona;
                        //servidor borra el nombre
                        personita.nombre="";
                        ActualizarTabla2();
                    })
        celda.appendChild(boton);
        fila.appendChild(celda);
        tbody.appendChild(fila);
    });
};


// base de datos 
//cdn content delivery network 
