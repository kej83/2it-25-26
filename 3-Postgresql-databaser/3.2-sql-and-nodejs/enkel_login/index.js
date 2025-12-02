// Importer moduler
import express from 'express';
import pg from 'pg';
import 'dotenv/config';
// koble til databasen
const { Pool } = pg;
const myPW = process.env.DB_PASSWORD;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'skole',
    port: 5432,
    password: myPW
});

const app = express();
const PORT = 3000;

app.use(express.static("public"));
// For å lese skjemaet gjennom req.body
app.use(express.urlencoded( {extended:true} ));

app.post('/login', (req, res) => {
    const sql = 'SELECT * FROM brukere;';
    const user = req.body.username;
    const passwd = req.body.password;
    pool.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            res.send("<h1>Database error</h1>");
            return;
        }
        
        const brukere = result.rows;
        // Gå gjennom 1 bruker om gangen om let etter match
        for (let bruker of brukere) {
            console.log(bruker);
            let riktigPassord = bruker.passwd == passwd;
            let riktigUser = bruker.username == user;
            console.log(riktigUser, riktigPassord)
            if ( riktigUser && riktigPassord ) {
                res.send("<h1>Du er logget inn</h1>");
                return;
            } 
        }
        res.send("<h1>FEIL user/pass</h1>");
        ;
    })
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});