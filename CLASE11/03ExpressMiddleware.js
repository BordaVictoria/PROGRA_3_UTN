
const express = require("express");
const app= express();
const port =3000;


app.use("/user",(res,res,next=>{
    res.comentario = "middelware user ";
    next();
}))

app.use("/user",(res,res,next=>{
    res.comentario = "middelware user ";
    next();
}))

app.use("/user",(res,res,next=>{
    res.send(res.comentario+" users");
    
}))
app.use("/privado",(res,res,next=>{
    let bloqear = true;
    if (bloqear){
        res.send("bloqueado");
    }else{
        next();
    }
}))

app.get("/privado",(req,res)=>{
    res.send("dentro de privado");
})