const express = require('express')
const {Server} = require('socket.io')

const app = express()

const io = new Server(3000, {
    cors: {
        origin: ['http://localhost:5173']
    }
})

const data = [
    {
        id: 1,
        name: 'one'
    },
    {
        id: 2,
        name: 'two'
    }
]

io.on('connection', (socket) => {
    console.log('connnected')
    socket.emit('loadData', data)
})

app.listen(8080, () => {
    console.log('success')
})