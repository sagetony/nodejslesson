const http = require('http')

const server = http.createServer(( req, res) =>{
    // console.log(req)
    // res.write('we are here')
    // res.end()
    if(req.url === '/'){
        res.end('Welcome Sage')
    }
    else if(req.url === '/about'){
        res.end(`<h1>About Us</h1>`)
    }
    else{
        res.end(`<h1>Error</h1>`)
    }
}) 

server.listen(5100)