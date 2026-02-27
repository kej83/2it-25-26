# Oppgave: Design din egen Star Wars-database
Basert på dataene her: **swapi.info**.
Dere skal slutte å bare *se* på dataene fra API-et, og heller begynne å *eie* dem. Målet er å lage en database i PostgreSQL som kan lagre informasjon om karakterer, artene de tilhører og planetene de kommer fra.

### Krav til databasestrukturen

Dere skal skrive SQL-koden for å opprette **3 tabeller**. Tabellene må være knyttet sammen med fremmednøkler slik at databasen forstår sammenhengene.

#### 1. Tabell: `planets`

Denne tabellen skal lagre informasjon om hjemplanetene.

* **ID:** Et unikt nummer (Primary Key).
* **Navn:** Navnet på planeten (f.eks. "Tatooine").
* **Terreng:** Hva slags landskap planeten har.
* **Populasjon:** Hvor mange som bor der (Husk: dette tallet kan være veldig stort!).

#### 2. Tabell: `species`

Denne tabellen skal lagre informasjon om de ulike artene.

* **ID:** Et unikt nummer (Primary Key).
* **Navn:** Navnet på arten (f.eks. "Droid" eller "Wookie").
* **Språk:** Hvilket språk arten snakker.

#### 3. Tabell: `people` (Hovedtabellen)

Dette er tabellen som knytter alt sammen. Her skal dere lagre karakterene.

* **ID:** Et unikt nummer (Primary Key).
* **Navn:** Karakterens navn.
* **Fødselsår:** (f.eks. "19BBY").
* **Planet-ID:** En referanse til hvilken planet de kommer fra (**Fremmednøkkel** til `planets`).
* **Art-ID:** En referanse til hvilken art de tilhører (**Fremmednøkkel** til `species`).

---

#### 4. Data:
Fyll nå tabellene med Star Wars data. Bruk data fra api-et! Bruk KI eller api-requests.

### Tips:

1. **Rekkefølge er viktig:** Du kan ikke lage en tabell som peker på en `planet_id` før tabellen `planets` faktisk eksisterer. Tenk over hvilken tabell som må lages først, og hvilken som må lages sist.
2. **Datatyper:** Bruk `SERIAL` for ID-er som skal telle seg selv opp, `VARCHAR` for tekst, og `BIGINT` for store tall.
3. **Relasjoner:**
* **Mange-til-En:** Mange personer kan komme fra samme planet. Dette løser dere ved å legge `planet_id` i `people`-tabellen.

## Del 2: nodejs app
Lag en nettside med knapper. Hver knapp tilsvarer en av disse oppgavene. Nodejs-appen skal kommunisere med databaseserveren din og hente data derfra.

Bruk SQL-spørringer for å hente ut riktig informasjon fra databasen din.

### Nivå: Rekrutt (Kun SELECT)

1. **Navneliste:** Hent ut en liste over alle navnene i `people`-tabellen.
2. **Planet-info:** Hent ut navn, terreng og populasjon for alle planeter i `planets`.
3. **Artenes oversikt:** Vis navnet og språket til alle artene i `species`.
4. **Karakter-detaljer:** Hent ut både navn og fødselsår for alle karakterene.

### Nivå: Padawan (Enkel WHERE)

5. **Blått blikk:** Finn navnet på alle karakterer som har blå øyne (`blue`).
6. **Ørkensand:** Finn alle planeter som har terreng (`terrain`) som er nøyaktig `desert`.
7. **Hjemme hos ID 1:** Finn alle karakterer som er knyttet til `planet_id` nummer 1.
8. **Høyvekst:** Finn navnet på alle karakterer som er høyere enn 200 cm.

### Nivå: Jedi-ridder (Mønster og Logikk)

9. **Skywalker-slekten:** Bruk `LIKE` for å finne alle karakterer som har et navn som starter på "Skywalker".
10. **Farlig klima:** Finn alle planeter som har et klima som er *enten* `frozen` eller `murky`.
11. **Små roboter:** Finn alle karakterer som har `species_id` for Droid (finn tallet først!) OG som er lavere enn 100 cm.
12. **Befolkningssjokk:** Finn alle planeter som har mer enn 1 milliard innbyggere (Tips: `population > 1000000000`).

---

### Verktøykasse for oppgavene

| SQL-kommando | Bruksområde |
| --- | --- |
| **`SELECT kolonne_navn`** | Velger hvilke "overskrifter" du vil se. |
| **`SELECT *`** | Velger **alt** (alle kolonner) i tabellen. |
| **`FROM tabell_navn`** | Forteller hvilken tabell du skal hente fra. |
| **`WHERE`** | Brukes for å filtrere slik at du bare ser radene som passer kravet ditt. |
| **`AND` / `OR**` | Brukes for å kombinere flere krav i samme `WHERE`. |




