const port = 3000;

const http = require('http');
const router = require('./router')

const server = http.createServer(router.GapYo);

console.log(`Server is being started on port ${port}...`)
router.wow()
console.log(router.list)
server.listen(port);
