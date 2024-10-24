let routing = require("./routing.js");
let socket_io = require("socket.io");

let server = routing.server;
let io = socket_io(server);

io.on("connection", (socket)=>{
    
});