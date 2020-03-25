

const express = require("express");
const app = express();  

//criar uma rota
app.get("/", (request, response)=>{
 return response.json({
     evento: "Semana",
     aluno: "VINICIUS"
 })
});
app.listen (3333);

// quando eu tentar acessar localhost3333 irei acessar minha aplicação
