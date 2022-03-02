const express = require("express");
const app = express();
const http = require("http");

const options = {
    //put https keys here
};

const httpServer = http.createServer(options, app);

httpServer.listen(8080, function() {
    console.log("Server running on 8080");
});

app.get("/", (req,res) => 
{
    res.send(index.html);
});

