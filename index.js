const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

http.listen(4000, ()=>{
  console.log('port 4000')
})

app.use('/', (req,res)=>{
  res.sendFile(__dirname+'/index.html')
})

io.on('connect', (socket)=>{
  console.log('user conected')
  socket.on('chat',(data)=>{
    io.sockets.emit('chat',data)
  })
})
