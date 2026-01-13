## PostgreSQL CRUD – Minihefte (45 min)

**Case:** *NordBil AS* (bilforhandler) vil lagre biler til salgs, kunder og salg.

### Mål for økta

Du skal kunne:

* Lage database og tabeller (**CREATE**)
* Legge inn data (**INSERT**)
* Søke og filtrere (**READ / SELECT**)
* Oppdatere data (**UPDATE**)
* Slette data (**DELETE**)
* Gjøre små endringer i strukturen (**ALTER TABLE**) *(bonus)*

---

# 1) Referanseark (de mest brukte kommandoene)

## A) psql (terminal) – nyttige meta-kommandoer

```sql
\l                 -- list databaser
\c nordbil         -- koble til database
\dt                -- list tabeller
\d biler           -- vis struktur for tabell
\x                -- “pretty view” på/av (lesbart output)
\q                -- avslutt
```

## B) Database

```sql
CREATE DATABASE nordbil;
DROP DATABASE nordbil;          -- OBS: sletter alt
```

## C) Tabeller (CREATE)

Vanlige typer:

* `INT`, `VARCHAR(n)`, `TEXT`, `NUMERIC(10,2)`, `DATE`, `BOOLEAN`, `TIMESTAMP`

Eksempel:

```sql
CREATE TABLE eksempel (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  navn VARCHAR(50) NOT NULL,
  pris NUMERIC(10,2) CHECK (pris >= 0)
);
```

## D) Legge inn data (INSERT)

```sql
INSERT INTO biler (regnr, merke, modell, aar, km, pris, status)
VALUES ('AB12345', 'Toyota', 'Corolla', 2018, 65000, 189000, 'til_salgs');

-- Flere rader:
INSERT INTO kunder (navn, telefon, epost) VALUES
('Ola Nordmann', '90000000', 'ola@epost.no'),
('Kari Nordmann', '91111111', 'kari@epost.no');
```

## E) Søk (READ / SELECT)

```sql
SELECT * FROM biler;

SELECT merke, modell, pris
FROM biler
WHERE pris < 200000 AND status = 'til_salgs'
ORDER BY pris ASC
LIMIT 5;

-- Mønstersøk
SELECT * FROM biler WHERE modell ILIKE '%golf%';

-- “IN”
SELECT * FROM biler WHERE merke IN ('Toyota', 'Volkswagen');
```

## F) Oppdatere (UPDATE)

**Tips:** Bruk alltid `WHERE` (ellers endrer du ALLE rader).

```sql
UPDATE biler
SET pris = pris - 10000
WHERE status = 'til_salgs'
RETURNING *;     -- viser hva som ble endret
```

## G) Slette (DELETE)

**Tips:** Bruk alltid `WHERE`.

```sql
DELETE FROM biler
WHERE regnr = 'AB12345'
RETURNING *;
```

## H) Endre struktur (ALTER TABLE) – bonus

```sql
ALTER TABLE biler ADD COLUMN farge VARCHAR(20);
ALTER TABLE biler RENAME COLUMN km TO kilometer;
ALTER TABLE biler DROP COLUMN farge;
```

## I) JOIN (koble tabeller) – bonus

```sql
SELECT s.id, b.merke, b.modell, k.navn, s.salgspris, s.salgsdato
FROM salg s
JOIN biler b ON s.bil_id = b.id
JOIN kunder k ON s.kunde_id = k.id;
```

## J) Aggregat (COUNT/AVG) – bonus

```sql
SELECT merke, COUNT(*) AS antall
FROM biler
WHERE status = 'til_salgs'
GROUP BY merke
ORDER BY antall DESC;
```

---

# 2) Caseoppsett: NordBil AS

## Steg 1: Lag database og koble til

Kjør i psql:

```sql
CREATE DATABASE nordbil;
\c nordbil
```

## Steg 2: Lag tabeller

Kjør:

```sql
CREATE TABLE biler (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  regnr VARCHAR(10) UNIQUE NOT NULL,
  merke VARCHAR(30) NOT NULL,
  modell VARCHAR(30) NOT NULL,
  aar INT CHECK (aar >= 1980),
  km INT CHECK (km >= 0),
  pris NUMERIC(10,2) CHECK (pris >= 0),
  status VARCHAR(15) NOT NULL DEFAULT 'til_salgs',  -- til_salgs / solgt
  lagt_inn TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE kunder (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  navn VARCHAR(60) NOT NULL,
  telefon VARCHAR(20),
  epost VARCHAR(80) UNIQUE
);

CREATE TABLE salg (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  bil_id INT UNIQUE NOT NULL REFERENCES biler(id),
  kunde_id INT NOT NULL REFERENCES kunder(id),
  salgsdato DATE NOT NULL DEFAULT CURRENT_DATE,
  salgspris NUMERIC(10,2) CHECK (salgspris >= 0)
);
```

---

# 3) Oppgaver (henger sammen)

## Del A – INSERT (5–8 min)

1. Legg inn **minst 6 biler** (varier merke/modell/pris/km/år).
2. Legg inn **minst 3 kunder**.

**Tips – startdatasett (kan kopieres og endres):**

```sql
INSERT INTO biler (regnr, merke, modell, aar, km, pris, status) VALUES
('AB12345','Toyota','Corolla',2018,65000,189000,'til_salgs'),
('CD54321','Volkswagen','Golf',2016,98000,149000,'til_salgs'),
('EF77777','BMW','320d',2015,120000,199000,'til_salgs'),
('GH11111','Tesla','Model 3',2020,45000,319000,'til_salgs'),
('IJ22222','Volvo','V60',2017,87000,209000,'til_salgs'),
('KL33333','Audi','A3',2014,140000,129000,'til_salgs');

INSERT INTO kunder (navn, telefon, epost) VALUES
('Ola Nordmann','90000000','ola@epost.no'),
('Kari Nordmann','91111111','kari@epost.no'),
('Ali Hassan','92222222','ali@epost.no');
```

Sjekk:

```sql
SELECT * FROM biler;
SELECT * FROM kunder;
```

---

## Del B – READ / SELECT (10–12 min)

Lag SQL-spørringer som:

1. Viser alle biler sortert på **pris lav → høy**
2. Viser biler med **pris under 200000** og `status = 'til_salgs'`
3. Viser bare kolonnene: `merke, modell, aar, pris`
4. Viser biler fra **2017 eller nyere** med **under 90000 km**
5. Viser alle biler der `modell` inneholder “3” (bruk `ILIKE`)

---

## Del C – UPDATE (10 min)

1. Sett ned prisen med **5000** på alle biler som har **over 100000 km**
2. Endre status til **solgt** på én bestemt bil (velg med `regnr`)
3. Oppdater kilometer på en bil (f.eks. hvis den har blitt prøvekjørt +120 km)

**Husk:** bruk `RETURNING *;` for å se endringen.

---

## Del D – SALG (JOIN-case) (8–10 min)

1. Registrer ett salg i tabellen `salg`:

   * Finn `id` på en bil (som du setter til solgt)
   * Finn `id` på en kunde
   * Sett en `salgspris`

Eksempel:

```sql
-- Finn ID-ene først:
SELECT id, regnr, merke, modell FROM biler WHERE regnr = 'CD54321';
SELECT id, navn FROM kunder WHERE navn = 'Kari Nordmann';

-- Registrer salg:
INSERT INTO salg (bil_id, kunde_id, salgspris)
VALUES (2, 2, 145000);
```

2. Lag en JOIN som viser: **bil + kunde + salgspris + dato**.

---

## Del E – DELETE (5–7 min)

1. Slett én bil du ikke vil ha i databasen (velg med `regnr`)
2. Slett en kunde (OBS: hvis kunden er brukt i `salg`, kan du få feil pga. referanser)

**Bonus-spørsmål:** Hvorfor kan det feile å slette en kunde som finnes i `salg`?

---

# 4) Bonus (hvis tid)

1. Legg til kolonnen `farge` i `biler` og oppdater farge på 2 biler
2. Lag en rapport: **antall biler til salgs per merke** (`GROUP BY`)
3. Finn **gjennomsnittspris** for biler til salgs (`AVG(pris)`)

---

## Mini-huskeliste (for å unngå klassiske feil)

* Semikolon `;` på slutten av SQL-linjer
* `UPDATE`/`DELETE` uten `WHERE` = endrer/sletter ALT
* Bruk `SELECT ... WHERE ...` først for å dobbeltsjekke hvilke rader du treffer
* `RETURNING *` er gull når du øver CRUD

Hvis du vil, kan jeg lage en **kort fasit** (løsningsforslag) til Del B–E med konkrete SQL-setninger.
