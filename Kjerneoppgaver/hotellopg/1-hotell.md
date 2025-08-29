# Hotellprosjekt: Bygg et enkelt hotellsystem med HTML, CSS og JavaScript

## Introduksjon
Hei, elever! I dette prosjektet skal dere lage et enkelt hotellsystem som en nettside. Systemet skal tillate brukere å sjekke inn gjester, sjekke ut gjester, vise en oversikt over hvilke rom som er opptatt, og mer. Nettsiden skal ha minst to sider: en hovedsiden som presenterer hotellet og romtypene, og en bestillingsside der man kan booke rom.

Hotellet har **5 rom** totalt. Rommene representeres med et array i JavaScript, for eksempel:  
`let rom = ["", "Arne", "", "Per", "Sara"];`  
Dette betyr:  
- Rom 1: Ledig (tom streng "")  
- Rom 2: Opptatt av Arne  
- Rom 3: Ledig  
- Rom 4: Opptatt av Per  
- Rom 5: Opptatt av Sara  

Romtypene er:  
- Enkeltrom (pris: 500 kr/natt)  
- Dobbeltrom (pris: 800 kr/natt)  
- Suite (pris: 1200 kr/natt)  

Dere skal bruke riktige HTML-elementer (som `<header>`, `<nav>`, `<main>`, `<footer>`, `<img>`, `<video>`, `<audio>` osv.). CSS skal være i en egen fil for styling, og JavaScript i en egen fil for funksjonalitet. Bruk bilder for å vise romtypene, en video for å presentere hotellet (f.eks. en kort intro-video), og lyd for en velkomstlyd eller effekt.

**Viktig:** Dere har lært variabler, if-else, løkker og array – bruk disse! Ikke bruk objekter eller mer avanserte ting.

Prosjektet er delt i to deler:  
- **Del 1:** Komplette, stegvise instruksjoner for å lage grunnstrukturen og hovedsiden. Følg disse nøyaktig.  
- **Del 2:** Dere utvider selv med bestillingssiden og ekstra funksjonalitet. Dere får krav, men må tenke selv hvordan dere løser det.

## Mappestruktur
Opprett en mappe kalt `hotell-prosjekt`. Inni denne mappen skal filene ligge slik:  
- `index.html` – Hovedsiden (presentasjon av hotellet).  
- `booking.html` – Bestillingssiden (for å booke og administrere rom).  
- `styles.css` – CSS-fil for styling av hele nettsiden.  
- `script.js` – JavaScript-fil for funksjonalitet (kobles til begge HTML-filene).  
- `images/` – Mappe for bilder (f.eks. rombilder.jpg).  
- `media/` – Mappe for video og lyd (f.eks. intro.mp4 og velkomst.mp3).  

Eksempel:  
```
hotell-prosjekt/
├── index.html
├── booking.html
├── styles.css
├── script.js
├── images/
│   ├── enkeltrom.jpg
│   ├── dobbeltrom.jpg
│   └── suite.jpg
└── media/
    ├── intro.mp4
    └── velkomst.mp3
```

Last ned eller finn gratis bilder, video og lyd fra nettet (f.eks. fra Unsplash for bilder, eller fri musikk/video).

## Krav til nettsiden
- **Generelt:**  
  - Bruk semantiske HTML-elementer (f.eks. `<header>` for topp, `<nav>` for meny, `<main>` for hovedinnhold, `<footer>` for bunn).  
  - Koble CSS og JS til HTML-filene med `<link>` og `<script>`.  
  - Nettsiden skal være responsiv (bruk CSS media queries hvis dere vil, men det er valgfritt).  
  - Bruk `<img>` for bilder av romtypene.  
  - Bruk `<video>` for en intro-video på hovedsiden (med `controls` for avspilling).  
  - Bruk `<audio>` for en lyd (f.eks. en velkomstlyd som spilles automatisk eller ved klikk).  
  - Farger: Bruk CSS for å style (f.eks. bakgrunnsfarge #f0f0f0, overskrifter i blått).  

- **Hovedsiden (index.html):**  
  - Presenter hotellet med tekst, bilder og video.  
  - Vis romtypene med priser.  
  - Ha en meny med lenke til bestillingssiden.  

- **Bestillingssiden (booking.html):**  
  - Vis oversikt over rom (hvilke som er ledige/opptatt).  
  - Tillat innsjekk: Velg romtype, skriv inn navn, sjekk om ledig rom finnes.  
  - Tillat utsjekk: Velg romnummer, fjern gjest.  
  - Vis total pris basert på valgt romtype.  
  - Bruk array for å holde styr på rommene.  

- **Funksjonalitet (i script.js):**  
  - Bruk variabler for priser og array for rom.  
  - Bruk if-else for å sjekke om rom er ledig.  
  - Bruk løkker for å vise oversikt (f.eks. loop gjennom array og skriv ut romstatus).  
  - Oppdater siden dynamisk (f.eks. med `document.getElementById` for å vise meldinger).  

## Del 1: Komplette instruksjoner for grunnstrukturen og hovedsiden
Følg disse stegene nøyaktig for å lage grunnlaget. Dette er halvparten av prosjektet.

### Steg 1: Opprett filer og mappestruktur
- Opprett mappen `hotell-prosjekt` som beskrevet over.  
- Last ned bilder til `images/` (f.eks. enkeltrom.jpg, dobbeltrom.jpg, suite.jpg).  
- Last ned en kort video (intro.mp4) og lyd (velkomst.mp3) til `media/`.

### Steg 2: Lag styles.css
Åpne `styles.css` og skriv dette:  
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
}

header {
    background-color: #007bff;
    color: white;
    text-align: center;
    padding: 20px;
}

nav {
    background-color: #333;
    color: white;
    padding: 10px;
}

nav a {
    color: white;
    margin-right: 20px;
    text-decoration: none;
}

main {
    padding: 20px;
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
}

img {
    width: 300px;
    height: auto;
    margin: 10px;
}

video {
    width: 100%;
    max-width: 600px;
}
```

### Steg 3: Lag script.js (grunnlag)
Åpne `script.js` og skriv dette grunnlaget. Dere utvider det i Del 2.  
```javascript
// Array for rom (5 rom, starter ledige)
let rom = ["", "", "", "", ""];

// Variabler for priser
let prisEnkelt = 500;
let prisDobbelt = 800;
let prisSuite = 1200;

// Funksjon for å spille velkomstlyd (brukes senere)
function spillVelkomst() {
    let lyd = new Audio('media/velkomst.mp3');
    lyd.play();
}

// Kall denne når siden lastes (for hovedsiden)
window.onload = function() {
    if (document.title === "Hotell Hjem") {  // Sjekk om det er hovedsiden
        spillVelkomst();
    }
};
```

### Steg 4: Lag index.html (hovedsiden)
Åpne `index.html` og skriv dette:  
```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hotell Hjem</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
</head>
<body>
    <header>
        <h1>Velkommen til Hotell Hjem!</h1>
    </header>
    <nav>
        <a href="index.html">Hjem</a>
        <a href="booking.html">Bestill rom</a>
    </nav>
    <main>
        <h2>Om hotellet</h2>
        <p>Hotell Hjem er et koselig hotell med 5 rom. Se vår intro-video:</p>
        <video src="media/intro.mp4" controls></video>
        <audio id="velkomst" src="media/velkomst.mp3" autoplay></audio>  <!-- Autoplay for velkomst, men bruk JS for kontroll -->

        <h2>Romtyper</h2>
        <section>
            <h3>Enkeltrom - 500 kr/natt</h3>
            <img src="images/enkeltrom.jpg" alt="Enkeltrom">
        </section>
        <section>
            <h3>Dobbeltrom - 800 kr/natt</h3>
            <img src="images/dobbeltrom.jpg" alt="Dobbeltrom">
        </section>
        <section>
            <h3>Suite - 1200 kr/natt</h3>
            <img src="images/suite.jpg" alt="Suite">
        </section>
    </main>
    <footer>
        <p>&copy; 2025 Hotell Hjem</p>
    </footer>
</body>
</html>
```

### Steg 5: Test Del 1
Åpne `index.html` i en nettleser. Sjekk at styling fungerer, video vises, lyd spilles (via JS), og lenke til booking.html fungerer (selv om booking.html er tom ennå).

## Del 2: Utvid selv med bestillingssiden og funksjonalitet
Nå er det deres tur! Bruk det dere har lært om variabler, if-else, løkker og array til å utvide. Følg kravene, men tenk selv hvordan dere løser det. Legg til kode i `booking.html` og utvid `script.js`.

### Krav for Del 2
- Lag `booking.html` med samme struktur som index.html (header, nav, main, footer). Koble til styles.css og script.js.  
- I main:  
  - Et skjema for innsjekk: Velg romtype (bruk `<select>` med options for enkelt, dobbelt, suite), input for gjestenavn (`<input type="text">`), knapp for å booke (`<button>`).  
  - Et skjema for utsjekk: Input for romnummer (1-5), knapp for å sjekke ut.  
  - En oversikt: Bruk en løkke i JS for å vise romstatus (f.eks. "Rom 1: Ledig" eller "Rom 2: Opptatt av Arne"). Oppdater dette dynamisk når man booker/utsjekker.  
- I script.js:  
  - Utvid med funksjoner for innsjekk: Bruk if-else for å finne ledig rom basert på type (f.eks. rom 1-2 enkelt, 3-4 dobbelt, 5 suite – dere bestemmer inndeling). Loop gjennom array for å finne ledig (""). Hvis ledig, sett navn i array og vis melding + pris. Hvis fullt, vis feilmelding.  
  - Funksjon for utsjekk: Sjekk om romnummer gyldig (1-5 med if-else), sett array[rom-1] = "" hvis opptatt.  
  - Vis oversikt: Bruk document.getElementById for å sette tekst i et <div> eller <ul>.  
  - Kall funksjoner ved klikk på knapper (bruk addEventListener).  
- Ekstra: Legg til lyd-effekt ved booking (bruk <audio> og JS).  

Test alt! Sørg for at array oppdateres riktig, og at siden ikke laster om (bruk preventDefault hvis nødvendig). Lever inn hele mappen når dere er ferdige. Lykke til – vær kreative!