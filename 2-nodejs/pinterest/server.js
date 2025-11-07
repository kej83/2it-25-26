import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// EJS-oppsett
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// for å lese form-data
app.use(express.urlencoded({ extended: true }));

// her lagrer vi ALLE bildene som er postet
// hvert innlegg skal se sånn ut:
// { imageUrl: "...", caption: "..." }
let posts = [
    {imageUrl: "https://i.postimg.cc/kMHLgGYy/k2d53iadslcnkhc9rnd02a2pen-SX300-CR0-0-300-300.jpg", caption:"meg for en del år tilbake"}
];

// FORSIDE: vis alle bilder
app.get("/", (req, res) => {
    res.render("index", {posts: posts});
  // TODO: ELEVEN SKRIVER
  // 1. render "index"
  // 2. send med { posts: posts }
});

// SIDE: skjema for nytt bilde
app.get("/upload", (req, res) => {
  // TODO: ELEVEN SKRIVER
  // render "upload"
  let nyttbilde = {imageUrl: "https://i.postimg.cc/kMHLgGYy/k2d53iadslcnkhc9rnd02a2pen-SX300-CR0-0-300-300.jpg", caption:"meg for en del år tilbake"};
  posts.push(nyttbilde);
});

// MOTTAR SKJEMA
app.post("/upload", (req, res) => {
  // TODO: ELEVEN SKRIVER
  // 1. hent imageUrl og caption fra req.body
  // 2. lag et objekt
  // 3. push objektet inn i posts-arrayen
  // 4. redirect til "/"
});

app.listen(PORT, () => {
  console.log("mini-pinterest kjører på http://localhost:" + PORT);
});