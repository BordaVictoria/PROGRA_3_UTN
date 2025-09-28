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
        titulo.textContent=carta.nombre; 
        let precio = document.createElement("div");
        precio.textContent = carta.precio;
        let link = document.createElement("a");
        link.href=carta.urlScryFall;
        link.appendChild(img)
        let boton = document.createElement("button")
        boton.id="guardar"
        boton.innerText= "Guardar";
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

    static guardarCarta(carta){
        console.log("ea");
        let cartaAguardar= JSON.stringify(carta);
        let cartasGuardadas = JSON.parse(localStorage.getItem('cartasSeleccionadas') || '[]');
        cartasGuardadas.push(cartaAguardar)
        const myJSON = JSON.stringify(myObj);
        localStorage.setItem("testJSON", myJSON);
        console.log(cartasGuardadas)
    }
}