const http = require('http');
const app = require('./app');

const server = http.createServer();

server.listen('5000',()=>{
    console.log(`Server is listening now`);
});
