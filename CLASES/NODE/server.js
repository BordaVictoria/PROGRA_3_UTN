const http = require("http");

const port =3000;

http.createServer((req,res)=>{
    const respuesta=  "AHREEEEEE";

    res.write(respuesta);
    res.end;
})
.listen(port,()=>{

    console.log("escuchando en el puerto: "+port);

});


