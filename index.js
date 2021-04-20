import http from 'http';
import {getKitties, getKitty} from './data.js';
import {parse} from "querystring";

http.createServer(
    (req, res) => {
        let url = req.url.split("?");
        let query = parse(url[1]);
        var path = url[0].toLowerCase();
        switch(path){
            case '/':
                res.writeHead(200, {'Content-Type':'text/plain'});
                let kitties = getKitties();
                res.end(JSON.stringify(kitties));
                break;
            case '/about':
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('Hello! My name is Tom and I want to adopt a cat. However, I cannot affort one so you get this lousy website about cats up for adoption from cat shelters instead.')
                break;
            case '/kitty':
                let found = getKitty(query.name);
                res.writeHead(200, {'Content-Type': 'text/plain'});
                let result = (found) ? JSON.stringify(found) : "Not found";
                res.end(JSON.stringify(result));
                break;
            default:
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('Oh no, I guess what you are looking for is not here...');
                break;
        }
    }
).listen(process.env.PORT || 3000);