# Elevhandout: MWE av engelsk grammatikk-app med EJS, Express og Ollama

Hei! Her skal dere lage et **Minimal Working Example (MWE)** av en enkel engelsk grammatikk-app.

Appen skal:

* hente et grammatikkspørsmål fra en LLM via **Ollama**
* vise spørsmålet på nettsiden
* la brukeren skrive inn et svar
* sende svaret til serveren
* få LLM-en til å sjekke svaret
* vise tilbakemelding på siden

Dette er ikke en ferdig app, men et godt startpunkt.

---

## Før dere begynner

Dere må ha dette klart:

* **Node.js** installert
* **Ollama** installert
* en modell lastet ned, for eksempel `llama3:8b`

Hvis modellen ikke er lastet ned, kan dere bruke:

```bash
ollama pull llama3:8b
```

---

# Steg 1: Lag prosjektmappen

Åpne terminalen og skriv:

```bash
mkdir grammatikk-mwe
cd grammatikk-mwe
npm init -y
```

Dette lager en ny prosjektmappe med en `package.json`.

---

# Steg 2: Installer pakkene

Installer pakkene dere trenger:

```bash
npm install express ejs axios
```

Disse bruker vi til:

* **express** → webserver
* **ejs** → dynamiske HTML-sider
* **axios** → sende forespørsler til Ollama

---

# Steg 3: Endre `package.json` til module

Åpne `package.json` og legg til:

```json
"type": "module"
```

Filen kan for eksempel se slik ut:

```json
{
  "name": "grammatikk-mwe",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "type": "module",
  "scripts": {
    "start": "node app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^1.13.2",
    "ejs": "^3.1.10",
    "express": "^5.1.0"
  }
}
```

---

# Steg 4: Lag mappestrukturen

Prosjektet skal se slik ut:

```text
grammatikk-mwe/
│
├── app.js
├── package.json
├── public/
│   └── style.css
└── views/
    └── index.ejs
```

Lag mappene med:

```bash
mkdir views
mkdir public
```

---

# Steg 5: Lag `app.js`

Opprett filen `app.js` i rotmappen og lim inn denne koden:

```javascript
import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

// Sett EJS som template engine
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// GET /
// Hent et grammatikkspørsmål fra Ollama og vis det på siden
app.get("/", async (req, res) => {
  try {
    const prompt = `
Generate one simple English grammar question for 7th grade students.
Use topics like verb tense, pronouns, plural nouns, or articles.
Output only the question text.
`;

    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "llama3:8b",
      prompt: prompt,
      stream: false
    });

    const question = response.data.response.trim();

    res.render("index", {
      question: question,
      feedback: null
    });
  } catch (error) {
    console.error("Feil ved generering av spørsmål:", error.message);

    res.render("index", {
      question: "Feil ved generering av spørsmål.",
      feedback: null
    });
  }
});

// POST /answer
// Ta imot svaret fra brukeren og få LLM-en til å sjekke det
app.post("/answer", async (req, res) => {
  const userAnswer = req.body.answer;
  const question = req.body.question;

  try {
    const checkPrompt = `
You are helping a 7th grade student with English grammar.

Question: "${question}"
Student answer: "${userAnswer}"

Check if the answer is correct.
Reply like this:
Correct: Yes or No
Feedback: short explanation
`;

    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "llama3:8b",
      prompt: checkPrompt,
      stream: false
    });

    const feedback = response.data.response.trim();

    res.render("index", {
      question: question,
      feedback: feedback
    });
  } catch (error) {
    console.error("Feil ved sjekking av svar:", error.message);

    res.render("index", {
      question: question,
      feedback: "Feil ved sjekking av svar."
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Serveren kjører på http://localhost:${port}`);
});
```

---

# Steg 6: Forklaring av `app.js`

Her er det viktigste som skjer:

## Importer

Vi bruker `import` fordi prosjektet har:

```json
"type": "module"
```

Derfor skriver vi:

```javascript
import express from "express";
import axios from "axios";
```

og ikke `require()`.

## `express.urlencoded(...)`

Denne linjen gjør at serveren kan lese data fra skjema:

```javascript
app.use(express.urlencoded({ extended: true }));
```

Derfor trenger vi **ikke** `body-parser`.

## `express.static("public")`

Denne linjen gjør at Express kan sende ut filer fra `public`-mappen:

```javascript
app.use(express.static("public"));
```

Da kan nettleseren hente `style.css`.

## `app.get("/")`

Når brukeren går til startsiden:

* sender serveren en prompt til Ollama
* får tilbake et spørsmål
* sender spørsmålet til `index.ejs`

## `app.post("/answer")`

Når brukeren sender inn et svar:

* serveren henter svaret
* sender spørsmålet og svaret til Ollama
* får tilbake tilbakemelding
* viser tilbakemeldingen på siden

---

# Steg 7: Lag `views/index.ejs`

Lag filen `views/index.ejs` og lim inn dette:

```html
<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="UTF-8">
  <title>Engelsk grammatikk</title>
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <main class="container">
    <h1>Øv på engelsk grammatikk</h1>

    <p class="question">
      <strong>Spørsmål:</strong> <%= question %>
    </p>

    <form action="/answer" method="post">
      <input type="hidden" name="question" value="<%= question %>">

      <input
        type="text"
        name="answer"
        placeholder="Skriv svaret ditt her"
        required
      >

      <button type="submit">Send svar</button>
    </form>

    <% if (feedback) { %>
      <div class="feedback">
        <strong>Tilbakemelding:</strong>
        <p><%= feedback %></p>
      </div>
    <% } %>
  </main>
</body>
</html>
```

---

# Steg 8: Lag `public/style.css`

Lag filen `public/style.css` og lim inn dette:

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f6f8;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 700px;
  margin: 60px auto;
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}

.question {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

input[type="text"] {
  width: 300px;
  padding: 10px;
  font-size: 1rem;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  background-color: #2e8b57;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}

.feedback {
  margin-top: 25px;
  padding: 15px;
  background-color: #eef6ff;
  border-radius: 8px;
}
```

---

# Steg 9: Hvorfor fungerer CSS-filen?

I `index.ejs` kobler vi til CSS-filen slik:

```html
<link rel="stylesheet" href="/style.css">
```

Dette virker fordi vi i `app.js` har skrevet:

```javascript
app.use(express.static("public"));
```

Det betyr at filer i `public` blir tilgjengelige i nettleseren.

---

# Steg 10: Kjør appen

Start Ollama først.

Deretter starter dere appen med:

```bash
node app.js
```

eller:

```bash
npm start
```

Gå så til:

```text
http://localhost:3000
```

---

# Steg 11: Test appen

Når appen virker, skal dere kunne:

* se et grammatikkspørsmål
* skrive inn et svar
* trykke på knappen
* få tilbakemelding tilbake på siden

---

# Feilsøking

## Får dere ikke kontakt med Ollama?

Sjekk at Ollama kjører.

Test gjerne med:

```bash
curl http://localhost:11434/api/generate -d '{"model":"llama3:8b","prompt":"Say hello","stream":false}'
```

## Får dere ikke lastet inn CSS?

Sjekk:

* at filen heter `style.css`
* at den ligger i `public`
* at dere har denne linjen i `app.js`:

```javascript
app.use(express.static("public"));
```

* at dere har denne linjen i `index.ejs`:

```html
<link rel="stylesheet" href="/style.css">
```

## Får dere feil med `import`?

Sjekk at `package.json` har:

```json
"type": "module"
```

---

# Oppsummering

I dette MWE-et har dere brukt:

* **Express** til server
* **EJS** til HTML-side
* **forms** til å sende svar
* **axios** til å snakke med Ollama
* **public-mappe** til CSS
* **module syntax** med `import`

---

# Videre arbeid

Når dette fungerer, kan dere bygge videre med:

* få llm til å huske elevens status, slik at den kan tilpasse vanskegraden til elevens historikk!
* flere spørsmål
* poengsystem
* nivåer
* lagring i database
* innlogging
* lærerside med oversikt