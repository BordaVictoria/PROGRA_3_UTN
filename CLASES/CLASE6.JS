console.log("hilos");


// const saludar=() =>{
//     console.log("loooool");   
// };

// const titulo = document.getElementById("titulo");

// titulo.addEventListener("click", saludar);

// titulo.addEventListener("click", (event) =>{
//     console.log("loooool"); 
//     console.log({event}) ;
// });

// const input = document.getElementById("input");

// input.addEventListener("change",(event)=>{
// console.log({event});
// console.log(event.target.value);
// console.log("escribindo perra");
// });
// // supuestamente esta es la mas optima


// const formulario = document.getElementById("formulario");

// formulario.addEventListener("submit", (e)=> {
//     e.preventDefault();
//     console.log("ahre");
// })

const inputNombre = document.getElementById("name");
const password = document.getElementById("pass");
const formulario = document.getElementById("register");
const errorNombre = document.getElementById("errornombre");// agarro el nodo de error

errorNombre.classList.add("oculto")
formulario.addEventListener("submit", (e)=>{
    e.preventDefault;
    const nombre = inputNombre.value;
    const contra = password.value;
    errorNombre.classList.add("oculto")


})

// para llevar un dato al valor booleano metemos un !
let dato = 11 ;//true
dato = 0 ; // false

//. add .remove . togglet ese te o switchea
if(!inputNombre){
    errorNombre.classList.remove("oculto");
}

// listas

// forEach recorre  yejectuta lo que em pinte
// el .map me devuelve la lista- +lo q quiera

// el find me devuelve algp que le pedi 
//wej   var = array.find(ele=>ele.includes(terce))
// el filtrer tambien pero e narray
//include develve un bool 
// 


