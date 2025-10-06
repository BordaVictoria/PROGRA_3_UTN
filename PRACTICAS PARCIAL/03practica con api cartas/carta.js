export default class Carta{
    constructor(id,urlScryFall,nombre,urlImagen,precio){
        this.id=id;
        this.urlScryFall=urlScryFall;
        this.nombre=nombre;
        this.urlImagen=urlImagen;
        this.precio=precio;
    }

    toJsonString() {
        return JSON.stringify({
            id: this.id,
            urlScryFall: this.urlScryFall,
            nombre: this.nombre,
            urlImagen: this.urlImagen,
            precio: this.precio
        });
    }

    static createFromJsonString(Json){
        const obj = JSON.parse(Json);
        let elemento = new Carta(obj.id,obj.urlScryFall,obj.nombre,obj.urlImagen,obj.precio);
        return elemento;
    }

    createHtmlElement(carta){
        let container = document.createElement("div");
        let img = document.createElement("img");
        img.src=carta.urlImagen;
        let titulo = document.createElement("div");
        titulo.appendChild(document.createTextNode(carta.nombre));
        let precio = document.createElement("div");
        precio.appendChild(document.createTextNode(carta.precio));
        let link = document.createElement("a");
        link.href=carta.urlScryFall;
        link.appendChild(img)
        let boton = document.createElement("button")
        boton.id="guardar"
        boton.appendChild(document.createTextNode("Guardar"));
        boton.addEventListener("click",()=>{
            Carta.guardarCarta(carta)
        });
        container.appendChild(link);
        container.appendChild(titulo);
        container.appendChild(precio);
        container.appendChild(boton);
        container.id="cartaInd"

        return container;
    }

    static guardarCarta(carta) {
    let cartasGuardadas = JSON.parse(localStorage.getItem("cartasGuardadas") || "[]");
    if(cartasGuardadas.some(c => c.id === carta.id)){
        console.log("no se puede guardar ya esta ahi ")
    }else{
        
        cartasGuardadas.push(carta);
    }
    localStorage.setItem("cartasGuardadas", JSON.stringify(cartasGuardadas));
    }
}