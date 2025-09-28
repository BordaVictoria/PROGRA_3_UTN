import Carta from "./carta.js";

function $(id){
    return document.getElementById(id);
}

function paginaAnterior(){
    
    $("cartas").innerHTML=" "
    for (let index = 1; index < 7; index++) {
        let urlApi ="https://examenesutn.vercel.app/api/cartas/"+index
        fetch(urlApi)
        .then((response) => response.json())
        .then((data) => {
            let jsonStr = JSON.stringify(data);
            let carta = Carta.createFromJsonString(jsonStr);
            let htmlCarta = carta.createHtmlElement(carta);
            $("cartas").appendChild(htmlCarta);
        })
        .catch((error) => console.error(error));
    }
    
}
paginaAnterior();
function paginaSiguiente(){
    $("cartas").innerHTML=" "
    for (let index = 7 ; index < 14; index++) {
    let urlApi ="https://examenesutn.vercel.app/api/cartas/"+index
    fetch(urlApi)
    .then((response) => response.json())
    .then((data) => {
        let jsonStr = JSON.stringify(data);
        let carta = Carta.createFromJsonString(jsonStr);
        let htmlCarta = carta.createHtmlElement(carta);
        $("cartas").appendChild(htmlCarta);
    })
    .catch((error) => console.error(error));
}
}


$("siguiente").addEventListener("click",paginaSiguiente);
$("anterior").addEventListener("click",paginaAnterior)