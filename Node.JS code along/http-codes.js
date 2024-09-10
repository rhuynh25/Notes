const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/info") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to our website! This is the information page");
  } else if (req.url === "/redirect") {
    // 300 codes redirect so you dont need to have parameter for res.end
    res.writeHead(301, { Location: "http://example.com" });
    res.end();
  } else if (req.url === "/client-error") {
    // 400 
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not found");
  } else if (req.url === "server/error") {
    // 500
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("500 Internal server error ");
  } else {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("400 Bad Request ");
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost${PORT}...`);
});