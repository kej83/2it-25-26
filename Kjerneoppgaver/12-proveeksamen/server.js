import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const pool = new pg.Pool({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT || 5432),
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE
});

// Hjelpefunksjon: render med biler (callback-stil)
function renderIndex(res, biler, infoText = "", sokText = "") {
  res.render("index", { biler, infoText, sokText });
}

// Forside (viser bare knappene og skjemaene, ingen liste)
app.get("/", (req, res) => {
  renderIndex(res, [], "Trykk 'Vis alle biler' for å hente fra databasen.");
});

// Knapp: Vis alle biler
app.get("/visbiler", (req, res) => {
  pool.query("SELECT * FROM biler ORDER BY id ASC", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Databasefeil ved henting av biler.");
    }
    renderIndex(res, result.rows, "Viser alle biler.");
  });
});

// Søk (POST – ingen querystring)
app.post("/sokbiler", (req, res) => {
  const sok = (req.body.sok || "").trim();

  const sql = `
    SELECT * FROM biler
    WHERE merke ILIKE $1 OR modell ILIKE $1
    ORDER BY id ASC
  `;
  const params = [`%${sok}%`];

  pool.query(sql, params, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Databasefeil ved søk.");
    }
    renderIndex(res, result.rows, `Søkeresultat for: "${sok}"`, sok);
  });
});

// Legg til bil
app.post("/leggtil", (req, res) => {
  const { merke, modell, pris, km, aar } = req.body;

  const sql = `
    INSERT INTO biler (merke, modell, pris, km, aar)
    VALUES ($1, $2, $3, $4, $5)
  `;
  const params = [merke, modell, pris, km, aar];

  pool.query(sql, params, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Databasefeil ved innsetting.");
    }

    // Etterpå: hent og vis alle biler igjen
    pool.query("SELECT * FROM biler ORDER BY id ASC", (err2, result2) => {
      if (err2) {
        console.error(err2);
        return res.status(500).send("Databasefeil etter innsetting.");
      }
      renderIndex(res, result2.rows, "Bil lagt til!");
    });
  });
});

// Oppdater bil (id kommer fra input-felt)
app.post("/oppdater", (req, res) => {
  const { id, merke, modell, pris, km, aar } = req.body;

  const sql = `
    UPDATE biler
    SET merke = $1, modell = $2, pris = $3, km = $4, aar = $5
    WHERE id = $6
  `;
  const params = [merke, modell, pris, km, aar, id];

  pool.query(sql, params, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Databasefeil ved oppdatering.");
    }

    pool.query("SELECT * FROM biler ORDER BY id ASC", (err2, result2) => {
      if (err2) {
        console.error(err2);
        return res.status(500).send("Databasefeil etter oppdatering.");
      }
      renderIndex(res, result2.rows, `Bil #${id} oppdatert!`);
    });
  });
});

// Slett bil (id kommer fra input-felt)
app.post("/slett", (req, res) => {
  const { id } = req.body;

  pool.query("DELETE FROM biler WHERE id = $1", [id], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Databasefeil ved sletting.");
    }

    pool.query("SELECT * FROM biler ORDER BY id ASC", (err2, result2) => {
      if (err2) {
        console.error(err2);
        return res.status(500).send("Databasefeil etter sletting.");
      }
      renderIndex(res, result2.rows, `Bil #${id} slettet!`);
    });
  });
});

const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
  console.log(`Server kjører på http://localhost:${port}`);
});
