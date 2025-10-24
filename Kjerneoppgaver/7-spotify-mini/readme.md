# Mikro-Spotify: Minimal fungerende eksempel (Node.js + Express + EJS)

> Mål: Lag en bitteliten «Spotify» som spiller av 5–10 sanger lagret på serveren. Først bygger vi et **minimalt fungerende eksempel (MWE)**: en liste med alle sanger og én `<audio>`-spiller. Deretter får dere **6 utvidelsesoppgaver**.

---

## 0) Forutsetninger

* Node.js installert (versjon 18+ anbefalt)
* Grunnleggende kjennskap til terminal/kommandolinje
* Dere bruker `type: "module"` og `import` (ikke `require`).

---

## 1) Prosjektstruktur

Opprett en mappe, f.eks. `mikro-spotify/`, og lag denne strukturen:

```
mikro-spotify/
├─ package.json
├─ server.js
├─ views/
│  └─ index.ejs
└─ public/
   ├─ styles.css
   ├─ script.js
   └─ audio/
      ├─ song1.mp3
      ├─ song2.mp3
      └─ ... (totalt 5–10 lydfiler)
```

> Legg egne `.mp3`/`.wav`/`.ogg`-filer i `public/audio/`. Bruk korte filnavn uten mellomrom (f.eks. `lofi_beats.mp3`).

---

## 2) Initier prosjektet og installer pakker

I prosjektmappen kjører dere:

```bash
npm init -y
npm install express ejs morgan
npm install -D nodemon
```

Oppdater `package.json` slik at den minst inneholder:

```json
{
  "name": "mikro-spotify",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "npx nodemon server.js",
    "start": "node server.js"
  }
}
```

---

## 3) Serverkode (`server.js`)

> Vi bruker `Express` for server, `EJS` for templating, `morgan` for logging, og `fs` til å lese lydfilene fra mappen.

```js
// server.js
import express from "express";
import morgan from "morgan";
import fs from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000; // Bytt hvis porten er opptatt

// Middleware
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public"))); // serverer /public

// Hent sanger fra /public/audio synkront (enkelt og greit for et lite prosjekt)
function loadSongs() {
  const folder = path.join(__dirname, "public", "audio");
  const files = fs.readdirSync(folder);

  const songs = [];
  for (const f of files) {
    const title = f.replace(".mp3", "").replace(/[-_]/g, " ");
    songs.push({ file: f, title: title });
  }

  return songs;
}

app.get("/", (req, res) => {
  const songs = loadSongs();
  // Sender data til index.ejs
  res.render("index.ejs", { songs });
});

app.listen(PORT, () => {
  console.log(`Mikro-Spotify kjører på http://localhost:${PORT}`);
});
```

---

## 4) EJS-visning (`views/index.ejs`)

> Viser alle sanger og én `<audio>`-spiller. På klikk settes `src` og den spiller.

```ejs
<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mikro-Spotify</title>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <header>
    <h1>🎵 Mikro-Spotify</h1>
    <p>Velg en sang for å spille av.</p>
  </header>

  <main>
    <section class="player">
      <audio id="player" controls preload="none"></audio>
      <div id="nowPlaying">Ingen sang valgt</div>
    </section>

    <section class="song-list">
      <ul id="songList">
        <% if (songs.length === 0) { %>
          <li>⚠️ Fant ingen lydfiler i <code>/public/audio</code>.</li>
        <% } %>
        <% songs.forEach((song, idx) => { %>
          <li class="song" data-file="<%= song.file %>">
            <button class="play" data-file="<%= song.file %>">▶</button>
            <span class="title"><%= song.title %></span>
          </li>
        <% }) %>
      </ul>
    </section>
  </main>

  <footer>
    <small>Laget med Node.js + Express + EJS</small>
  </footer>

  <script src="/script.js"></script>
</body>
</html>
```

---

## 5) Klientscript (`public/script.js`)

> Kobler klikk på sang til `<audio>`-spilleren.

```js
// public/script.js
const player = document.getElementById("player");
const list = document.getElementById("songList");
const nowPlaying = document.getElementById("nowPlaying");

function playFile(file, title = file) {
  player.src = `/audio/${file}`; // fordi /public er statisk, er /audio tilgjengelig
  player.play();
  nowPlaying.textContent = `Spiller nå: ${title}`;
}

list?.addEventListener("click", (e) => {
  const btn = e.target.closest(".play");
  if (!btn) return;
  const file = btn.dataset.file;
  const li = btn.closest(".song");
  const title = li?.querySelector(".title")?.textContent || file;
  playFile(file, title);
});

// Bonus: start første sang automatisk når siden lastes (kan slås av)
window.addEventListener("DOMContentLoaded", () => {
  const first = document.querySelector(".song .play");
  if (first) {
    // Ikke auto-start hvis dere ikke vil:
    // first.click();
  }
});
```

---

## 6) Ferdig CSS (`public/styles.css`)

> Kopier inn dette for et enkelt, ryddig design.

```css
:root {
  --bg: #0f1115;
  --panel: #171a21;
  --text: #e7eaf0;
  --muted: #a8b3cf;
  --accent: #1db954; /* Spotify-ish grønn */
  --accent-2: #1ed760;
  --border: #2a2f3a;
}
* { box-sizing: border-box; }
html, body { height: 100%; }
body {
  margin: 0;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
  color: var(--text);
  background: radial-gradient(1200px 600px at 80% -10%, #19202b 0%, var(--bg) 55%);
}
header {
  padding: 24px 20px 8px;
}
header h1 {
  margin: 0 0 6px;
  font-size: 28px;
}
header p { color: var(--muted); margin: 0; }

main { max-width: 900px; margin: 0 auto; padding: 16px; }
.player {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 6px 24px rgba(0,0,0,0.25);
}
.player audio { width: 100%; height: 40px; }
#nowPlaying { margin-top: 10px; color: var(--muted); }

.song-list { margin-top: 20px; }
#songList {
  list-style: none; padding: 0; margin: 0;
  display: grid; grid-template-columns: 1fr; gap: 10px;
}
.song {
  display: flex; align-items: center; gap: 10px;
  background: #12161d; border: 1px solid var(--border); border-radius: 12px;
  padding: 10px 12px;
}
.play {
  border: none; border-radius: 999px; padding: 8px 10px; cursor: pointer;
  background: var(--accent); color: #001b0b; font-weight: 700;
  transition: transform .06s ease;
}
.play:hover { filter: brightness(1.03); }
.play:active { transform: scale(0.98); }
.title { letter-spacing: .2px; }

footer { text-align: center; padding: 20px; color: var(--muted); }
```

---

## 7) Kjør prosjektet

```bash
npm run dev
```

Åpne **[http://localhost:3000](http://localhost:3000)** i nettleser. Klikk på en sang → spilleren setter `src` til filen og spiller den.

> **Vanlige feil**
>
> * Får du 404 på lydfilene? Sjekk at de ligger i `public/audio/` og at filnavn stemmer.
> * Ingen sanger vises? Sjekk filendelse (`.mp3`, `.wav`, `.ogg`) og at `server.js` peker til riktig mappe.

---

## 8) Hvordan data sendes til EJS

På serveren:

```js
res.render("index.ejs", { songs });
```

I `index.ejs` har dere direkte tilgang til `songs`:

```ejs
<% songs.forEach(s => { %>
  <li><%= s.title %></li>
<% }) %>
```

Dette er hele poenget: serveren leser filnavnene og **sender dem som data** til visningen.

---

## 9) Oppgaver (utvid prosjektet)

Gjør én og én, i rekkefølge. Alle er forenklede versjoner av ekte Spotify-funksjoner.

1. **Søkefelt (klientside)**
   Legg inn et `<input id="search">` over listen. Når eleven skriver, filtrer `<li>`-elementene ved å sjekke om `title` inkluderer søketeksten (case-insensitive).
   *Hint:* `input.addEventListener('input', ...)` og `element.style.display = 'none'`/`''`.

2. **Spilleliste (lokal)**
   Legg til en knapp «+ Legg til» ved siden av hver sang som putter filnavnet i en array i `localStorage` (f.eks. `playlist`). Vis en egen liste under spilleren som «Min spilleliste».
   *Hint:* `localStorage.setItem('playlist', JSON.stringify(arr))`.

3. **Neste/Forrige + Auto-neste**
   Legg til «⏮️» og «⏭️»-knapper ved spilleren. Hold styr på `currentIndex`. Når `player` får eventen `ended`, spill av neste sang automatisk.

4. **Favoritter (⭐)**
   La eleven merke en sang som favoritt (toggle-stjerne). Lagre i `localStorage` og vis en liten ⭐ ved tittelen hvis favoritt.
   *Hint:* Bruk en `Set`/array med filnavn.

5. **Sortering**
   Legg inn en `<select>` med «A–Å» og «Å–A». Sorter `li`-elementer i DOM basert på `title` når valget endres.

6. **Lydkontroll og tastatur**
   Legg til en `range`-slider for volum (`player.volume = value/100`).
   Gi tastatursnarveier: Mellomrom = play/pause, Pil høyre/venstre = spole 5 sek.

> **Ekstra for de ivrige**: Vis varighet og progresjon (bruk `timeupdate`), vis cover-bilde (hent f.eks. `song1.jpg` med samme navn om det finnes), eller implementer enkel server-side søkefunksjon med query-parametre (f.eks. `/?q=lofi`).

---

## 10) Oppsummering

* Serveren (Express) **leser filnavn** fra `public/audio/` og sender dem til `index.ejs` med `res.render("index", { songs })`.
* `index.ejs` viser listen. `script.js` håndterer klikk og spiller av valgt sang.
* CSS gir et ryddig, moderne uttrykk.
* Utvid med søk, spilleliste, auto-neste, favoritter, sortering og volum/tastatur.

Lykke til! 🎧
