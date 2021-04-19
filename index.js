const http = require("http");
http.createServer(

    (req, res) => {
        var path = req.url.toLowerCase();
        switch(path){
            case '/':
                res.writeHead(200, {'Content-Type':'text/plain'});
                res.end('Welcome! Add /about to access the About page!');
                break;
            case '/about':
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('Hello! My name is Tom and I want to adopt a cat. However, I cannot affort one so you get this lousy website about cats up for adoption from cat shelters instead.')
                break;
            default:
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('Oh no, I guess what you are looking for is not here...');
                break;
        }
    }
).listen(process.env.PORT || 3000);