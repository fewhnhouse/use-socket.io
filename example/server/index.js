var app = require('express')()
var http = require('http').createServer(app)
var io = require('socket.io')(http)

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket) {
  socket.on('eventName', (message) => {
    console.log('eventName: ', message)
  })
  socket.emit('eventName', 'Hello from socket.io!')
})


http.listen(4000, function() {
  console.log('listening on *:4000')
})
