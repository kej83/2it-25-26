# 🎧 Oppgave: Lag din egen mini-jukeboks med Express

## 🎯 Mål

Du skal lage en liten web-app som spiller **rock** eller **pop**-musikk når du skriver i adressefeltet:

```
http://localhost:3000/sang?stil=rock
http://localhost:3000/sang?stil=pop
```

---

## 🧰 Før du starter

1️⃣ Opprett mappe og start Node-prosjekt:

```bash
mkdir jukeboks && cd jukeboks
npm init -y
```

2️⃣ Installer Express og nodemon:

```bash
npm i express
npm i -D nodemon
```

3️⃣ Åpne `package.json` og legg inn:

```json
{
  "type": "module",
  "scripts": {
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.19.2"
  }
}
```

4️⃣ Lag filen **server.js**.

---

## 📁 Lag mappestruktur og musikkfiler

Opprett mappene:

```
jukeboks/
├─ server.js
└─ public/
   └─ audio/
      ├─ rock.mp3
      └─ pop.mp3
```

Legg to korte lydklipp i `public/audio/` med navnene **rock.mp3** og **pop.mp3**.
(Det kan være dine egne små lydfiler.)

---

## 💻 Startkoden (denne får du)

Kopier alt dette inn i `server.js`:

```js
import express from "express";
const app = express();
const port = 3000;

// Gjør public-mappen tilgjengelig slik at lydfilene kan spilles av
app.use(express.static("public"));

// TODO: Lag ruten /sang her!

// Ferdig meny på forsiden
app.get("/", (req, res) => {
  res.send(`
    <h1>🎶 Min Jukeboks</h1>
    <p>Velg sangtype:</p>
    <ul>
      <li><a href="/sang?stil=rock">Spill ROCK 🎸</a></li>
      <li><a href="/sang?stil=pop">Spill POP 🎤</a></li>
    </ul>
    <p>Hint: Du må lese <code>req.query.stil</code> i din /sang-rute.</p>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

---

## 🧩 Oppgave: Lag /sang-ruten selv

Under kommentaren `// TODO: Lag ruten /sang her!` skal du skrive koden som:

1. Leser **stil** fra `req.query.stil`
2. Hvis `stil` er `"rock"`, skal `<audio>`-tag vise `/audio/rock.mp3`
3. Hvis `stil` er `"pop"`, skal `<audio>`-tag vise `/audio/pop.mp3`
4. Hvis `stil` mangler eller er noe annet, vis en kort feilmelding med lenker til riktige valg

💡 Tips:

```js
app.get("/sang", (req, res) => {
  const stil = req.query.stil;
  // ... skriv logikken din her!
});
```

---

## 🎧 Eksempel på hvordan det skal fungere

### Når du besøker:

```
http://localhost:3000/sang?stil=rock
```

skal du se en side som viser:

```
🎸 Spiller rock
[lydavspiller her]
```

### Når du besøker:

```
http://localhost:3000/sang?stil=pop
```

skal du se:

```
🎤 Spiller pop
[lydavspiller her]
```

### Når du besøker uten `?stil`:

```
http://localhost:3000/sang
```

skal du få beskjed om å bruke `?stil=rock` eller `?stil=pop`.

---

## ▶️ Kjør serveren

```bash
npm run dev
```

Åpne nettleseren og test:

* [http://localhost:3000/](http://localhost:3000/)
* [http://localhost:3000/sang?stil=rock](http://localhost:3000/sang?stil=rock)
* [http://localhost:3000/sang?stil=pop](http://localhost:3000/sang?stil=pop)

---

## 💪 Ekstra utfordring (frivillig)

* Legg til `?loop=1` for å gjenta sangen automatisk (`<audio loop>`).
* Lag `/random` som spiller tilfeldig sjanger (rock eller pop).
* Lag en tredje lydfil (f.eks. jazz) og få den til å virke også.