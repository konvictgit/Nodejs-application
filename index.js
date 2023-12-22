//require('dotenv').config()
import express  from 'express';
//const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

// app.get('/',(req,res) => {
//     res.send('Hello World!')
// });

// get a list of 5 jokes 

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:"A joke",
            content:"this is a joke"
        },
        {
            id:2,
            title:"Another joke",
            content:"this is another joke"
        },
        {
            id:3,
            title:"third joke",
            content:"this is third joke"
        },
    ];
    res.send(jokes);
});

// app.get('/login',(req,res) => {
//     res.send('<h1> Hololulu <h1>')
// })

// app.get('/youtube',(req,res) => {
//     res.send('<h1> asdasdasdas <h1>')
// })

app.listen(port,()=>{
    console.log(`Example app listen on port ${port}`);
})