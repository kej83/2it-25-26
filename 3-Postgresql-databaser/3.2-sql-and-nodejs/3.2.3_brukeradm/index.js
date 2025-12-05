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
    database: 'avinor',
    port: 5432,
    password: myPW
});

const app = express();
const PORT = 3000;

app.use(express.static("public"));
// For å lese skjemaet gjennom req.body
app.use(express.urlencoded( {extended:true} ));

// cannot get /
app.get("/", (req, res) => {
    res.render("index.ejs");
});

// MINIMAL database test
app.get("/test", (req, res) => {
    let sql = "SELECT * FROM brukere;";
    pool.query(sql, (err, result) => {
        const brukere = result.rows;
        res.send(`<h1>${brukere[0].fornavn}</h1>`);
    });
});

app.get("/visallebrukere", (req, res) => {
    // TODO:
    pass
})
app.post("/login", (req, res) => {
    // 1. Les inn brukernavn og password fra req.body
    const user = req.body.username;
    const passwd = req.body.password;
    // 2. Lag sql kode for å løpe gjennom brukernavn og passord på alle brukerne
    const sql = "SELECT * FROM brukere;";
    
    pool.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            res.send("<h1>Database error</h1>");
            return;
        }
          // 3. Bruk for (let bruker of brukere) for å gå gjennom alle brukerne og let etter match.
        const brukere = result.rows;

        for(let bruker of brukere) {
            let riktigPass = bruker.passord;
            let riktigBruker = bruker.brukernavn;

            if (riktigBruker == user &&
                riktigPass == passwd
            ) {
                // RIKTIG
                res.render("oversikt.ejs");
                return; // Avslutt funk
            }
        }

        // 4. Hvis riktig bruker/passord, gå til oversikt.ejs. ELSE gi feilmelding.
        res.send("<h1>FEIL user/pass</h1>");
     
    })
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



