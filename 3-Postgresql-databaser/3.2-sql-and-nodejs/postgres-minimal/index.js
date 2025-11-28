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

// TODO: Lag de andre rutene. Se index.html i public mappa for korrekte ruter!!!!
app.get('/visalle', (req, res) => {
    const sql = 'SELECT * FROM elever;';

    pool.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            res.send("<h1>Database error</h1>");
            return;
        }
        
        const elever = result.rows;
        console.log(elever);
        
        let html = "<h1>Database:</h1><ul>";
        for (let elev of elever){
            html += `<li>${elev.fornavn} ${elev.etternavn}: ${elev.alder} år gammel. </li>`
        }
        html += "</ul>"
        res.send(html);
    })
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});