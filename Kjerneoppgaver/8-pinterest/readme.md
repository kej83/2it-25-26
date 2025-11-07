# Prosjekt: **mini-pinterest**

## Beskrivelse

Du skal lage en enkel versjon av “Pinterest”: elever kan lime inn bilde-URL (fra Postimages) + caption, og alle bildene som er sendt inn skal vises på forsiden.

Vi bruker:

* Node.js
* Express
* EJS
* Postimages for bilde-URL

---

## 1. Oppsett

Installer:

```bash
npm init -y
npm install express ejs
```

Mappestruktur:

```text
mini-pinterest/
├─ package.json
├─ server.js
└─ views/
   ├─ index.ejs
   └─ upload.ejs
```

`package.json` (kort):

```json
{
  "name": "mini-pinterest",
  "version": "1.0.0",
  "type": "module",
  "dependencies": {
    "express": "^4.19.2",
    "ejs": "^3.1.10"
  }
}
```

---

## 2. `server.js` – skjelett

Elevene skal fylle inn alle TODO-ene.

```js
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
let posts = [];

// FORSIDE: vis alle bilder
app.get("/", (req, res) => {
  // TODO: ELEVEN SKRIVER
  // 1. render "index"
  // 2. send med { posts: posts }
});

// SIDE: skjema for nytt bilde
app.get("/upload", (req, res) => {
  // TODO: ELEVEN SKRIVER
  // render "upload"
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
```

---

## 3. `views/index.ejs`

Elevene må lage løkke i EJS for å vise ALLE bilder.

```ejs
<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="UTF-8">
  <title>mini-pinterest</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 2rem; }
    .grid {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .card {
      border: 1px solid #ddd;
      padding: 0.5rem;
      width: 220px;
    }
    .card img {
      max-width: 100%;
      display: block;
    }
  </style>
</head>
<body>
  <h1>mini-pinterest</h1>
  <p><a href="/upload">Legg til nytt bilde</a></p>

  <% /* TODO: ELEVEN SKRIVER: hvis posts.length === 0 -> skriv "ingen bilder ennå" */ %>

  <div class="grid">
    <% /* TODO: ELEVEN SKRIVER:
       lag en for-løkke i EJS: for (let i = 0; i < posts.length; i++)
       vis posts[i].imageUrl og posts[i].caption
    */ %>
  </div>
</body>
</html>
```

Hint til elevene:

```ejs
<% for (let i = 0; i < posts.length; i++) { %>
  ...
<% } %>
```

---

## 4. `views/upload.ejs`

Denne kan nesten være ferdig – de må bare passe på at `name` matcher det de leser i `req.body`.

```ejs
<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="UTF-8">
  <title>Legg inn bilde</title>
</head>
<body>
  <h1>Legg inn bilde-URL</h1>
  <p>Last opp bilde på <a href="https://postimages.org" target="_blank">Postimages</a> og kopier <em>Direct link</em>.</p>

  <form action="/upload" method="POST">
    <div>
      <label for="imageUrl">Bilde-URL:</label>
      <input type="url" id="imageUrl" name="imageUrl" required>
    </div>
    <div>
      <label for="caption">Caption:</label>
      <input type="text" id="caption" name="caption" placeholder="Skriv en tekst">
    </div>
    <button type="submit">Lagre</button>
  </form>

  <p><a href="/">Tilbake</a></p>
</body>
</html>
```

---

## 5. Hva dere MÅ få til i hovedoppgaven

* `posts` skal være et **array**
* hver gang noen poster, skal det legges til et nytt objekt i arrayet
* forsiden skal vise **alle** objektene i arrayet
* dataen må sendes med `res.render("index", { posts: posts })`

---

## 6. Ekstraoppgaver (stigende vanskegrad)

### 1) Sorter nyeste øverst

Når dere viser bildene, skal det nyeste inn først.

* hint: enten `posts.unshift(...)` i stedet for `posts.push(...)`
* eller vis arrayet baklengs i EJS

---

### 2) Vis navn på avsender

Utvid skjemaet med et felt `owner` (hvem som postet).

* legg til `<input name="owner">` i `upload.ejs`
* lagre det i objektet i `server.js`
* vis det i `index.ejs` under bildet

Objektet blir da f.eks:

```js
{ imageUrl: "...", caption: "...", owner: "Emma" }
```

---

### 3) Likes på hvert bilde

Legg til en “Like”-knapp per bilde.

En enkel variant (uten database):

* legg til `likes: 0` i hvert objekt når det opprettes
* lag en ny route `/like/:index` som:

  1. finner riktig post i `posts` med `req.params.index`
  2. øker `likes`
  3. redirect tilbake til `/`
* i `index.ejs` lager dere en knapp/link:
  `<a href="/like/<%= i %>">Like</a> (<%= posts[i].likes %>)`

Dette lærer dem route med parameter.

---

### 4) Innfør en veldig enkel “login”

Her kan dere fake det (siden dere ikke har database):

* lag en side `/login` med form `username`
* når bruker logger inn, lagrer dere navnet i en enkel variabel på serveren (eller enda bedre: i session hvis dere har lært det – hvis ikke: bare en global variabel for demo)
* når man poster et bilde, bruk innlogget bruker som `owner`
* vis “logget inn som ...” på forsiden

(Eller: bare la dem skrive navnet i skjemaet – det er enklere.)

---

### 5) **(vanskelig)** Last opp bilder til serveren med **multer**

Dette er “bonus for de som er ferdig” – samme som du ønsket.

Oppgaveformulering til elevene:

> Endre prosjektet slik at vi ikke lenger limer inn bilde-URL, men faktisk laster opp en bildefil.
>
> **Krav:**
>
> 1. installer `multer`
> 2. lag `/uploads`-mappe
> 3. sett opp multer med `diskStorage`
> 4. endre skjemaet i `upload.ejs` til `enctype="multipart/form-data"` og `<input type="file" name="image">`
> 5. når fila er lastet opp, lagre filnavnet i `posts`-arrayet
> 6. vis bildene med `<img src="/uploads/ ...">`
> 7. gjør `/uploads` tilgjengelig med `app.use("/uploads", express.static("uploads"))`
