import { createServer } from 'http'
import { Server } from 'socket.io'

const PORT = process.env.SOCKET_PORT || 5174

const httpServer = createServer()
const origin = process.env.SOCKET_ORIGIN || 'http://localhost:5173'
const io = new Server(httpServer, {
  cors: {
    origin,
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
  console.log(`CORS origin: ${origin}`)
})
