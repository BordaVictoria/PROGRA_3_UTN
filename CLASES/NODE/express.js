const express =require("express");

const port =3001;

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("ESTA VERGA ANDA ? ")
})

app.listen(port,()=>{
    console.log("escuchado perri ");
})

app.post("/",(req,res)=>{

    // body 
    const body = req.body;

    console.log(body);
    res.send("esto es un post");

})

app.get("/",(req,res)=>{
    //query
    const query= req.query;
    console.log(query);
});

app.get("/:id",(req,res)=>{
    //parametros 

    // estos se acceden por los :   ej : /:DNI /pais/:country 
    const param = req.params;
    console.log(param);

    res.send("dfdfsg")
})