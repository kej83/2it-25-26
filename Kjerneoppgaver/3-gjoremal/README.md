# Gjøremålsliste – Oppgave

I denne oppgaven skal du lage en enkel **gjøremålsliste** i HTML, CSS og JavaScript.  
Vi starter med et ferdig oppsett av nettsiden (HTML og CSS er klart), og et påbegynt `app.js` med **TODO-kommentarer** du skal fullføre.  

---

## Oppgavebeskrivelse
- Legg til nye gjøremål i en liste.
- Skriv ut listen slik at hvert gjøremål vises med sitt **index-nummer** (0, 1, 2, …).
- Vis antall gjøremål nederst.
- Slett et gjøremål ved å skrive inn index-nummeret og trykke på **Slett oppgave**.
- Når et gjøremål slettes, skal antallet oppdateres.

---

## Filstruktur
Når du pakker ut zip-filen finner du disse filene:
```

gjoremal/
├─ index.html
├─ styles.css
└─ app.js

```

- `index.html` – ferdig HTML med felter og knapper.
- `styles.css` – ferdig styling.
- `app.js` – koden du skal jobbe i. Her er mange **TODO-oppgaver**.

---

## Forslag til arbeidsrekkefølge
Start med de enkleste funksjonene og bygg videre steg for steg:

1. **erGyldigTekst**  
   Sjekk at en tekst ikke er tom.

2. **leggTilOppgave**  
   Legg til en ny streng bakerst i arrayen.

3. **tellOppgaver**  
   Bruk en for-løkke for å telle hvor mange elementer det er i arrayen.

4. **renderTeller**  
   Oppdater `<p id="utAntallTotal">` med teksten:  
   `Antall oppgaver: X`

5. **visMelding**  
   Vis en kort melding til brukeren i `<p id="utMelding">`.

6. **slettOppgave**  
   Fjern en oppgave fra arrayen basert på index (bruk `splice`).

7. **Koble til hendelser**  
   - Legg til oppgave når skjemaet sendes inn.  
   - Slett oppgave når du trykker på «Slett oppgave»-knappen.

---

## Ekstraoppgaver / Utfordringer
Når grunnpakken fungerer, kan du prøve noen ekstra ting:

- **Valider index ved sletting**  
  Gi feilmelding hvis brukeren skriver et ugyldig tall.

- **Tøm alle oppgaver**  
  Lag en knapp som sletter alle gjøremål på en gang.

- **Bekreftelse**  
  Be brukeren bekrefte sletting (f.eks. «Er du sikker?»).

- **Sorter gjøremål**  
  Lag en knapp for å sortere listen alfabetisk.

- **Rediger oppgave**  
  Gjør det mulig å endre teksten på et gjøremål.

- **Lagring i localStorage**  
  Lagre oppgavene slik at de fortsatt er der etter at du oppdaterer siden.

---

## Tips
- Bruk **for-løkker** og **if-else** for å løse oppgavene trinn for trinn.  
- Ikke prøv å løse alt på én gang – test litt og litt underveis.  
- Start med å få visning av antall oppgaver til å fungere riktig.  
- Bruk `console.log()` for å sjekke hva som skjer i koden din.

---

Lykke til 🚀
```