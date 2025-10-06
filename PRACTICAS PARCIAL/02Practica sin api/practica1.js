let personas ='[{"id":1, "nombre":"Marcelo", "apellido":"Luque", "edad":45, "titulo":"Ingeniero", "facultad":"UTN", "añoGraduacion":2002},{"id":2, "nombre":"Ramiro", "apellido":"Escobar", "edad":35, "titulo":"Medico", "facultad":"UBA", "añoGraduacion":20012},{"id":3, "nombre":"Facundo", "apellido":"Cairo", "edad":30, "titulo":"Abogado", "facultad":"UCA", "añoGraduacion":2017},{"id":4, "nombre":"Fernando", "apellido":"Nieto", "edad":18, "equipo":"Independiente", "posicion":"Delantero", "cantidadGoles":7},{"id":5, "nombre":"Manuel", "apellido":"Loza", "edad":20, "equipo":"Racing", "posicion":"Volante", "cantidadGoles":2},{"id":6, "nombre":"Nicolas", "apellido":"Serrano", "edad":23, "equipo":"Boca", "posicion":"Arquero", "cantidadGoles":0}]'

function $(id){
    return document.getElementById(id);
}

class Persona{
    constructor(id,nombre,apellido,edad){
        this.id= id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }

    toString(){
        return "ID: " +this.id+",Nombre: "+this.nombre+", Apellido: "+this.apellido+", Edad: "+this.edad.toString ;
    }

}

class Futbolista extends Persona{
    constructor(id,nombre,apellido,edad,equipo,posicion,cantGoles){
        super(id,nombre,apellido,edad);
        this.equipo=equipo;
        this.posicion=posicion;
        this.cantGoles=cantGoles;
    }
    toString(){
        return super.toString() +"Equipo: " + this.equipo +" ,Posicion : "+this.posicion+", Cantidad de goles: "+this.cantGoles;
    }
}

class Profesional extends Persona{
    constructor(id,nombre,apellido,edad,titulo,facultad,anioGraduacion) {
        super(id,nombre,apellido,edad);
        this.titulo=titulo;
        this.facultad=facultad;
        this.anioGraduacion=anioGraduacion;
    }
    toString(){
        return super.toString() +" , Titulo: " + this.titulo +" ,Facultad : "+this.facultad+", Año Graduacion : "+this.anioGraduacion;
    }
}

let listaPersonas = JSON.parse(personas);
let listaFutbolistas =[];
let listaProfesionales=[]

function crearListas(){
    listaPersonas.forEach(element => {
        if(element.titulo){
            element = new Profesional(element.id,element.nombre,element.apellido,element.edad,element.titulo,element.facultad,element.añoGraduacion);
            listaProfesionales.push(element);
        }else if(element.equipo){
            element = new Futbolista(element.id,element.nombre, element.apellido,element.edad,element.equipo,element.posicion,element.cantidadGoles);
            listaFutbolistas.push(element)
        }
    });
}

crearListas();
function ActualizarTabla(){
    
}
