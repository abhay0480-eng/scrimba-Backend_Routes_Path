import http from 'http'
import { serveStatic } from './utils/serveStatic.js'
const PORT = 8000

const __dirName = import.meta.dirname

const server = http.createServer(async (req, res) => {
    await serveStatic(res, __dirName)
})

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))