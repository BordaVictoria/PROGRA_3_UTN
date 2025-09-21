//FUNCIONES ASINCRONICAS , 
//JAVA MANDA A OTRO SERVER A QUE SE EJECUTE 
// JAVA SE EJECUTA EN UNA LINEA PERO BUENOOOOOOOO, DE AHI SALE EL ASINCRONISMO , PORQUE SE VA 
//A UN SISTEMA EXTERNO 
console.log("holu");

setTimeout(()=>{
    console.log("holudos");
},0);// aunque tenga el timeout 0 se ejecuta a la ultimo

//level loop 
// EJ : 

console.log("holu3");

// callback 

function calculadora (a,b,callback){
    callback(a,b);

}

// function suma(a,b){
//     console.log(a+b);
// }

// calculadora(2,4,suma);
// [4,5,6,7].map((e)=>{
//     suma(e,1);
// })



// function paso(nombrePaso,callback){
// setTimeout(()=>{
//     console.log(nombrePaso);
//     callback();
// },1000);
// }

// paso("amasar",()=>{
//     paso("preparar salsa",()=>{
//         paso("honenear",()=>{
//             paso("aceituna",()=>{
//                 console.log("comiendo");
//             }
//             )});
//     });
// });


// promesasasss

const miPromesa = new Promise((resolve,reject)=>{
    var exito = true;
    if(exito){
        resolve("la ejecucion fue exitosa");
    }else{
        reject("no pa , no funciono");
    }

})

//console.log(miPromesa);

miPromesa.then((result)=>{
    console.log(result);
})

fetch("https://jsonplaceholder.typicode.com/posts",{
method:"POST",
Headers:{"Content-type":"application/json"},
body: JSON.stringify({
    title:"mitit",
    body:"mipost",
    id:1,
    }),
}).then((response) => {
    return response.json();
})
.then((res) => console.log(res))
.catch((error) => console.error(error));




fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((data) => {
    users = data;
    console.log("Dentro de la promesa");
    console.log(users);
})
.catch((error) => console.error(error));
// ASINCRONICAS 


const getUsers  =async()=>{
    try{
        const userRaw = await fetch("https://jsonplaceholder.typicode.com/users");
        const userData = await (userRaw.json());
        const user1 = userData[0];
        console.log(user1);
    }catch(error){
        console.error(error);
    };
};
getUsers();

// horacio capo 
console.log("Antes");
let p = new Promise((e,f)=>{
    console.log("Dentro");
    setTimeout(()=>{e("exito")}, 1000);//NO BLOQUEANTE
    });
p.then((e)=>console.log("en then"))
.catch((f)=>console.log("en catch"));
console.log("despues del then y catch");
console.log(p);