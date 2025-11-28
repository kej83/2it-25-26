# 📘 Intro til SQL (PostgreSQL)**
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="10" fill="#1b365d"/>
  <path d="M35 30 L15 50 L35 70" stroke="#f15a22" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M65 30 L85 50 L65 70" stroke="#f15a22" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="48" y="25" width="4" height="50" fill="#ffffff" rx="2"/>
</svg>
**Tema:** database, tabeller, datatyper, primærnøkler, INSERT, SELECT, WHERE, ORDER BY
**Verktøy:** pgAdmin

---

# 🧑‍🏫 **DEL 1 – Felles gjennomgang (ca. 20 min)**

## **1. Hva er en database? (2 min)**

* Et system som lagrer strukturert data.
* PostgreSQL = relasjonsdatabase som lagrer data i tabeller.

---

## **2. Lage database (2 min)**

I pgAdmin → høyreklikk **Databases → Create → Database…**

Navn: `skole_db`

(SQL som pgAdmin sender i bakgrunnen:)

```sql
CREATE DATABASE skole_db;
```

---

## **3. Vanlige datatyper (2–3 min)**

| Type         | Forklaring            | Eksempler     |
| ------------ | --------------------- | ------------- |
| `INT`        | heltall               | alder, antall |
| `SERIAL`     | auto-increment INT    | primærnøkler  |
| `VARCHAR(n)` | tekst med maks lengde | navn, adresse |
| `TEXT`       | lengre tekst          | beskrivelser  |
| `BOOLEAN`    | true/false            | aktiv, ferdig |
| `DATE`       | dato                  | fødselsdato   |

---

## **4. Lage tabell (5 min)**

Vi lager en enkel tabell `elever`:

```sql
CREATE TABLE elever (
    id SERIAL PRIMARY KEY,
    fornavn VARCHAR(50),
    etternavn VARCHAR(50),
    alder INT,
    aktiv BOOLEAN
);
```

Forklar:

* `SERIAL` + `PRIMARY KEY`
* En rad = en elev
* Datatyper valgt etter hva slags info som lagres

---

## **5. Legge inn data med INSERT (3 min)**

```sql
INSERT INTO elever (fornavn, etternavn, alder, aktiv)
VALUES 
('Maria', 'Hansen', 16, true),
('Jonas', 'Berg', 17, true),
('Sara', 'Lund', 16, false);
```

---

## **6. SELECT – hente ut data (5 min)**

### Hente alle rader:

```sql
SELECT * FROM elever;
```

### WHERE – filtrere:

```sql
SELECT * FROM elever
WHERE aktiv = true;
```

### ORDER BY – sortering:

```sql
SELECT * FROM elever
ORDER BY alder DESC;
```

Kombinere WHERE + ORDER BY:

```sql
SELECT * FROM elever
WHERE alder > 16
ORDER BY etternavn ASC;
```

---

---

# 🧩 **DEL 2 – Småoppgaver til elevene (ca. 25 min)**

Oppgavene er korte og øker gradvis i vanskelighet.

---

## **Oppgave 1 – Lag din egen tabell**

Lag en tabell `filmer` med disse feltene:

| Kolonne      | Type               |
| ------------ | ------------------ |
| id           | SERIAL PRIMARY KEY |
| tittel       | VARCHAR(100)       |
| år           | INT                |
| sjanger      | VARCHAR(50)        |
| aldersgrense | INT                |

---

## **Oppgave 2 – Legg inn data**

Legg inn **minst tre filmer** i tabellen.

Tips:

```sql
INSERT INTO filmer (tittel, år, sjanger, aldersgrense)
VALUES (...);
```

---

## **Oppgave 3 – SELECT-grunnlag**

1. Hent ut alle rader i `filmer`.
2. Vis kun tittel og år.
3. Vis alle filmer med aldersgrense 12 eller lavere.

---

## **Oppgave 4 – WHERE**

Hent alle filmer:

1. der sjanger = 'Action'
2. der år er etter 2010
3. der aldersgrense er 15 **og** sjanger = 'Skrekk'

---

## **Oppgave 5 – ORDER BY**

1. Sorter filmene etter år (eldst først).
2. Sorter etter tittel (A → Å).
3. Sorter etter sjanger og deretter år samtidig.

---

## **Oppgave 6 – Bonus**

Lag en tabell `skuespillere`:

```sql
id SERIAL PRIMARY KEY
navn VARCHAR(100)
alder INT
nasjonalitet VARCHAR(50)
```

Legg inn noen data og kjør disse SELECT-spørringene:

* Hent alle skuespillere over 40 år
* Sorter etter etternavn
* Hent kun navn på norske skuespillere

---
