import http from 'http'
import { sendResponse } from './utils/sendResponse.js'
import path from 'node:path'
import fs from 'node:fs/promises'
import url from 'node:url'
import { serveStatic } from './utils/serveStatic.js'
import { handleGet } from './handlers/routeHandlers.js'

const PORT = process.env.PORT || 8000

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const server = http.createServer(async (req, res) => {
    if (req.url === '/api' && req.method === 'GET') {
        return await handleGet(res)
    } else if (!req.url.startsWith('/api')) {
        return await serveStatic(__dirname, req, res)
    }

})

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))