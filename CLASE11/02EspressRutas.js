const express =require("express");

let users =[
    {id:1,name:"puto",edad:"65"},
    {id:2,name:"put",edad:"5"},
    {id:3,name:"puo",edad:"55"},
];

const port =3002;
const app = express();
app.use(express.json());


//listado 

app.get("/users",(req,res)=>{
    res.send(users);
});

// id 

app.get("/users/:id",(req,res)=>{
    const {id} =req.params;
    const usuariobuscado = users.find(user => user.id ==id);
    res.send(usuariobuscado);
});

app.get("/users",(req,res)=>{
    const query= req.query;
// filtrar con query por edad 
    if(query.edad){
        userres=users.filter((users)=> user.edad=query.edad);
    }

    res.send(users);
})

app.post("/users",(req,res)=>{
    //obtener el body 
    const {body} =req;
    const newUser ={...body,id: users.length+1} 
    // agregar 

    users.push(newUser);
    // respuesta

    res.send(newUser);


})
app.delete("/users/:id",(req,res)=>{
    //obtengo el id 
    const {id} =req.params;

    //obtener el usuario
    const usuarioaborar =users.find(user =>user.id ==id );

    //users.delete(usuarioaborar);

})


app.listen(port,()=>{
    console.log("escuchando ");
})