import { createServer } from 'http'
import { Server } from 'socket.io'

const PORT = process.env.SOCKET_PORT || 5174

const httpServer = createServer()
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  socket.on('chat:message', (payload) => {
    io.emit('chat:message', payload)
  })
})

httpServer.listen(PORT, () => {
  console.log(`Socket server running on http://localhost:${PORT}`)
})
