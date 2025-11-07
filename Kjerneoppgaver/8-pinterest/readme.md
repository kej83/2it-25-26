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
└─ public/
   ├─ style.css
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
//public mappe med css
app.use(express.static("public"));

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
 <link rel="stylesheet" href="/style.css">

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
  <link rel="stylesheet" href="/style.css">

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
## 4.5 Legg til style.css

```css
body {
  font-family: "Segoe UI", Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
  margin: 0;
  padding: 1.5rem;
}

h1 {
  text-align: center;
  color: #444;
}

a {
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
}

a:hover {
  text-decoration: underline;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 0.8rem;
  text-align: center;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: scale(1.03);
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.caption {
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  color: #555;
}

.owner {
  font-size: 0.8rem;
  color: #777;
}

.like-btn {
  display: inline-block;
  padding: 0.3rem 0.6rem;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  font-size: 0.85rem;
  transition: background-color 0.2s ease;
}

.like-btn:hover {
  background-color: #0056b3;
}

form {
  background-color: white;
  padding: 1.2rem;
  border-radius: 10px;
  max-width: 400px;
  margin: 2rem auto;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

form div {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

input[type="url"],
input[type="text"],
input[type="file"] {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #0056b3;
}
```
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
