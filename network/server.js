const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on("message", (data) => {
    var incomingMessage = {
      "message": data["message"]
    };
    io.emit("message", incomingMessage);
  })
});



server.listen(64758, () => {
  console.log('listening on *:64758');
});