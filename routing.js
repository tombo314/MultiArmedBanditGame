let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res)=>{
    if (req.url==="/"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(fs.readFileSync("index.html"));
    }
    else if (req.url==="/stylesheet/main.css"){
        res.writeHead(200, {"Content-Type": "text/css"});
        res.end(fs.readFileSync("stylesheet/main.css"));
    }
    else if (req.url==="/main.js"){
        res.writeHead(200, {"Content-Type": "text/js"});
        res.end(fs.readFileSync("main.js"));
    }
    else if (req.url==="/favicon.ico" || req.url.substring(0, 7)==="/socket"){
        res.end();
    }
    else {
        console.log("File Not Found: " + req.url);
        res.end();
    }
}).listen(process.env.PORT || 8000);

module.exports.server = server;