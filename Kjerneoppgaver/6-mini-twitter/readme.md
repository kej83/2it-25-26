# Superenkel «Twitter»-feed uten EJS (Node + Express)

Mål: Lag en minimal side der alle i klassen kan poste **brukernavn + melding**, og se alt i en felles feed – **kun med statiske filer i `public/`**. Ingen EJS.

Vi bruker:

* `express.static("public")` for å servere `index.html` og `style.css`
* `app.use(express.urlencoded(...))` for å lese `req.body`
* En enkel **minne-liste** (`messages`-array) på serveren
* Et **lite skript i `index.html`** som henter meldinger (`/messages`) og viser dem

> **NB:** Data forsvinner når serveren restartes (ingen database).

> **TIPS:** SKRIV AV, ikke kopier, all HTML og javascript/nodejs. MEN kopier gjerne style! Mens du skriver av, tenk over hva hver kodelinje gjør.
---

## 1) Start prosjektet

1. Lag mappe for prosjektet, f.eks. `mini-twitter/`.
2. Åpne mappen i VS Code.
3. Kjør i terminalen:

   ```bash
   npm init -y
   npm i express nodemon
   ```
4. Åpne `package.json` og legg til (behold resten som finnes):

   ```json
   {
     "type": "module",
     "scripts": {
       "start": "npx nodemon app.js"
     }
   }
   ```

---

## 2) Mappestruktur

Lag disse filene og mappene:

```
mini-twitter/
├─ app.js
└─ public/
   ├─ index.html
   └─ style.css
```

---

## 3) Serverkode (app.js)

Lim inn denne koden i `app.js`:

```js
import express from "express";

const app = express();
const PORT = 3000;

// 1) Statisk mappe for HTML, CSS og klient-JS
app.use(express.static("public"));

// 2) For å lese data fra <form> (req.body)
app.use(express.urlencoded({ extended: true }));

// 3) «Database» i minnet (forsvinner ved restart)
const messages = []; // hver melding: { username: "", text: "" }

// 4) Endepunkt som gir alle meldinger som JSON
app.get("/messages", (req, res) => {
  res.json(messages);
});

// 5) Motta skjemainnsending og legg til melding
app.post("/post", (req, res) => {
  const username = req.body.username;
  const text = req.body.text;

  if (username && text) {
    // Nyeste først
    messages.unshift({ username, text });
  }
  // Tilbake til forsiden (index.html i public/)
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Mini-Twitter kjører på http://localhost:${PORT}`);
});
```

---

## 4) Klientside (public/index.html)

Kopier inn dette i `public/index.html`:

```html
<!doctype html>
<html lang="no">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Mini-Twitter (uten EJS)</title>
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <h1>Mini-Twitter</h1>

  <form action="/post" method="POST" id="postForm">
    <input type="text" name="username" placeholder="Brukernavn (f.eks. Jens)" required>
    <textarea name="text" placeholder="Skriv meldingen din…" required></textarea>
    <button>Post</button>
  </form>

  <p id="counter" class="muted"></p>

  <section id="feed"></section>

  <script>
    // Hent og vis meldinger
    function fetchMessages() {
      fetch('/messages')
        .then(r => r.json())
        .then(list => {
          const feed = document.getElementById('feed');
          const counter = document.getElementById('counter');
          feed.innerHTML = '';

          if (!list || list.length === 0) {
            counter.textContent = 'Ingen meldinger ennå. Vær den første til å poste! 🎉';
            return;
          }

          counter.textContent = `Antall meldinger: ${list.length}`;

          list.forEach(m => {
            const article = document.createElement('article');
            article.className = 'msg';
            article.innerHTML = `
              <div class="meta"><span class="user">${escapeHtml(m.username)}</span></div>
              <p>${escapeHtml(m.text)}</p>
            `;
            feed.appendChild(article);
          });
        })
        .catch(() => {
          document.getElementById('counter').textContent = 'Klarte ikke å hente meldinger (server nede?)';
        });
    }

    // Enkel XSS-beskyttelse i klient (ikke nødvendig for å forstå, men greit å ha)
    function escapeHtml(str) {
      return String(str)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;');
    }

    // Hent meldinger når siden lastes
    fetchMessages();
  </script>
</body>
</html>
```

---

## 5) Stil (public/style.css)

Gi elevene denne CSS-en for å kopiere inn i `public/style.css`:

```css
body { font-family: system-ui, sans-serif; margin: 2rem auto; max-width: 720px; line-height: 1.5; }
h1 { margin-bottom: 1rem; }
form { display: grid; gap: .5rem; margin-bottom: 1rem; }
input, textarea, button { padding: .6rem .8rem; font-size: 1rem; }
textarea { min-height: 80px; }
.msg { border: 1px solid #ddd; padding: .75rem; border-radius: .5rem; margin-bottom: .75rem; }
.meta { color: #666; font-size: .9rem; margin-bottom: .25rem; }
.user { font-weight: 600; }
.muted { color: #666; margin: .5rem 0 1rem; }
```

---

## 6) Kjør prosjektet

```bash
npm start
```

Gå til `http://localhost:3000` i nettleseren. Åpne samme adresse på flere maskiner i klassen – alle ser samme feed (så lenge de treffer **din** server).

> **Tips:** Med `nodemon` slipper du å restarte serveren hver gang du endrer koden. Den starter på nytt automatisk.

---

## 7) Vanlige feil

* **404 på CSS/HTML:** Sjekk at filene ligger i `public/` og at `app.use(express.static("public"))` står tidlig i `app.js`.
* **`req.body` er tom:** Du mangler `app.use(express.urlencoded({ extended: true }))` eller `name`-attributt på input/textarea.
* **POST virker, men du ser ikke meldingen:** Husk at listen hentes fra `/messages`. Last siden på nytt.

---

## 8) Ekstraoppgaver (stigende vanskelighetsgrad)

1. **Vis nyeste øverst (bekreft):** Bytt `unshift` til `push` i `app.js`, se forskjellen, bytt tilbake til `unshift`.
2. **Telle meldinger:** (Hvis ikke gjort) Vis `Antall meldinger: X` i `#counter` (hint: lengden på lista fra `/messages`).
3. **Tom input-sikring på server:** I `app.post('/post')` – sørg for at tomme strenger ikke legges til (trim).
4. **Tidsstempel:** Legg til `time: new Date()` på hver melding i `app.js`, og vis klokkeslett/dato i klienten (`toLocaleString('no-NO')`).
5. **Nullstill feed uten reload:** Legg til en knapp som kjører `fetchMessages()` når du klikker (oppdaterer feed manuelt).
6. **Karakterteller i textarea:** Vis hvor mange tegn eleven har skrevet (live) og stopp ved f.eks. 200 tegn.
7. **Enkelt filter:** Lag en liten liste med ord som ikke er lov; hopp over meldinger som inneholder dem (server-side).
8. **Lagre til fil (avansert):** Bruk `fs` til å lagre `messages` til `messages.json` ved post, og les den inn ved oppstart.

---

🎉 Ferdig! Du har laget en superenkel klassedelings-feed – «Twitter»-stil – helt uten EJS, og med automatisk serverrestart med Nodemon.
