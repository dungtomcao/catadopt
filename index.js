import {getKitties, getKitty} from './data.js';
import express from 'express';
import handlebars from 'express-handlebars';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('./public'));
app.use(express.urlencoded());
app.use(express.json());

app.engine('hbs', handlebars({defaultLayout: './main.hbs'}));
app.set("view engine", "hbs");

app.get('/', (req,res) => {
    res.render('home', {kitty: getKitties()});
});

app.get('/about', (req,res) => {
    res.type('text/plain');
    res.send('Hello! My name is Tom and I want to adopt a cat. However, I cannot affort one so you get this lousy website about cats up for adoption from cat shelters instead.');
});

app.get('/kitty', (req,res) => {
    let found = getKitty(req.query.name);
    res.render('kitty', {
        name: req.query.name,
        found
    })
    //res.type('text/plain');
    //let result = (found) ? JSON.stringify(found) : "Not found";
    //res.send(result);
});

app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('Oh no, I guess what you are looking for is not here...');
});

app.listen(app.get('port'), () => {
    console.log('Express started');
});

/*http.createServer(
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
                res.end('Hello! My name is Tom and I want to adopt a cat. However, I cannot affort one so you get this lousy website about cats up for adoption from cat shelters instead.');
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
).listen(process.env.PORT || 3000);*/