// Creating a basic server

import http from "http";

// Create variable of server for require and response
const server = http.createServer((req,res) => {

res.writeHead(200, {"Content-Type": "text/plain"});
// The response that we are going to recieve is plain text... Allows us to write what type of content
res.write("Hello C15, this is a basic node server!")
//Lets us write the content we wanna see 
res.end();
// The end of the program or Server
});

// Create a variable for the Port
const PORT = 3000;

// Listen just a method to pay attention to
server.listen(PORT, () => {

console.log(`Server is running on http://localhost:${PORT}`);
});

