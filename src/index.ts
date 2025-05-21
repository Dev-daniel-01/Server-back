import http from 'http'
import app from './app'
import dotenv from 'dotenv';

dotenv.config();

const port = 9090

const server = http.createServer(app)

server.listen(port, () => {
    return console.log(`App listening on port ${port}`)
})