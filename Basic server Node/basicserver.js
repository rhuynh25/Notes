const http = require("http");

// Creating a server using the createServer method of the HTTP Module
const server = http.createServer((req,res) => {
// Setting up the status code of the response 200 (OK)
res.statusCode = 200;
// Setting the Content Type of response which is text
res.setHeader("Content-Type", "text-plain");
// Sending the response body which is a simple message
res.end("Hello this is a basic Node.js server 4444");
});

// Where the server will listen for incoming request
const port = 3000;

// Start server and use our port
server.listen(port,() =>{
    console.log(`Server running at http://localhost:${port}/`)
});