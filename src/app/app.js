const express= require('express');
const router = require('../router/product.router');
const morgan =require("morgan");
const app= express()

app.use(morgan("dev")) //debe colocarse antes de todas las rutas, momrgan sirve para leer las peticiones http

app.get('/products', (re,res)=>{
    res.send("this is express")
})
app.get('/products/:id', (re,res)=>{
    res.send("this is express")
})
app.post('/products', (re,res)=>{
    res.send("this is express")
})
app.put('/products', (re,res)=>{
    res.send("this is express")
})
app.delete('/products', (re,res)=>{
    res.send("this is express")
})

app.use("/api/v1",router); //donde queremos que se ejecuten todas las url demanera presdeterminada ,http://localhost:3001/api/v1/products

module.exports=app;