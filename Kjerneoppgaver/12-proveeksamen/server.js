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

// Forside
app.get("/", (req, res) => {
  res.render("index", {
    biler: [],
    infoText: "Trykk 'Vis alle biler' for å hente biler fra databasen."
  });
});

// Vis alle biler
app.get("/visbiler", (req, res) => {
  pool.query("SELECT * FROM biler ORDER BY id ASC", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Databasefeil ved henting av biler.");
    }

    res.render("index", {
      biler: result.rows,
      infoText: "Viser alle biler."
    });
  });
});

// Søk på merke
app.post("/sokmerke", (req, res) => {
  const merke = (req.body.merke || "").trim();

  pool.query(
    "SELECT * FROM biler WHERE merke ILIKE $1 ORDER BY id ASC",
    [`%${merke}%`],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Databasefeil ved søk på merke.");
      }

      res.render("index", {
        biler: result.rows,
        infoText: `Søkeresultat for merke: "${merke}"`
      });
    }
  );
});

// Søk på år
app.post("/sokaar", (req, res) => {
  const aar = Number(req.body.aar);

  // ENKEL FEILHÅNDTERING (uten helper-funksjon)
  if (!aar) {
    return res.render("index", {
      biler: [],
      infoText: "Du må skrive inn et årstall (tall)."
    });
  }

  pool.query(
    "SELECT * FROM biler WHERE aar = $1 ORDER BY id ASC",
    [aar],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Databasefeil ved søk på år.");
      }

      res.render("index", {
        biler: result.rows,
        infoText: `Søkeresultat for år: ${aar}`
      });
    }
  );
});

// Endre pris (ID + ny pris)
app.post("/endrepris", (req, res) => {
  const id = Number(req.body.id);
  const pris = Number(req.body.pris);

  if (!id || !pris) {
    return res.render("index", {
      biler: [],
      infoText: "Du må skrive inn både ID og ny pris (tall)."
    });
  }

  pool.query(
    "UPDATE biler SET pris = $1 WHERE id = $2",
    [pris, id],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Databasefeil ved oppdatering av pris.");
      }

      if (result.rowCount === 0) {
        return res.render("index", {
          biler: [],
          infoText: `Fant ingen bil med ID ${id}.`
        });
      }

      // Vis alle biler etter oppdatering
      pool.query("SELECT * FROM biler ORDER BY id ASC", (err2, result2) => {
        if (err2) {
          console.error(err2);
          return res.status(500).send("Databasefeil etter oppdatering.");
        }

        res.render("index", {
          biler: result2.rows,
          infoText: `Pris oppdatert for bil ID ${id}.`
        });
      });
    }
  );
});

const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
  console.log(`Server kjører på http://localhost:${port}`);
});
