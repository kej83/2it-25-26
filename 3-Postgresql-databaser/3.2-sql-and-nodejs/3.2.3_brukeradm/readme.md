# Brukeradministrasjon

## Database
Vi har en database Avinor. Det er en tabell med brukere. Det skal lagres følgende data:
* fornavn
* etternavn
* e-post
* fødseldato
* eradmin (true/false)
* stilling (utvikler)
* avdeling (sikkerhet, markedsføring, osv.)

## Teknologier
nodejs med modulene express, pg og ejs. 

## Installering
(bash = born-again shell)
1. Initialiser prosjektet
```bash
npm init -y
```
2. Installer moduler
```bash
npm i express pg ejs nodemon dotenv
```

## .env
Lag en .env fil i samme mappe som package.json. 
Lagre database-passordet her, f.eks.
```env
DB_PASSWORD=mittpassordher
```

## .gitignore
Lag `.gitignore` fil i samme mappe som .env.
I fila skriver du følgende:
```gitignore
node_modules/
.env
```

## Kjøre prosjektet
For å kjøre, skriv
```bash
node .
```
Eller bruk nodemon slik
```bash
npx nodemon index.js
```