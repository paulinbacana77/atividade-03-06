import express, { json } from "express"

const app = express()
const port = 3000

app.use(express.json())

app.get('/alunos', (req,res) =>{
    const tarefas = [{id: 1, titulo: "Aluno 1",RA: '1050292321001', nome: 'Paulin Bacana', email: 'pajovanju5@gmail.com' },
     {id: 2, titulo: "Aluno 2", RA: '1050292321002', nome: 'Cleitin', email: 'cleitinreidelas@yahoo.com.br'},
     {id: 3, titulo: "Aluno 3", RA: '1050292321003', nome: 'McLovin', email: 'noobmaster69@outlook.com'}]
    res.json(tarefas)
})

app.get('/', (requisição,resposta) =>{
    resposta.send('Para acessar a lista de alunos, adicione á URL "/alunos" ')
})

app.listen(port, () =>{
    console.log(`Servidor executando em http://localhost:${port}`)
})