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


