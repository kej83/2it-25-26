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

app.post("/login", (req, res) => {
    pass
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



