# nodemailer mwe med Outlook

Her er et **minimum working example (MWE)** + **stegvis fremgangsmåte** for en Express-app som tar inn **tittel, e-post og melding** i et skjema og sender det som e-post til en **Outlook-adresse** via **Nodemailer**.

> Dette eksemplet bruker **ES modules** (`type: "module"`) siden det er slik elevene dine jobber.

---

## 1) Lag prosjekt og installer pakker

```bash
mkdir nodemailer-mwe
cd nodemailer-mwe
npm init -y
npm i express nodemailer dotenv
```

---

## 2) Sett opp filstruktur

Lag denne strukturen:

```
nodemailer-mwe/
  server.js
  .env
  views/
    index.ejs
    sent.ejs
```

---

## 3) Legg inn miljøvariabler i `.env`

Opprett filen `.env`:

```env
PORT=3000

# Outlook/Hotmail-kontoen du sender FRA
EMAIL_USER=din_outlook@outlook.com
EMAIL_PASS=ditt_passord_eller_app_passord

# Outlook-adressen som skal motta (kan være samme eller en annen)
TO_EMAIL=mottaker@outlook.com
```

**Viktig om Outlook-passord:**

* Hvis kontoen har **tofaktor/MFA**, må du ofte bruke et **app-passord** (vanlig passord kan bli blokkert).
* Hvis sending feiler med “auth”/“login”, er dette ofte grunnen.

---

## 4) Lag skjemaet i `views/index.ejs`

```ejs
<!doctype html>
<html lang="no">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Kontakt</title>
</head>
<body>
  <h1>Kontakt</h1>

  <form method="POST" action="/send">
    <div>
      <label for="title">Tittel</label><br />
      <input id="title" name="title" type="text" required />
    </div>

    <div>
      <label for="email">Din e-post</label><br />
      <input id="email" name="email" type="email" required />
    </div>

    <div>
      <label for="message">Melding</label><br />
      <textarea id="message" name="message" rows="6" required></textarea>
    </div>

    <button type="submit">Send</button>
  </form>
</body>
</html>
```

---

## 5) Lag “sendt”-side `views/sent.ejs`

```ejs
<!doctype html>
<html lang="no">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Sendt</title>
</head>
<body>
  <h1>E-post sendt ✅</h1>
  <p>Takk for meldingen!</p>
  <p><a href="/">Send en ny</a></p>
</body>
</html>
```

---

## 6) Lag serveren `server.js`

```js
import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// For å lese data fra HTML-skjema (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// View engine (EJS)
app.set("view engine", "ejs");

// Forside med skjema
app.get("/", (req, res) => {
  res.render("index");
});

// POST-endepunkt som sender e-post
app.post("/send", async (req, res) => {
  const { title, email, message } = req.body;

  // Enkel serverside-validering (MWE)
  if (!title || !email || !message) {
    return res.status(400).send("Mangler felt. Fyll ut tittel, e-post og melding.");
  }

  try {
    // Transport for Outlook/Office 365:
    // For outlook.com/hotmail.com fungerer ofte service: "outlook"
    // Alternativt kan du bruke host/port (se kommentar under).
    const transporter = nodemailer.createTransport({
      service: "outlook",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // E-postinnhold
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.TO_EMAIL,
      subject: `[Nettskjema] ${title}`,
      text:
        `Tittel: ${title}\n` +
        `Fra: ${email}\n\n` +
        `Melding:\n${message}\n`,
      replyTo: email, // gjør det enkelt å svare direkte til avsender
    };

    await transporter.sendMail(mailOptions);

    res.render("sent");
  } catch (err) {
    console.error(err);
    res.status(500).send("Kunne ikke sende e-post. Sjekk serverlogg og innstillinger.");
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server kjører på http://localhost:${process.env.PORT || 3000}`);
});
```

**Hvis `service: "outlook"` ikke funker hos dere**, bruk i stedet SMTP-innstillingene (ofte mer robust):

```js
const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

---

## 7) Oppdater `package.json` til ES modules + startscript

Åpne `package.json` og legg til:

```json
{
  "type": "module",
  "scripts": {
    "start": "node server.js"
  }
}
```

(Det er ok at `package.json` har flere felt – bare sørg for at `type` og `scripts` er med.)

---

## 8) Kjør prosjektet

```bash
npm start
```

Åpne:

* `http://localhost:3000`

Fyll ut skjemaet → trykk **Send** → du skal få “E-post sendt ✅” og e-posten skal komme til `TO_EMAIL`.

---

## Vanlige feil (rask feilsøk)

* **“Invalid login” / auth-feil**: Passord/MFA/app-passord er ofte problemet.
* **Ingenting kommer frem**: Sjekk **søppelpost/junk** i mottakerkontoen.
* **Appen krasjer ved POST**: Sjekk at du har `app.use(express.urlencoded(...))`.
* **.env leses ikke**: Sjekk at du har `dotenv.config()` helt øverst og at `.env` ligger i prosjektrota.

