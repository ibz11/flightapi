
require('dotenv').config()
const express=require('express')
const flights=require('./data')
const app=express()
const cors = require('cors');

app.use(cors());



app.get('/flight/',(req,res)=>{
    res.setHeader('Content-Type', 'application/json'); 
    res.status(200).json(flights); 
    // res.send(`Hello api ${flights}`)
})
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port http://localhost:${process.env.PORT}`)
})

