const express = require('express')
const rotas = require('./rotas/rotas')
const porta = process.env.PORT ||8080
const app = express()

app.use("/",rotas)

app.use('*',(req, res)=>{
    res.send('Portal Ramon Melo')
})

app.listen(porta, console.log('servidor rodando'))