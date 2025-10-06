export class Persona{
    constructor(id,nombre,apellido,edad){
        this.id =id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad =edad;
    }

    toString(){
        return "Nombre :" +this.nombre +
                " Apellido :" +this.apellido +
                " Edad :" +this.edad.toString ;
    }
}

export class Futbolista extends Persona{
    constructor(id,nombre,apellido,edad,equipo,pos,cantidadGoles){
        super(id,nombre,apellido,edad);
        this.equipo=equipo;
        this.pos = pos
        this.cantidadGoles = cantidadGoles;
    }

    toString(){
        return super.toString()+" Equipo : "+this.equipo +
                                " Posicion : "+this.pos +
                                " Cantidad de Goles : "+this.cantidadGoles;
    }

    static createObjfromJson(jsonobj){
        let jugador = new Futbolista(
            jsonobj.id,
            jsonobj.nombre,
            jsonobj.apellido,
            jsonobj.edad,
            jsonobj.equipo,
            jsonobj.posicion,
            jsonobj.cantidadGoles
        )
        return jugador;
    }
    createHTML(){
        let fila=document.createElement("tr");
        let celda= document.createElement("td");
        celda.appendChild(document.createTextNode(this.id));
        fila.appendChild(celda);
        celda= document.createElement("td");
        celda.appendChild(document.createTextNode(this.nombre));
        fila.appendChild(celda);
        celda= document.createElement("td");
        celda.appendChild(document.createTextNode(this.apellido));
        fila.appendChild(celda);
        celda= document.createElement("td");
        celda.appendChild(document.createTextNode(this.edad.toString()));
        fila.appendChild(celda);
        celda= document.createElement("td");
        celda.appendChild(document.createTextNode(this.equipo));
        fila.appendChild(celda);
        celda= document.createElement("td");
        celda.appendChild(document.createTextNode(this.pos));
        fila.appendChild(celda);
        celda= document.createElement("td");
        celda.appendChild(document.createTextNode(this.cantidadGoles.toString()));
        fila.appendChild(celda);
        celda= document.createElement("td");
        celda.appendChild(document.createTextNode("N/A"));
        fila.appendChild(celda);
        celda= document.createElement("td");
        celda.appendChild(document.createTextNode("N/A"));
        fila.appendChild(celda);
        celda= document.createElement("td");
        celda.appendChild(document.createTextNode("N/A"));
        fila.appendChild(celda);
        celda= document.createElement("td");
        let btnModif = document.createElement("button");
        btnModif.persona=this
        btnModif.appendChild(document.createTextNode("Modificar"));
        btnModif.addEventListener("click",
            (e)=>{
                let personita = e.target.persona;
            })
            celda.appendChild(btnModif)
            fila.appendChild(celda);
            
        celda= document.createElement("td");
        let btnEliminar = document.createElement("button");
        btnEliminar.persona=this
        btnEliminar.appendChild(document.createTextNode("Eliminar"));
        btnEliminar.addEventListener("click",
            (e)=>{
                        let personita = e.target.persona;
                        //servidor borra el nombre
                    })
        celda.appendChild(btnEliminar)
        fila.appendChild(celda);
    
        return fila;
            
    }
}
export class Profesional extends Persona{
    constructor(id,nombre,apellido,edad,titulo,facultad,anioGraduacion){
        super(id,nombre,apellido,edad);
        this.titulo= titulo;
        this.facultad = facultad
        this.anioGraduacion = anioGraduacion;
    }

    toString(){
        return super.toString()+" Titulo : "+this,titulo +
                                " Facultad : "+this.facultad +
                                " Año de graduacion : "+this.anioGraduacion;
    }
    createHTML(){
        let fila=document.createElement("tr");
        let celda= document.createElement("td");
        celda.appendChild(document.createTextNode(this.id));
        fila.appendChild(celda);
        celda= document.createElement("td");
        celda.appendChild(document.createTextNode(this.nombre));
        fila.appendChild(celda);
        celda= document.createElement("td");
        celda.appendChild(document.createTextNode(this.apellido));
        fila.appendChild(celda);
        celda= document.createElement("td");
        celda.appendChild(document.createTextNode(this.edad.toString()));
        fila.appendChild(celda);
        celda= document.createElement("td");
        celda.appendChild(document.createTextNode("N/A"));
        fila.appendChild(celda);
        celda= document.createElement("td");
        celda.appendChild(document.createTextNode("N/A"));
        fila.appendChild(celda);
        celda= document.createElement("td");
        celda.appendChild(document.createTextNode("N/A"));
        fila.appendChild(celda);
        celda= document.createElement("td");
        celda.appendChild(document.createTextNode(this.titulo));
        fila.appendChild(celda);
        celda= document.createElement("td");
        celda.appendChild(document.createTextNode(this.facultad));
        fila.appendChild(celda);
        celda= document.createElement("td");
        celda.appendChild(document.createTextNode(this.anioGraduacion.toString()));
        fila.appendChild(celda);
        celda= document.createElement("td");
        let btnModif = document.createElement("button");
        btnModif.persona=this
        btnModif.appendChild(document.createTextNode("Modificar"));
        btnModif.addEventListener("click",
            (e)=>{

            })
        celda.appendChild(btnModif)
        fila.appendChild(celda);
        celda= document.createElement("td");
        let btnEliminar = document.createElement("button");
        btnEliminar.persona=this;
        btnEliminar.appendChild(document.createTextNode("Eliminar"));
        btnEliminar.classList.add("btnEliminar");
        celda.appendChild(btnEliminar)
        fila.appendChild(celda);
                    
        return fila;
            
    }
    
        static createObjfromJson(jsonobj){
            let jugador = new Profesional(
                jsonobj.id,
                jsonobj.nombre,
                jsonobj.apellido,
                jsonobj.edad,
                jsonobj.titulo,
                jsonobj.facultad,
                jsonobj.añoGraduacion
            )
            return jugador;
        }
}