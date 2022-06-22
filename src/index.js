const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')



const app = express()
server = http.createServer(app)
const io = socketio(server)


const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '../public')));


io.on("connection", (socket)=>{
    console.log('New Websocket connection')
    socket.emit('message','Welcome!')
    // io.emit('countUpdated')
    socket.on('sendMessage',(message)=>{
        io.emit('message',message)
    })
})

server.listen(port,() =>{
    console.log(`Server is up ${port}!`)
})