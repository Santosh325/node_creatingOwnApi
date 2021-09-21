const http = require('http');
const PORT = 3000;
const fs = require('fs');


const server = http.createServer((req,res) => {
    const data = fs.readFileSync(`${__dirname}/UserApi/userApi.json`, "utf-8");
        const jsonObject = JSON.parse(data);


    if(req.url == "/") {
        res.end("Hello from server")
    } else if(req.url == "/about") {
        res.end("Hello from about section")
    } else if(req.url == '/contact') {
        res.end("Hello from contact section")
    } else if(req.url  == '/userApi')  {
        res.writeHead(200,{"Content-type": "application/json"})
        res.end(jsonObject[2].login)
    }
    
    else {
        res.writeHead(400, {"Content-type": "text/html"});
        res.end("<h1>404 error. page doesn't exist</h1>")
    }
});

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})