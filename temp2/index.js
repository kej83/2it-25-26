// Importer moduler
import express from 'express';
import pg from 'pg';
import 'dotenv/config';
// koble til databasen
const { Pool } = pg;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD
});

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));
// For å lese skjemaet gjennom req.body
app.use(express.urlencoded( {extended:true} ));

// cannot get /
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/nyttutstyr", (req, res) => {
    res.render("ny");
})
// GET: vis side + evt. hent produkt hvis ?id= er satt
app.get("/redigerutstyr", (req, res) => {
  const id = req.query.id;

  if (!id) {
    return res.render("rediger", {
      title: "Rediger utstyr",
      item: null,
      valgtId: null,
      feilmelding: null,
      feil: null,
      suksess: null,
    });
  }

  pool.query("SELECT * FROM datautstyr WHERE id = $1", [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.render("rediger", {
        title: "Rediger utstyr",
        item: null,
        valgtId: id,
        feilmelding: "Det skjedde en feil ved henting.",
        feil: null,
        suksess: null,
      });
    }

    if (result.rows.length === 0) {
      return res.render("rediger", {
        title: "Rediger utstyr",
        item: null,
        valgtId: id,
        feilmelding: "Fant ikke utstyr med denne ID-en.",
        feil: null,
        suksess: null,
      });
    }

    res.render("rediger", {
      title: "Rediger utstyr",
      item: result.rows[0],
      valgtId: id,
      feilmelding: null,
      feil: null,
      suksess: null,
    });
  });
});


// POST: lagre endringer
app.post("/redigerutstyr", (req, res) => {
  const {
    id,
    navn,
    kategori,
    serienummer,
    status,
    verdi,
    innkjopsdato,
    kommentar,
  } = req.body;

  pool.query(
    `UPDATE datautstyr SET
      navn = $1,
      kategori = $2,
      serienummer = $3,
      status = $4,
      verdi = $5,
      innkjopsdato = $6,
      kommentar = $7
     WHERE id = $8`,
    [
      navn,
      kategori,
      serienummer,
      status,
      verdi || null,
      innkjopsdato || null,
      kommentar || null,
      id,
    ],
    (err) => {
      if (err) {
        console.error(err);

        // send brukeren tilbake til rediger siden med feilmelding
        return res.render("rediger", {
          title: "Rediger utstyr",
          item: {
            id,
            navn,
            kategori,
            serienummer,
            status,
            verdi,
            innkjopsdato,
            kommentar,
          },
          valgtId: id,
          feilmelding: null,      // kun brukt for GET
          feil: "Det skjedde en feil ved lagring.",
          suksess: null,
        });
      }

      // hent oppdatert data for å vise brukeren
      pool.query("SELECT * FROM datautstyr WHERE id = $1", [id], (err2, result) => {
        if (err2 || result.rows.length === 0) {
          console.error(err2);
          return res.render("rediger", {
            title: "Rediger utstyr",
            item: {
              id,
              navn,
              kategori,
              serienummer,
              status,
              verdi,
              innkjopsdato,
              kommentar,
            },
            valgtId: id,
            feilmelding: null,
            feil: "Endringene ble lagret, men klarte ikke hente oppdatert data.",
            suksess: null,
          });
        }

        // GJENNOMFØRT: vis suksessmelding og behold brukeren på siden
        res.render("rediger", {
          title: "Rediger utstyr",
          item: result.rows[0],
          valgtId: id,
          feilmelding: null,
          feil: null,
          suksess: "Endringene ble lagret!",
        });
      });
    }
  );
});


// MINIMAL database test
app.get("/test", (req, res) => {
    let sql = "SELECT * FROM datautstyr;";
    pool.query(sql, (err, result) => {
        const utstyr = result.rows;
        
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

