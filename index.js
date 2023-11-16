const express = require("express");
const http = require("http");
const { Server: SocketServer } = require("socket.io");
const cors = require("cors");

// Initializations
const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "*",
  },
});

app.use(cors());

const wordGenerator = require('./wordGenerator');
let storedWord = null; // Almacena la última palabra generada

function sendWordPairsToClients(socket) {
  if (storedWord) {
    socket.emit('word', storedWord);
  } else {
    console.log('No hay palabras almacenadas para enviar.');
  }
}

io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');
  
  // Envía la última palabra generada al cliente que se acaba de conectar
  sendWordPairsToClients(socket);

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

// Función para generar y almacenar una nueva palabra
function generateAndStoreWord() {
  storedWord = wordGenerator.getRandomWordPair();
  io.emit('word', storedWord);
}

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor Socket.IO escuchando en el puerto ${PORT}`);
});

setInterval(generateAndStoreWord, 600000); // 600000 --> 10 minutos
