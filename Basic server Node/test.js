const http = require("http");
const url = require("url");

// Created a server that listens for incoming request to our URL
const server = http.createServer((req,res) => {

const {pathname, query} = url.parse(req.url,true) // Finding the path for our url

// Handle GET request to /hello end point
if(req.method === "GET" && pathname === "/hello"){
    res.writeHead(200, {"Content-Type": "text-plain"});
    res.end("Hello from the server!")
} // Handle POST request to /greet end point
else if (req.method === "/POST" && pathname === "/greet") {
    let body = "";
    
// Let the data request post
  req.on("data", (chunk) => {
    body += chunk.toString()
});
  req.on("end", () => {
    const names = JSON.parse(body).names;

    const greetings = names.map((name) => `Hello, ${name}`).join("\n");
    res.writeHead(200, {"Content-Type": "text-plain"});
    res.end(greetings);
  });
} else {
  // Return a 404 Not Found response for unknown endpoints
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
}
});

const PORT = 3000;
// Start the server and listen on the specified port
server.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});