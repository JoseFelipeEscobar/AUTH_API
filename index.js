const express = require('express');
const app=express();
const morgan=require('morgan');


//logger
app.use(morgan('dev'));
// listen port 
app.listen(3000);

//routes
app.get('/',(req,res)=>{
  res.send("server is running: ")
})



console.log("escuchando en el puerto 3000");