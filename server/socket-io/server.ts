import { app } from ".."

const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server, {
    cors:{
        origin: 'http://localhost:3000'
    }
})
export function socketServer(){
    io.on('connection', (socket:any)=>{
        console.log('connected to socket')
        socket.on('sendMessage', (data:any)=>{
        socket.broadcast.emit('receiveMessage', data)
        console.log(data)
        })
    })


    server.listen(8081, ()=>{
        console.log('connected')
    })
}

