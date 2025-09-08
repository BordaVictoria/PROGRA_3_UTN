const animal = {
    raza:"canino",
    edad:1,
    nombre:"wachi"
};

class Persona{
    constructor(nombre,edad,dni){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
    }
    saludar(){
        console.log("hola soy " + this.nombre)
    }
}

class Estudiante extends Persona{
    #materiasAprobadas = 11;
    // con el # metes las privadas 
    constructor(nombre,edad,dni,carrera,universidad){
        super(nombre,edad,dni);
        this.carrera = carrera;
        this.universidad = universidad;
        this.#materiasAprobadas = 11;
    }
    saludar(){
        console.log(`hola soy ${this.nombre}`);
    }
    materiasAprobadas(){
        console.log(`tengo en total ${this.#materiasAprobadas}`);
    }
}


const persona1 = new Persona("juan",34,3453453);
const persona2 = new Persona("carlos","34 años ","3453453");

console.log(persona1);
console.log(persona2);
console.log(animal);

persona1.saludar();

const estudiante = new Estudiante("vic","22","4443344","idfdf","utn");

console.log(estudiante);
estudiante.saludar();
estudiante.materiasAprobadas();