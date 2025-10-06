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

function guardados() {
    $("cartas").innerHTML = "";
    let cartasGuardadas = JSON.parse(localStorage.getItem("cartasGuardadas") || "[]");
    console.log(cartasGuardadas);
    for (let index = 0; index < cartasGuardadas.length; index++) {
        let carta = Carta.createFromJsonString(JSON.stringify(cartasGuardadas[index]));
        let htmlCarta = carta.createHtmlElement(carta);
        $("cartas").appendChild(htmlCarta);
    }
}

$("siguiente").addEventListener("click",paginaSiguiente);
$("anterior").addEventListener("click",paginaAnterior)
$("lnkGuardados").addEventListener("click", function(event){
    event.preventDefault(); // Evita que el link recargue la página
    guardados();            // Llama a tu función de mostrar cartas guardadas
});