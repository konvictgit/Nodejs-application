require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) => {
    res.send('Hello World!')
})

app.get('/login',(req,res) => {
    res.send('<h1> Hololulu <h1>')
})

app.get('/youtube',(req,res) => {
    res.send('<h1> asdasdasdas <h1>')
})

app.listen(process.env.port,()=>{
    console.log(`Example app listen on port ${port}`);
})