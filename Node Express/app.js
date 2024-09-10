// Create a basic server with Express

// Brings express into the application
const express = require('express');
const app = express();

// Tells the app to use the public folder to serve static files(file that doesn't change)
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World'); // Doesn't always have to be hello world
});

app.get('/about', (req, res)=> {
    // res.send('About Page');
    res.sendFile(__dirname + '/public/about.html');
});

// Listens for request on PORT 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});