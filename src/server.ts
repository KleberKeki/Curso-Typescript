import express, { request, response } from 'express'

const app = express()


// http://localhost:3333/users

app.get('/users', (request, response) => {
    return response.json(['usuario 1', 'usuario 2'])
})

app.post('/users', (request, response) => {
    return response.json({ message: 'criando usuario'})
})

app.put('/users', (request, response) => {
    return response.json({ message: 'atualizando usuario'})
})

app.delete('/users', (request, response) => {
    return response.json({ message: 'Excluindo usuario'})
})


app.listen('3333' , () => {
    console.log('back-end Started')
} )