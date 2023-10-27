const express = require('express')
const rotas = express.Router()   // cria várias rotas num único objeto roteador

let cursosInfo = [
    {'curso':'node', 'info' :'Curso de node'},
    {'curso':'react', 'info' :'Curso de React'},
    {'curso':'java', 'info' :'Curso de Java'},
    {'curso':'arduino', 'info' :'Curso de Arduino'}
   
]

rotas.get('/',(req, res)=>{
    res.send('Seja bem vindo')
})

rotas.get('/:cursoProc',(req, res)=>{
    const cursoP = req.params.cursoProc
    const cursoI = cursosInfo.find(i=>i.curso == cursoP) //em i.curso, curso representa a propriedade curso do array de objetos cursosInfo
    if(!cursoI){
        res.status(404).json({erro:'curso não encontrado',cursoPesquisado:cursoP})
    }else{
        res.status(200).json(cursoI)
    }
})
module.exports = rotas
