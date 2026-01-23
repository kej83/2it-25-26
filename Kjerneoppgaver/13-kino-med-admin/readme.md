## Bestilling fra oppdragsgiver: “Nordlys Kino – nettløsning med booking og intern admin”

### 1) Bakgrunn

Nordlys Kino trenger en ny nettløsning som både:

* **Eksternt** presenterer filmer, visningstider og lar gjester bestille billetter med setevalg.
* **Internt** gir ansatte oversikt og administrasjon av ansatte, gjester, filmer, saler, visninger og bookinger.

Løsningen skal bygges som et individuelt prosjekt per elev, men følge samme kravspesifikasjon.

---

## 2) Mål

* En moderne, brukervennlig kino-nettside med tydelig navigasjon og responsivt design.
* En robust bookingflyt der seter kan velges visuelt, og opptatte seter vises som utilgjengelige.
* All relevant data skal ligge i en PostgreSQL-database (filmer, visninger, saler, seter, bookinger, brukere).

---

## 3) Funksjonelle krav

### A) Offentlig del (gjester)

**A1. Forside / filmoversikt**

* Viser minst **2 ulike filmer**.
* For hver film skal det vises:

  * Plakat/bilde
  * Kort beskrivelse (sjanger, lengde, aldersgrense)
  * **Trailer** (YouTube-embed eller lokal video)
  * “Se visninger” / “Bestill billetter”-knapp

**A2. Film-detaljside**

* Mer detaljert info om filmen
* Trailer og flere bilder (minst 2 bilder per film anbefales)
* Liste over kommende visninger (dato/klokkeslett/sal)

**A3. Visningsoversikt**

* Filtrering/visning av visninger per dato og/eller film
* Klikk på visning tar brukeren til booking

**A4. Billettbestilling med grafisk setekart**

* Brukeren velger visning → får opp **grafisk setekart** for riktig sal
* Setekartet skal tydelig vise:

  * **Ledige seter** (kan klikkes)
  * **Opptatte seter** (låst/ikke klikkbare)
  * **Valgte seter** (markert)
* Brukeren fyller inn kontaktinfo (navn + e-post) før bekreftelse
* Systemet lagrer booking og reserverer setene i databasen
* Etter booking vises en bekreftelsesside med:

  * Film, dato/tid, sal, seter, antall billetter, referanse/booking-id

**A5. E-postbekreftelse**

* Når bestilling er fullført skal systemet sende en e-post til kunden med:

  * Bookingdetaljer + seter
  * Praktisk info (adresse, oppmøtetid, etc.)

---

### B) Intern del (ansatte/admin)

**B1. Innlogging**

* Egen intern del med autentisering (minimum: ansattbrukere i database)

**B2. Adminpanel**
Skal kunne administrere/ha oversikt over:

* **Ansatte** (liste, opprette, deaktivere)
* **Filmer** (opprette/redigere/slette)
* **Saler** (to saler, kapasitet og setestruktur)
* **Visninger** (opprette visninger knyttet til film + sal + tidspunkt)
* **Bookinger** (liste, se detaljer, evt. kansellere)

---

## 4) Kinosaler og setestruktur (fast krav)

Det finnes to saler:

* **Sal 1: 250 seter**

  * Setestruktur: **10 rader × 25 seter**
  * Rader nummereres: **Rad 1 (nærmest lerretet)** til **Rad 10**
  * Setenummer: **1–25**
  * Setevisning: f.eks. **Rad 3, sete 14** (kan også forkortes til **R3-S14** i UI)

* **Sal 2: 120 seter**

  * Setestruktur: **10 rader × 12 seter**
  * Rader nummereres: **Rad 1 (nærmest lerretet)** til **Rad 10**
  * Setenummer: **1–12**
  * Setevisning: f.eks. **Rad 8, sete 2** (R8-S2)

Setene skal vises i setekartet i et rutenett som matcher faktisk sal.

---

## 5) Datakrav (PostgreSQL)

All funksjonalitet skal drives av data fra databasen. Minimum må databasen inneholde:

* **films** (id, tittel, beskrivelse, sjanger, lengde, aldersgrense, trailer_url, bilder…)
* **halls** (id, navn, kapasitet)
* **seats** (id, hall_id, rad_nummer, seat_nummer) – seter defineres per sal
* **screenings** (id, film_id, hall_id, start_tidspunkt, evt. pris)
* **bookings** (id, screening_id, customer_name, customer_email, created_at, status)
* **booking_seats** (booking_id, seat_id) – hvilke seter en booking inneholder
* **employees/users** (id, navn, e-post, passord_hash, rolle)

**Viktig:** Systemet må kunne slå opp hvilke seter som er opptatt for en gitt visning (screening) basert på eksisterende bookinger.

---

## 6) Designkrav

* Moderne uttrykk: kino/underholdning, tydelig typografi, store bilder, gode kort/sections.
* Responsivt (mobil + desktop).
* Konsistent navigasjon på tvers av sider.
* God UX i bookingflyt (tydelig oversikt over valgte seter og total).

---

## 7) Teknologier som skal brukes (krav)

### Backend

* **Node.js**
* **Express**
* **EJS**
* **pg**
* **Nodemailer**
* (Anbefalt) **dotenv** for miljøvariabler

### Database

* **PostgreSQL**
* SQL for oppsett (create table / seed-data)

### Frontend

* HTML + CSS + JavaScript (klientside JS for setekart-interaksjon)
* Moderne styling (ren CSS eller valgfritt rammeverk)

---

## 8) Akseptansetest (må fungere før løsningen kan godkjennes)

### A) Navigasjon og sider

* [ ] Alle hovedsider kan nås via navigasjon (ingen “dead links”).
* [ ] Aktiv side er tydelig markert i meny (valgfritt, men ønskelig).
* [ ] Sider fungerer på mobil og desktop (responsivt).

### B) Filmer og media

* [ ] Minst 2 filmer vises på forsiden med bilde/plakat og kort info.
* [ ] Hver film har en egen detaljside.
* [ ] Trailer vises (YouTube embed eller lokal) for minst 2 filmer.
* [ ] Minst 2 bilder per film (f.eks. plakat + stillbilde) vises et sted i løsningen.

### C) Visninger

* [ ] Visningsoversikt viser kommende visninger med dato/tid og sal.
* [ ] Klikk på en visning åpner booking for riktig film og riktig sal.
* [ ] Visninger hentes fra databasen (ikke hardkodet).

### D) Setekart og valg

* [ ] Riktig setekart lastes basert på sal:

  * [ ] Sal 1: 10 rader × 25 seter (250)
  * [ ] Sal 2: 10 rader × 12 seter (120)
* [ ] Rader vises som **Rad 1–Rad 10**, der Rad 1 er nærmest lerretet.
* [ ] Ledige seter kan velges og avvelges.
* [ ] Opptatte seter kan ikke velges og har tydelig “opptatt”-stil.
* [ ] Valgte seter vises tydelig og listes også opp i bestillingsoppsummering (f.eks. “Rad 3 sete 14, Rad 3 sete 15”).

### E) Bookinglagring og dataintegritet

* [ ] Ved bekreftelse opprettes booking i databasen (bookings).
* [ ] Valgte seter knyttes til booking (booking_seats).
* [ ] Etter booking skal de valgte setene fremstå som opptatt ved ny åpning av samme visning.
* [ ] Systemet hindrer dobbeltbooking:

  * [ ] Hvis to brukere prøver samme sete samtidig, skal bare én booking lykkes (den andre får feilmelding/valg må oppdateres).

### F) E-post (Nodemailer)

* [ ] Ved fullført booking sendes e-post til kundens e-postadresse.
* [ ] E-posten inneholder minst: film, dato/tid, sal, seter, booking-id.
* [ ] Hvis e-postsending feiler, skal systemet håndtere det kontrollert (feilmelding/logg, ikke “crash”).

### G) Intern del (admin)

* [ ] Innlogging fungerer (feil passord gir avslag).
* [ ] Admin kan se lister over: filmer, visninger, bookinger.
* [ ] Admin kan opprette minst:

  * [ ] én ny film
  * [ ] én ny visning knyttet til film og sal
* [ ] Admin kan se bookingdetaljer inkl. seter.

### H) Sikkerhet og kvalitet (minimum)

* [ ] Passord lagres ikke i klartekst (hash i database).
* [ ] Brukerinput valideres (minstekrav: tomme felt stoppes, e-post må se ut som e-post).