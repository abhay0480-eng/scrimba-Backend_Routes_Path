import http from 'node:http'

const PORT = 8000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<html><head></head><body><h1>Hello World</h1></body></html>')
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})