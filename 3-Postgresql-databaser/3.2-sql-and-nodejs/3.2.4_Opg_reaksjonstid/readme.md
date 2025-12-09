# 🎯 Prosjekthefte: Reaksjonstid-spillet

## 🌟 Mål

Dette prosjektet lærer deg å bygge en fullstendig webapplikasjon (**Full Stack**) ved å koble frontend-spillogikk (HTML/JavaScript) med en Node.js-server og en PostgreSQL-database.

## ⚙️ Teknologistack

  * **Backend:** Node.js (med **Express**)
  * **Database:** PostgreSQL (med **pg**-modulen)
  * **Frontend-mal:** EJS
  * **Miljøvariabler:** dotenv
  * **Kodeformat:** ES Modules (`import/export`)

-----

## Del 1: Oppsett og Forberedelser

### 1\. Oppsett av Node.js Prosjekt

Åpne terminalen og kjør følgende kommandoer:

```bash
# Opprett prosjektmappe og naviger inn i den
mkdir reaction-game
cd reaction-game

# Initialiser Node.js prosjekt
npm init -y

# Installer nødvendige moduler
npm install express ejs pg dotenv
```

### 2\. Konfigurer ES Modules

Åpne filen `package.json` og legg til linjen `"type": "module"` for å aktivere moderne `import`-syntaks.

```json
{
  // ... andre linjer ...
  "main": "app.js",
  "type": "module",  <-- LEGG TIL DENNE LINJEN
  "scripts": {
    // ...
  }
}
```

### 3\. Filstruktur

Opprett mappene og filene som vist nedenfor:

```
/reaction-game
|-- app.js
|-- .env
|-- package.json
|-- /views
    |-- index.ejs
|-- /public
    |-- style.css
    |-- game.js (Frontend spillogikk)
```

### 4\. Databaseoppsett (PostgreSQL)

Kjør denne SQL-koden i ditt databaseverktøy for å opprette highscore-tabellen.

```sql
CREATE TABLE highscores (
    id SERIAL PRIMARY KEY,
    brukernavn VARCHAR(50) NOT NULL,
    gjennomsnittlig_tid_ms INTEGER NOT NULL,
    dato TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**MERK:** Vi lagrer tiden i millisekunder (`ms`) som et heltall (`INTEGER`).

### 5\. `.env` Filen

Opprett filen `.env` og fyll inn din lokale databaseinformasjon:

```ini
DB_USER=ditt_brukernavn
DB_HOST=localhost
DB_DATABASE=din_database
DB_PASSWORD=ditt_passord
DB_PORT=5432
```

-----

## Del 2: Backend Kode (MWE)

### 1\. `app.js` (Serverlogikk – Callback-stil)

Denne filen bruker **Express** til å håndtere ruter og **pg** (PostgreSQL) til å lagre og hente data.

```javascript
// app.js (Merk: Bruker import og callback-syntaks)

import express from 'express';
import pg from 'pg';
import 'dotenv/config'; 
import path from 'path';
import { fileURLToPath } from 'url';

// Standard Node.js-oppsett for ES Modules for å få tilgang til filstier
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Konfigurasjon
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// PostgreSQL Pool-konfigurasjon
const pool = new pg.Pool({
    user: process.env.DB_USER, host: process.env.DB_HOST,
    database: process.env.DB_DATABASE, password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// GET-rute: Hjemmeside og visning av highscore
app.get('/', (req, res) => {
    // SQL-spørring: Henter de 10 beste (raskeste) tidene
    const sql = `SELECT id, brukernavn, gjennomsnittlig_tid_ms FROM highscores 
                 ORDER BY gjennomsnittlig_tid_ms ASC LIMIT 10`;

    // Utfører spørring med callback
    pool.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            // Sender tom liste ved feil
            return res.render('index', { highscores: [] }); 
        }

        const highscores = result.rows; 
        res.render('index', { highscores: highscores }); 
    });
});

// POST-rute: Lagre ny highscore
app.post('/save-score', (req, res) => {
    // Henter data fra skjemaet (sendt fra game.js)
    const { brukernavn, tid_ms } = req.body;
    
    // Konverterer tid til tall
    const tidAsNumber = parseInt(tid_ms);

    // SQL-spørring (parametrisert for sikkerhet)
    const sql = 'INSERT INTO highscores (brukernavn, gjennomsnittlig_tid_ms) VALUES ($1, $2)';
    const values = [brukernavn, tidAsNumber];

    pool.query(sql, values, (err, result) => {
        if (err) {
            console.error("Feil ved lagring:", err);
            return res.send("<h1>Feil ved lagring av score</h1>");
        }
        
        // Sender brukeren tilbake til hovedsiden
        res.redirect('/');
    });
});

app.listen(PORT, () => {
    console.log(`Server kjører på http://localhost:${PORT}`);
});
```

-----

## Del 3: Frontend Kode (MWE)

### 1\. `views/index.ejs` (HTML-struktur og EJS-loop)

```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <title>Reaksjonstest</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>Reaksjonstid-spillet</h1>

    <div id="game-container">
        
        <form id="start-form">
            <p>Spillet tester din gjennomsnittlige reaksjonstid over 5 runder.</p>
            <label for="username">Skriv inn brukernavn:</label>
            <input type="text" id="username" required>
            <button type="submit">Start Testen (Runde 1/5)</button>
        </form>

        <div id="reaction-area" class="hidden">
            <h2 id="instructions">Vent på grønt...</h2>
            <div id="indicator"></div>
        </div>

        <form id="result-form" action="/save-score" method="POST" class="hidden">
            <h3>Test fullført!</h3>
            <p>Gjennomsnittlig tid: <span id="avg-time-display"></span> ms</p>
            
            <input type="hidden" name="brukernavn" id="final-username">
            <input type="hidden" name="tid_ms" id="final-score">
            
            <button type="submit">Lagre ditt Highscore</button>
        </form>

    </div>

    <div class="highscore-list">
        <h2>🥇 Highscore (Raskeste tid)</h2>
        <table>
            <thead>
                <tr>
                    <th>Plass</th>
                    <th>Brukernavn</th>
                    <th>Tid (ms)</th>
                </tr>
            </thead>
            <tbody>
                <% highscores.forEach((score, index) => { %>
                    <tr>
                        <td><%= index + 1 %></td>
                        <td><%= score.brukernavn %></td>
                        <td><%= score.gjennomsnittlig_tid_ms %></td>
                    </tr>
                <% }) %>
            </tbody>
        </table>
    </div>
    
    <script src="game.js"></script>
</body>
</html>
```

### 2\. `public/style.css`

```css
body { font-family: sans-serif; display: flex; flex-direction: column; align-items: center; background-color: #f4f4f9; }
#game-container { padding: 30px; border: 2px solid #333; border-radius: 12px; background-color: white; box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); width: 90%; max-width: 550px; text-align: center; margin-bottom: 20px;}
#indicator { width: 100px; height: 100px; background-color: blue; border-radius: 50%; margin: 20px auto; transition: background-color 0.1s; cursor: pointer;}
#indicator.ready { background-color: red; }
#indicator.go { background-color: green; }
#indicator.error { background-color: orange; }
#reaction-area h2 { color: blue; }
.highscore-list { width: 90%; max-width: 550px; margin-top: 20px; }
.highscore-list table { width: 100%; border-collapse: collapse; }
.highscore-list th, .highscore-list td { border: 1px solid #ddd; padding: 10px; text-align: left; }
.hidden { display: none; }
```

### 3\. `public/game.js` (Frontend Spillogikk)

```javascript
// game.js (Frontend logikk)

// Globale variabler
const startForm = document.getElementById('start-form');
const reactionArea = document.getElementById('reaction-area');
const indicator = document.getElementById('indicator');
const instructions = document.getElementById('instructions');
const resultForm = document.getElementById('result-form');
const avgTimeDisplay = document.getElementById('avg-time-display');
const finalUsernameInput = document.getElementById('final-username');
const finalScoreInput = document.getElementById('final-score');

let username = '';
let currentRound = 0;
const MAX_ROUNDS = 5;
let reactionTimes = []; 

let startTime; 
let timeoutId; 

// ----------------------------------------------------
// Spillfaser
// ----------------------------------------------------

// FASE 1: Starter spillet etter brukernavn er tastet inn
startForm.addEventListener('submit', (e) => {
    e.preventDefault();
    username = document.getElementById('username').value;
    
    startForm.classList.add('hidden');
    reactionArea.classList.remove('hidden');
    
    startNewRound();
});

// FASE 2: Starter en ny runde
function startNewRound() {
    currentRound++;
    if (currentRound > MAX_ROUNDS) {
        return endGame();
    }
    
    // Tilbakestill til startfarge
    indicator.className = '';
    instructions.innerText = `Runde ${currentRound}/${MAX_ROUNDS}: Vent på grønt...`;
    
    // Sett fargen til "Ready" (Rød)
    setTimeout(() => {
        indicator.classList.add('ready');
    }, 1000); // 1 sekund vent før fargeendring

    // Velger en tilfeldig ventetid (2000ms til 5000ms)
    const randomDelay = Math.random() * 3000 + 2000; 

    // Setter en timer for når fargen skal bli GRØNN
    timeoutId = setTimeout(() => {
        indicator.classList.remove('ready');
        indicator.classList.add('go');
        instructions.innerText = "KLIKK NÅ!";
        startTime = Date.now(); // Starter tidtakingen
    }, 1000 + randomDelay);
}

// FASE 3: Reaksjon (Klikk-event)
indicator.addEventListener('click', () => {
    // 1. KLIKKET FØR GRØNT
    if (indicator.classList.contains('ready')) {
        clearTimeout(timeoutId); // Stopper GRØNN-timeren
        
        indicator.classList.remove('ready');
        indicator.classList.add('error');
        instructions.innerText = `JUKSEFORSØK! Du klikket for tidlig. Start på nytt.`;
        
        // Tilbakestill spillet
        currentRound = 0;
        reactionTimes = [];
        setTimeout(() => {
            reactionArea.classList.add('hidden');
            startForm.classList.remove('hidden');
        }, 2000); 
        return;
    } 
    
    // 2. KLIKKET ETTER GRØNT
    if (indicator.classList.contains('go')) {
        const endTime = Date.now();
        const reactionTime = endTime - startTime;
        reactionTimes.push(reactionTime);
        
        indicator.classList.remove('go');
        instructions.innerText = `Din tid: ${reactionTime} ms. Fortsetter...`;
        
        // Starter neste runde etter en kort pause
        setTimeout(startNewRound, 1500);
        return;
    }
});

// FASE 4: Avslutning og lagring
function endGame() {
    reactionArea.classList.add('hidden');
    resultForm.classList.remove('hidden');
    
    // Regner ut gjennomsnittstiden
    const totalTime = reactionTimes.reduce((sum, time) => sum + time, 0);
    const averageTime = Math.round(totalTime / MAX_ROUNDS);
    
    // Viser og lagrer resultatene i skjemaet
    avgTimeDisplay.innerText = averageTime;
    finalUsernameInput.value = username;
    finalScoreInput.value = averageTime; 
}
```

-----

## Del 4: Oppgaver (Fokus på Node.js og Database)

Disse oppgavene krever at du endrer koden i **`app.js`** og/eller legger til ny SQL-kode.

### Oppgave 1: Vis Tidspunkt for Highscore

**Mål:** Legg til en kolonne i highscore-listen som viser nøyaktig når highscoren ble satt.

1.  **SQL:** Endre `highscores`-tabellen i databasen til å lagre dato/tid (dette er allerede på plass, men du må hente det).
2.  **`app.js` (GET-rute):** Endre SQL-spørringen i `app.get('/')` til å også velge (`SELECT`) kolonnen `dato`.
3.  **`index.ejs`:** Legg til en ny kolonne i highscore-tabellen (`<th>Dato</th>`) og bruk EJS (`<%= score.dato %>`) til å vise datoen for hver rad.

### Oppgave 2: Unngå Duplikat Brukernavn

**Mål:** Hvis en bruker sender inn en ny score med et brukernavn som allerede eksisterer, skal den *gamle* scoren oppdateres kun hvis den **nye er bedre (lavere tid)**.

1.  **SQL:** Du må nå sjekke databasen før du lagrer.
2.  **`app.js` (POST-rute):**
      * Før du utfører `INSERT`, utfør en `SELECT` for å se om brukernavnet finnes.
      * Hvis brukeren finnes, bruk `UPDATE` i stedet for `INSERT`, men kun hvis `tidAsNumber` er lavere enn den eksisterende tiden.

### Oppgave 3: Implementer Slett-funksjon (ADMIN-RUTE)

**Mål:** Lag en rute som lar deg slette alle highscores (kun for utvikling/testing).

1.  **`app.js`:** Lag en ny `app.get('/clear')` rute.
2.  **SQL:** Bruk SQL-kommandoen `DELETE FROM highscores` inne i den nye ruten.
3.  **Tilbakemelding:** Etter sletting, send brukeren en melding (f.eks. `res.send("Highscores slettet. <a href='/'>Tilbake</a>");`).

### Oppgave 4: Legg til feilhåndtering for Databasetilkobling

**Mål:** Forbedre feilhåndteringen hvis databasen ikke er tilgjengelig.

1.  **`app.js` (Alle ruter):** Sørg for at du har logikken for `if (err)` på plass i *alle* `pool.query` kall.
2.  **Feilmelding:** I stedet for bare `console.error(err)`, send en mer brukervennlig feilmelding tilbake til klienten (f.eks. `res.status(500).send("Beklager, klarte ikke koble til databasen.");`).

### Oppgave 5: Gjennomsnittlig Reaksjonstid for Alle Brukere

**Mål:** Vis den gjennomsnittlige reaksjonstiden for **alle registrerte spillere** under highscore-listen.

1.  **`app.js` (GET-rute):** Legg til en ekstra SQL-spørring i `app.get('/')` (du må bruke nestede callbacks her, eller konvertere til `async/await` hvis du vil prøve deg på det).
2.  **SQL:** Bruk aggregeringsfunksjonen `AVG()`:
    ```sql
    SELECT AVG(gjennomsnittlig_tid_ms) FROM highscores;
    ```
3.  **EJS:** Send denne gjennomsnittstiden til `index.ejs` og vis den under tabellen.