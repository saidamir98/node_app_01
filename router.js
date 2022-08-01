const fs = require('fs');
const path = require('path')
const randomName = require('random-name')

let list = ["John"]

let GapYo = function (req, res) {
    let url = req.url;
    const extension = url.split('.')[1];

    const extensionType = {
        html: 'text/html',
        css: 'text/css',
        js: 'application/javascript',
        ico: 'image/x-icon',
    };

    console.log(url)

    if (url.startsWith('/public')) {
        const filePath = path.join(__dirname, url);
        fs.readFile(filePath, (error, file) => {
            if (error) {
                console.log(error);
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 file not found</h1>');
            } else {
                res.writeHead(200, { 'Content-Type': extensionType[extension] });
                res.end(file);
            }
        });
    } else if (url == "/calculator")  {
        fs.readFile("./calculator/index.html", (error, file) => {
            if (error) {
                console.log(error);
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 file not found</h1>');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(file);
            }
        });
    } else if (url == "/list")  {
        text = ""
        list.forEach(element => {
            text = text + `<h1>${element}</h1>`
        });
        res.writeHead(200, {'Content-Type': 'text/html' });
        res.end(text);
    } else if (url.startsWith('/add'))  {
        let name = randomName.first()
        list.push(name);
        res.writeHead(201, {'Content-Type': 'text/html' });
        res.end("OK");
    } else {
        res.writeHead(404, {'Content-Type': 'text/html' });
        res.end("<h1>404 url not found</h1>");
    }
}

function wow() {
    console.log("wow")
}

module.exports = {GapYo, wow, list}