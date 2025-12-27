import { Socket } from 'dgram'
import express from 'express'
import http from 'http'
import path from 'path'
import {Server} from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new Server(server)

const PORT = 3000;



io.on('connection', (client) => {
    console.log('A new user connected', client.id)
})



app.use(express.static(path.resolve('./public')))

app.get('/', (req, res) => {
   return res.sendFile('./public/index.html')
})



server.listen(PORT, () => {
    console.log("server is rinning")
})