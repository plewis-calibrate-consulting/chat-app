require('dotenv').config();
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 5000;
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
})

// Connecting DB
mongoose.connect(process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, }, 
  () => {
  console.log('DB conncted')
})

// ROUTES
const authRoutes = require('./routes/auth');

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(authRoutes);


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/public/index.html');
});


// SOCKET
let activeUsers = [];

io.on('connection', (socket) => {
  console.log('User connected')
  // New user connected
  socket.on('new user', ({ userId, userName }) => {
    console.log(activeUsers)

    console.log('New User')
    socket.userId = userId;
    socket.userName = userName;
    activeUsers.push({ userId, userName })
    console.log(activeUsers)
    socket.broadcast.emit('new user connected', userName);
    io.emit('new user', activeUsers)
  })

  socket.on('disconnect', () => {
    console.log('Disconnect')
    activeUsers = activeUsers.filter(x => x.userId !== socket.userId)
    console.log(activeUsers)
    socket.broadcast.emit('single user disconneted', socket.userName)
    return io.emit('user disconnect', activeUsers)
  })

  // Incoming message
  socket.on('message', message => {
    io.emit('message', { userId: socket.userId, userName: socket.userName, message })
  })
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});
