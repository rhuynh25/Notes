const express = require ('express');
const mysql = requuire ('mysql2/promise');
const app = express();



app.get('/movies', async function (req,res) {
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'Jacob_K',
     });
    const movies = await connection.execute('SELECT * FROM movies');
    return res.json (movies[0]);
});

app.get('/movies/:title', async function (req,res) {
    const connection = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'customer',
    });
    const movies = await connection.execute(`
    SELECT * FROM movie WHERE title = ?
    `, [req.params.title]);
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});

