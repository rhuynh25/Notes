import fs from "fs"; // Importing FS method
import http from "http"; // will hoest our URL

const port = 4000 // port where the server will be hosted

const server = http.createServer((req,res)=>{

if (req.url === "/"){
    console.logt(url);

    res.writeHead(200, {"Content-Type" : "text/html"})
    fs.readFile("./index.html", (err,data)=>{
if(err) throw err; // If there is an error, displays error
res.end(data); // Status code 200 shows data
res.end(); // End server once complete
    });
}

if (req.url === "/aboutpage") {
    console.log(req.url);
    // create the server variable
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("./cat2.html", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  }
});

//Here we are telling our server to be hosted on port 4000 in our local host
server.listen(port, (err) => {
  if (err) console.log("Error", err.message);
  console.log(`Listening on port ${port}`);
});
