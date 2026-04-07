import http from 'node:http'
import path from 'node:path'

const PORT = 8000
const __dirname = import.meta.dirname

const server = http.createServer((req, res) => {
    const pathToResource = path.join(__dirname, 'public', 'index.html')
    console.log("pathname", pathToResource);

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<html><h1>Hello World</h1></html>')
})

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))