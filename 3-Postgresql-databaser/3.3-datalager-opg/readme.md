# Oppdrag: Lagerstyring av datautstyr

## Oppdragsgiver: Nannestad Data AS

---

## 1. Bakgrunn

Nannestad Data AS leverer og drifter IT-løsninger for små og mellomstore bedrifter. Vi har mye datautstyr (PC-er, skjermer, rutere, kabler osv.) som brukes internt og som lånes ut til kunder. I dag føres dette på et enkelt Excel-ark. Det skaper utfordringer:

* Vanskelig å se hva som faktisk finnes på lager
* Uoversiktlig hvem som har lånt hva
* Lite kontroll på hvor gammelt utstyret er og når det bør byttes ut

Vi ønsker derfor en enkel, webbasert løsning for **lagerstyring av datautstyr**, bygget som en **Node.js-applikasjon** med **PostgreSQL-database**.

---

## 2. Mål med løsningen

Løsningen skal gi oss:

* Oversikt over alt datautstyr vi eier
* Mulighet til å registrere nytt utstyr
* Mulighet til å oppdatere status (på lager, utlånt, kassert osv.)
* Mulighet til å finne utstyr raskt gjennom søk og filtrering

Systemet skal være enkelt å bruke for ansatte på lager og drift.

---

## 3. Funksjonelle krav

Applikasjonen skal være en webapplikasjon hvor brukeren jobber i nettleser.

### 3.1 Hovedfunksjoner

1. **Liste alt utstyr**

   * Vise en tabell med alle registrerte enheter.
   * Kolonner skal minst inneholde:

     * navn
     * kategori
     * serienummer
     * status
     * plassering

2. **Registrere nytt utstyr**

   * Egen side / eget skjema for å registrere en ny enhet i databasen.
   * Etter registrering skal brukeren sendes tilbake til oversikten.

3. **Redigere utstyr**

   * Mulighet til å endre informasjon om en enhet (f.eks. status, plassering, kommentar).
   * Endringene skal lagres i databasen.

4. **Slette utstyr**

   * Mulighet til å fjerne enheter som ikke lenger skal være i systemet (f.eks. gammelt utstyr som er kassert).
   * Systemet skal be om en bekreftelse før sletting.

5. **Filtrere og søke**

   * Mulighet til å:

     * filtrere på **status** (f.eks. bare “på lager”, bare “utlånt”)
     * filtrere på **kategori**
     * søke på navn eller serienummer

---

## 4. Databasestruktur

Det skal brukes en **PostgreSQL-database**.

Forslag til databasenavn: `nannestaddata`
Forslag til tabellnavn: `datautstyr`

Tabellen for utstyr skal minst ha følgende kolonner:

* `id` – heltall, primærnøkkel, auto-increment (serial)
* `navn` – tekst (f.eks. «Lenovo ThinkPad L15»)
* `kategori` – tekst (f.eks. «PC», «Skjerm», «Ruter», «Skriver», «Kabel», «Annet»)
* `serienummer` – tekst, bør være unik per enhet
* `innkjopsdato` – dato (date)
* `status` – tekst, f.eks:

  * `på lager`
  * `utlånt`
  * `kassert`
  * `til reparasjon`
* `plassering` – tekst (f.eks. «Lagerrom A», «Kontor 2», «Hos kunde – Hansen AS»)
* `verdi` – tall (f.eks. innkjøpspris i kroner)
* `kommentar` – tekst (frivillig felt for mer info)

Dere kan gjerne utvide med flere tabeller (f.eks. tabell for kunder eller ansatte med utstyr) hvis dere ønsker, men dette er ikke et krav i første versjon.

---

## 5. Tekniske krav

### 5.1 Teknologier

* **Node.js**
* **Express** (webserver og routing)
* **pg** (PostgreSQL-klient for Node)
* **EJS** (templating for HTML-visning)
* **dotenv** (lese databaseinnstillinger fra .env)
* **nodemon** (for enklere utvikling)

### 5.2 Oppsett (rammer fra oppdragsgiver)

Prosjektet skal settes opp som et Node.js-prosjekt.
Typisk installasjon (som veiledning):

```bash
npm init -y
npm i express pg ejs dotenv
npm i -D nodemon
```

Det forventes at:

* **databasekonfigurasjon** (brukernavn, passord, databasenavn, host) ligger i `.env`-fil
* `.env` og `node_modules` er lagt til i `.gitignore`

Eksempel på variabler i `.env`:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=mittpassordher
DB_DATABASE=nannestaddata
```

---

## 6. Brukergrensesnitt

Applikasjonen skal bruke **EJS** for å vise sider i nettleseren.

Minimumskrav:

* Felles toppmeny / header med lenker til:

  * “Oversikt” (liste alt utstyr)
  * “Registrer utstyr”
* Oversiktsiden skal være lett å lese:

  * tabell med tydelige kolonneoverskrifter
  * knapper/lenker for **Rediger** og **Slett** på hver rad
* Skjema for å registrere og redigere utstyr skal ha:

  * fornuftige input-typer (dato-felt til dato, number til verdi osv.)
  * enkle feilmeldinger hvis viktig info mangler

Designet trenger ikke være avansert, men det skal være **ryddig og brukervennlig**.

---

## 7. Sikkerhet og gode praksiser

* Databasepassord og annen konfigurasjon skal **ikke** skrives direkte i koden, men i `.env`-fil.
* `.env` skal ikke sjekkes inn i Git (må stå i `.gitignore`).
* Det skal være enkel feilhåndtering:

  * Hvis databasen ikke svarer, skal ikke serveren krasje uten beskjed i terminal.
  * Hvis noe går galt ved lagring, bør brukeren få en enkel feilmelding på nettsiden.

Merk: Systemet vil i denne versjonen ikke ha innlogging eller rollebasert tilgang, men løsningen bør lages slik at det kunne vært lagt til senere.

---

## 8. Dokumentasjon som skal leveres

Som del av leveransen ønsker vi:

1. **Kort teknisk dokumentasjon** (for eksempel i en `README.md`):

   * Hvordan starte prosjektet
   * Hvilke tabeller finnes og hva de brukes til
   * Hvilke hovedsider/funksjoner løsningen har

2. **Skjermbilder**:

   * Oversiktssiden med utstyrsliste
   * Skjema for registrering av nytt utstyr
   * Skjema for redigering av eksisterende utstyr

3. **Kort refleksjon (noen setninger)** om:

   * Hvordan løsningen hjelper Nannestad Data AS med bedre lagerkontroll
   * Hvordan dere har tenkt på kvalitet og videreutvikling (f.eks. hva som kunne vært neste steg)

---

## 9. Ekstra (frivillig videreutvikling)

For grupper/elever som blir tidlig ferdig:

* Legg til en enkel **utlånslogg**:

  * Egen tabell for utlån (hvem, hvilket utstyr, fra–til dato)
* Legg til **fargekoder** i oversikten:

  * f.eks. grønn for “på lager”, gul for “utlånt”, rød for “kassert”
* Legg til mulighet for å sortere tabellen (f.eks. etter kategori, verdi, status)
